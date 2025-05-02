import Hero from '@/components/hero/Hero';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

const BASE_URL =
  "https://www.t20mumbai.com/sifeeds/multisport/" +
  "?methodtype=3&client=42&sport=1&league=indian_domestic" +
  "&timezone=0530&language=en&tournament=";

const TOURNAMENT_IDS = {
  "Season 1": 876,
  "Season 2": 1061,
};

const TEAM_NAMES = [
  "Aakash Tigers Mumbai Western Suburbs",
  "Triumph Knights Mumbai North East",
  "ARCS Andheri",
  "SoBo SuperSonics",
  "Eagle Thane Strikers",
  "North Mumbai Panthers",
  "NaMo Bandra Blasters",
  "Shivaji Park Lions"
];

export async function generateStaticParams() {
  const seasons = Object.keys(TOURNAMENT_IDS);
  const teams = ['All Teams', ...TEAM_NAMES];

  const params = [];

  for (const season of seasons) {
    for (const team of teams) {
      params.push({
        season,
        team
      });
    }
    params.push({ season });
  }

  params.push({});

  return params;
}

async function fetchTournamentData(tournamentId) {
  try {
    const res = await fetch(BASE_URL + tournamentId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to load feed:', err);
    return { matches: [] };
  }
}

function processMatches(jsonData) {
  return (jsonData.matches || []).map((m) => {
    const game_id = m.game_id;
    const [p1 = {}, p2 = {}] = m.participants || [];
    const fmt = (p) => {
      const key = (p.short_name || "").toLowerCase();
      return {
        name: p.name || "",
        logo: key
          ? `/images/fixtures/${key}.svg`
          : "/images/fixtures/default.svg",
        score: (p.value || "").split(" ")[0] || "",
        overs: p.value?.match(/$([^)]+)$/)?.[1] || "",
      };
    };
    return {
      game_id,
      season: m.series_name.toUpperCase(),
      status: m.event_status.toUpperCase(),
      team1: fmt(p1),
      team2: fmt(p2),
      matchInfo: {
        result: m.event_sub_status,
        date: new Date(m.start_date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        location: m.venue_name.toUpperCase(),
      },
    };
  });
}

export async function generateMetadata() {
  return {
    title: 'T20 Mumbai - Fixtures',
    description: 'View all fixtures for T20 Mumbai tournament',
  };
}

export default async function Page({ params, searchParams }) {
  const resolvedSearchParams = await searchParams;

  const season = resolvedSearchParams?.season || params?.season || 'Season 2';
  const team = resolvedSearchParams?.team || params?.team || 'All Teams';

  const tournamentId = TOURNAMENT_IDS[season];
  const tournamentData = await fetchTournamentData(tournamentId);

  const allMatches = processMatches(tournamentData);

  const matches = allMatches.filter((m) => {
    if (team === "All Teams") return true;
    return TEAM_NAMES.includes(m.team1.name) && (m.team1.name === team || m.team2.name === team);
  });

  return (
    <div className="w-full bg-white">
      <Hero
        imgUrl="/images/teams/hero/bg.svg"
        heading="Fixtures"
        subheading="Player Profile"
      />
      <div className="section-width">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-0">
          <h2 className=" uppercase text-black">
            {season} Fixtures
          </h2>
          <form method="get" className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0">
            <span className="text-sm text-gray-500 sm:inline">
              Filter by
            </span>
            <select
              name="season"
              defaultValue={season}
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded mt-2 sm:mt-0 sm:mr-4"
            >
              {Object.keys(TOURNAMENT_IDS).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              name="team"
              defaultValue={team}
              className=" py-2 border border-orange-500 text-orange-500 rounded mt-2 sm:mt-0"
            >
              <option>All Teams</option>
              {TEAM_NAMES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </form>

        </div>

        <div className="md:py-8 bg-white flex flex-col gap-6 py-8">
          {matches.length > 0 ? (
            matches.map((match, idx) => (
              <div
                key={idx}
                className="rounded-md border overflow-hidden text-black"
              >
                {/* header */}
                <div className="relative bg-[#E07E27] text-white text-sm font-semibold px-4 py-2 flex justify-between items-center">
                  <span>{match.season}</span>
                  <div
                    className="absolute top-0 right-0 h-full w-[120px] md:w-[150px] bg-black flex items-center justify-center text-xs font-bold"
                    style={{
                      clipPath: "polygon(20% 0%,100% 0%,100% 100%,0% 100%)",
                    }}
                  >
                    {match.status}
                  </div>
                </div>

                {/* teams & info */}
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="flex-1 flex flex-col md:flex-row items-center justify-between p-3">
                    {/* team 1 */}
                    <div className="flex items-center gap-3 w-full md:w-[35%]">
                      <Image
                        src={`/images/fixtures/${match.team1.name}.svg`}
                        alt={`${match.team1.name} logo`}
                        width={50}
                        height={60}
                        className="object-contain h-28 w-28"
                      />
                      <div className="text-[10px] sm:text-base font-semibold uppercase">
                        {match.team1.name}
                      </div>
                    </div>
                    {/* team1 score */}
                    <div className="text-center">
                      <div className="font-bold text-sm sm:text-3xl text-[#894B14AB]">
                        {match.team1.score}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#894B14AB]">
                        ({match.team1.overs})
                      </div>
                    </div>
                    {/* vs */}
                    <div className="text-sm sm:text-lg font-semibold">vs</div>
                    {/* team2 score */}
                    <div className="text-center">
                      <div className="font-bold text-sm sm:text-3xl text-[#E07E27]">
                        {match.team2.score}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#E07E27]">
                        ({match.team2.overs})
                      </div>
                    </div>
                    {/* team 2 */}
                    <div className="flex items-center gap-3 w-full md:w-[30%]">
                      <Image
                        src={`/images/fixtures/${match.team2.name}.svg`}
                        alt={`${match.team2.name} logo`}
                        width={50}
                        height={60}
                        className="object-contain w-28 h-28"
                      />
                      <div className="text-[10px] sm:text-base font-semibold uppercase">
                        {match.team2.name}
                      </div>
                    </div>
                  </div>

                  {/* match info panel */}
                  <div className="bg-[#F5F5F5] px-12 py-8 flex flex-col justify-center lg:w-1/4">
                    <div className="text-xs sm:text-base font-bold text-[#E07E27]">
                      MATCH INFO
                    </div>
                    <div className="text-base font-semibold leading-tight mb-1 pt-2">
                      {match.matchInfo.result}
                    </div>
                    <div className="text-xs text-black flex flex-col sm:flex-row justify-between gap-1">
                      <span>{match.matchInfo.date}</span>
                      <span>{match.matchInfo.location}</span>
                    </div>
                    <Link href={`/scores/${match.game_id}`}>
                      <span className="mt-4 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold">
                        Match center
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M9.33333 3.33333L13.3333 7.33333M13.3333 7.33333L9.33333 11.3333M13.3333 7.33333H2.66667"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No fixtures found.
            </div>
          )}
        </div>
      </div>

      <Script id="auto-submit" strategy="afterInteractive">
        {`
          document.querySelectorAll('select[name]').forEach(el => {
            el.addEventListener('change', () => el.form.submit())
          });
        `}
      </Script>
    </div>
  );
}
