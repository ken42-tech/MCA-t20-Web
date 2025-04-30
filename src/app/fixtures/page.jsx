import Hero from "@/components/hero/Hero";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
// import MatchPage from '../scores/[game_id]/page';

// Base up to `&tournament=`
const BASE_URL =
  "https://www.t20mumbai.com/sifeeds/multisport/" +
  "?methodtype=3&client=42&sport=1&league=indian_domestic" +
  "&timezone=0530&language=en&tournament=";

// Match your <option> labels exactly
const TOURNAMENT_IDS = {
  "Season 1": 876,
  "Season 2": 1061,
};

export default async function Page({ searchParams }) {
  // await the dynamic API
  const sp = await searchParams;
  const season = sp.season || "Season 2";
  const team = sp.team || "All Teams";

  // server‐side fetch
  let json = { matches: [] };
  try {
    const res = await fetch(BASE_URL + TOURNAMENT_IDS[season], {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    json = await res.json();
  } catch (err) {
    console.error("Failed to load feed:", err);
  }

  // map + filter, now including game_id
  const allMatches = (json.matches || []).map((m) => {
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
        overs: p.value?.match(/\(([^)]+)\)/)?.[1] || "",
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

  // apply team filter
  const matches = allMatches.filter((m) => {
    if (team === "All Teams") return true;
    return m.team1.name === team || m.team2.name === team;
  });

  return (
    <div className="w-full bg-white">
      <Hero
        imgUrl="/images/teams/hero/bg.svg"
        heading="Fixtures"
        subheading="Player Profile"
      />

      <div className="section-width">
        <div className="flex items-center justify-between py-8 px-4 md:px-0">
          <h1 className="text-4xl font-bold uppercase text-black">
            {season} Fixtures
          </h1>
          <form method="get" className="flex items-center gap-4">
            <span className="hidden md:inline text-sm text-gray-500">
              Filter by
            </span>
            <select
              name="season"
              defaultValue={season}
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded"
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
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded"
            >
              <option>All Teams</option>
              <option>Team A</option>
              <option>Team B</option>
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
                      <div className="text-[10px] md:text-base font-semibold uppercase">
                        {match.team1.name}
                      </div>
                    </div>
                    {/* team1 score */}
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-3xl text-[#894B14AB]">
                        {match.team1.score}
                      </div>
                      <div className="text-[10px] md:text-xs text-[#894B14AB]">
                        ({match.team1.overs})
                      </div>
                    </div>
                    {/* vs */}
                    <div className="text-sm md:text-lg font-semibold">vs</div>
                    {/* team2 score */}
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-3xl text-[#E07E27]">
                        {match.team2.score}
                      </div>
                      <div className="text-[10px] md:text-xs text-[#E07E27]">
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
                      <div className="text-[10px] md:text-base font-semibold uppercase">
                        {match.team2.name}
                      </div>
                    </div>
                  </div>

                  {/* match info panel */}
                  <div className="bg-[#F5F5F5] px-12 py-8 flex flex-col justify-center lg:w-1/4">
                    <div className="text-xs md:text-base font-bold text-[#E07E27]">
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

                    {/* Inline match center */}
                    <div className="mt-4">
                      {/* <MatchPage params={{ game_id: match.game_id }} /> */}
                    </div>
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

      {/* Auto-submit selects on change */}
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
