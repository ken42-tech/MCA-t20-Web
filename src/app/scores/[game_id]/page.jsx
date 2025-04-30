import Image from 'next/image';
import Hero from '@/components/hero/Hero';

export default async function MatchPage({ params }) {
    const { game_id } = params;
    const url = `https://www.t20mumbai.com/sifeeds/repo/cricket/live/json/${game_id}.json`;

    if (!game_id) {
        console.error('No game_id provided to MatchPage component');
        return (
            <div className="section-width text-center py-8">
                <h2 className="text-lg font-semibold">Match data not available</h2>
            </div>
        );
    }

    let json;
    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        json = await res.json();
    } catch (err) {
        console.error('Failed to load match data:', err);
        return (
            <div className="section-width text-center py-8">
                <h2 className="text-lg font-semibold">Error loading match data</h2>
            </div>
        );
    }

    const match = json.match ?? json;  // Fallback in case match data is not available
    return <ScoreCard match={match} />;
}

function ScoreCard({ match }) {
    const homeId = match.Matchdetail.Team_Home;
    const awayId = match.Matchdetail.Team_Away;
    const teams = match.Teams;
    const innings = match.Innings || [];

    const homeTeam = teams[homeId];
    const awayTeam = teams[awayId];
    const homeTeamName = homeTeam?.Name_Full ?? 'Unknown Team';
    const awayTeamName = awayTeam?.Name_Full ?? 'Unknown Team';

    const homeLogo = `/images/fixtures/${homeTeam?.Name_Short?.toLowerCase()}.svg`;
    const awayLogo = `/images/fixtures/${awayTeam?.Name_Short?.toLowerCase()}.svg`;

    const homeInnings = innings.find(i => i.Battingteam === homeId) || {};
    const awayInnings = innings.find(i => i.Battingteam === awayId) || {};

    const batting = (awayInnings.Batsmen || [])
        .filter(b => b.Runs !== '' && b.Runs != null)
        .map(b => ({
            name: awayTeam.Players[b.Batsman]?.Name_Full || 'Unknown Player',
            dismissal: b.Howout || 'Not Dismissed',
            runs: b.Runs || 0,
            balls: b.Balls || 0,
            fours: b.Fours || 0,
            sixes: b.Sixes || 0,
            sr: b.Strikerate || 0
        }));

    const didNotBat = (awayInnings.Batsmen || [])
        .filter(b => !b.Runs)
        .map(b => awayTeam.Players[b.Batsman]?.Name_Full || 'Unknown Player');

    const extras = {
        byes: Number(awayInnings.Byes || 0),
        legByes: Number(awayInnings.Legbyes || 0),
        wides: Number(awayInnings.Wides || 0),
        noBalls: Number(awayInnings.Noballs || 0),
        penalty: Number(awayInnings.Penalty || 0)
    };
    extras.total = Object.values(extras).reduce((sum, v) => sum + v, 0);

    return (
        <>
            <Hero
                imgUrl="/images/teams/hero/bg.svg"
                heading="Fixtures"
                subheading="Player Profile"
            />
            <div className="bg-blue-900 bg-[url('/images/bg-pattern.png')] bg-cover text-white section-width">
                <div className="py-4 flex items-center justify-between mt-20">
                    <div className="flex items-center space-x-3">
                        <Image src={homeLogo} alt={homeTeamName} width={48} height={48} className="object-contain" />
                        <div className="font-semibold uppercase text-sm">{homeTeamName}</div>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl font-bold text-orange-400">{homeInnings.Total}/{homeInnings.Wickets}</span>
                        <span className="ml-2 text-sm">({homeInnings.Overs} Overs)</span>
                        <span className="mx-4 text-xl font-bold">VS</span>
                        <span className="text-2xl font-bold text-orange-400">{awayInnings.Total}/{awayInnings.Wickets}</span>
                        <span className="ml-2 text-sm">({awayInnings.Overs} Overs)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="font-semibold uppercase text-sm text-right">{awayTeamName}</div>
                        <Image src={awayLogo} alt={awayTeamName} width={48} height={48} className="object-contain" />
                    </div>
                </div>
                <div className="bg-blue-800 text-center py-1">
                    <span className="text-sm font-medium uppercase">{match.Matchdetail.Equation}</span>
                </div>
            </div>

            {/* Main Scorecard Card */}
            <div className="section-width bg-white overflow-hidden shadow-md my-8 mx-auto">
                {/* Subheader */}
                <div className="flex items-center bg-black text-white px-6 py-4">
                    <div className="flex items-center space-x-3 flex-1">
                        <Image src={awayLogo} alt={awayTeamName} width={32} height={32} />
                        <span className="uppercase font-medium">{awayTeamName}</span>
                    </div>
                    <div className="text-sm">
                        <span className="font-semibold">{awayInnings.Total}/{awayInnings.Wickets}</span>
                        <span className="ml-2">({awayInnings.Overs} Overs)</span>
                        <span className="ml-4">CRR: {awayInnings.Runrate} rpo</span>
                    </div>
                </div>

                {/* Batting table */}
                <div className="overflow-x-auto bg-black text-white px-6 py-4">
                    <div className="uppercase font-bold mb-2">Batting</div>
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-2">Batsman</th>
                                <th className="py-2">Dismissal</th>
                                <th className="py-2">R</th>
                                <th className="py-2">B</th>
                                <th className="py-2">4S</th>
                                <th className="py-2">6S</th>
                                <th className="py-2">S/R</th>
                            </tr>
                        </thead>
                        <tbody>
                            {batting.map((p, i) => (
                                <tr key={i} className="border-b border-gray-800">
                                    <td className="py-2">{p.name}</td>
                                    <td className="py-2">{p.dismissal}</td>
                                    <td className="py-2">{p.runs}</td>
                                    <td className="py-2">{p.balls}</td>
                                    <td className="py-2">{p.fours}</td>
                                    <td className="py-2">{p.sixes}</td>
                                    <td className="py-2">{p.sr}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Did Not Bat */}
                {didNotBat.length > 0 && (
                    <div className="bg-black text-white px-6 py-4 border-t border-gray-700">
                        <div className="uppercase font-bold mb-1">Did Not Bat</div>
                        <ul className="list-disc list-inside text-sm">
                            {didNotBat.map((name, i) => (
                                <li key={i}>{name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Extras */}
                <div className="bg-black text-white px-6 py-4 border-t border-gray-700">
                    <div className="font-medium">
                        Extras: <span className="font-semibold">{extras.total} runs</span>
                        <span className="ml-2 text-xs text-gray-400">
                            (B: {extras.byes}, LB: {extras.legByes}, WD: {extras.wides}, NB: {extras.noBalls}, P: {extras.penalty})
                        </span>
                    </div>
                </div>

                {/* Fall of Wickets */}
                <div className="bg-blue-50 px-6 py-4">
                    <div className="flex items-center mb-2">
                        <Image src={awayLogo} alt={awayTeamName} width={32} height={32} />
                        <span className="font-bold ml-2 uppercase text-black">Fall of Wickets</span>
                    </div>
                    <p className="text-sm text-black">
                        {(awayInnings.FallofWickets || [])
                            .map(f => {
                                const player = awayTeam.Players[f.Batsman]?.Name_Full || '';
                                return `${f.Score} (${player}, ${f.Overs} Overs)`;
                            })
                            .join(', ')}
                    </p>
                </div>

                {/* Bowling */}
                <div className="overflow-x-auto bg-black text-white px-6 py-4">
                    <div className="flex items-center mb-2">
                        <Image src={homeLogo} alt={homeTeamName} width={32} height={32} />
                        <span className="uppercase font-semibold ml-2">{homeTeamName} Bowling</span>
                    </div>
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-2">Bowler</th>
                                <th className="py-2">O</th>
                                <th className="py-2">M</th>
                                <th className="py-2">R</th>
                                <th className="py-2">W</th>
                                <th className="py-2">NB</th>
                                <th className="py-2">WD</th>
                                <th className="py-2">E/R</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(homeInnings.Bowlers || []).map((b, i) => {
                                const bowlerName = homeTeam.Players[b.Bowler]?.Name_Full || '';
                                return (
                                    <tr key={i} className="border-b border-gray-800">
                                        <td className="py-2">{bowlerName}</td>
                                        <td className="py-2">{b.Overs}</td>
                                        <td className="py-2">{b.Maidens}</td>
                                        <td className="py-2">{b.Runs}</td>
                                        <td className="py-2">{b.Wickets}</td>
                                        <td className="py-2">{b.Noballs}</td>
                                        <td className="py-2">{b.Wides}</td>
                                        <td className="py-2">{b.Economyrate}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="border-t border-gray-900" />
            </div>
        </>
    );
}
