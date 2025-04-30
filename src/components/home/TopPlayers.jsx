import Image from "next/image";
import TitleComponent from "../common/TitleComponent";


const topPlayersData = {
  batsman: {
    rank: 1,
    playerImage: "/images/playerProfile/prithvi.svg",
    teamLogo: "/images/teams/hero/teamLogo/northmumbai.svg",
    playerName: "Prithvi Shaw",
    runs: 249,
    strikeRate: 149.10,
    matchesPlayed: 25,
    fours: 25,
    sixes: 9,
    leaderboard: [
      {
        name: "Aditya Tare",
        matches: 5,
        runs: 244,
        sr: 138.63,
        fours: 31,
        sixes: 3,
        logo: "/images/teams/hero/teamLogo/thane.svg"
      },
      {
        name: "Jay Bista",
        matches: 6,
        runs: 242,
        sr: 139.27,
        fours: 27,
        sixes: 5,
        logo: "/images/teams/hero/teamLogo/sobo.svg"
      },
      {
        name: "Akhil H",
        matches: 7,
        runs: 231,
        sr: 129.77,
        fours: 20,
        sixes: 8,
        logo: "/images/teams/hero/teamLogo/arcs.svg"
      },
      {
        name: "Parag K",
        matches: 7,
        runs: 229,
        sr: 122.77,
        fours: 19,
        sixes: 8,
        logo: "/images/teams/hero/teamLogo/sobo.svg"
      }
    ]
  },
  bowler: {
    rank: 1,
    playerImage: "/images/playerProfile/dhurmil.svg",
    teamLogo: "/images/teams/hero/teamLogo/sobo.svg",
    playerName: "Dhrumil Matkar",
    runs: 15,
    strikeRate: 10.8,
    matchesPlayed: 7,
    ecoRate: 66.6,
    maidens: 1,
    leaderboard: [
      {
        name: "Atif Attarwala",
        matches: 7,
        wickets: 12,
        sr: 13.5,
        eco: 6.66,
        maidens: 0,
        logo: "/images/teams/hero/teamLogo/northmumbai.svg"
      },
      {
        name: "Prathamesh D",
        matches: 6,
        wickets: 10,
        sr: 14.4,
        eco: 8.03,
        maidens: 0,
        logo: "/images/teams/hero/teamLogo/northmumbai.svg"
      },
      {
        name: "Deepak S",
        matches: 7,
        wickets: 10,
        sr: 12.2,
        eco: 7.5,
        maidens: 0,
        logo: "/images/teams/hero/teamLogo/arcs.svg"
      },
      {
        name: "Royston D",
        matches: 5,
        wickets: 10,
        sr: 10.8,
        eco: 7.94,
        maidens: 0,
        logo: "/images/teams/hero/teamLogo/sobo.svg"
      }
    ]
  }
};

const TopPlayers = () => {
  return (
    <div className="section-width section-padding">
      <TitleComponent title="Top Players" />
      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-10">
        <TopPlayerCard
          type="batsman"
          rank={topPlayersData.batsman.rank}
          playerImage={topPlayersData.batsman.playerImage}
          teamLogo={topPlayersData.batsman.teamLogo}
          playerName={topPlayersData.batsman.playerName}
          runs={topPlayersData.batsman.runs}
          strikeRate={topPlayersData.batsman.strikeRate}
          matchesPlayed={topPlayersData.batsman.matchesPlayed}
          fours={topPlayersData.batsman.fours}
          sixes={topPlayersData.batsman.sixes}
          leaderboard={topPlayersData.batsman.leaderboard}
        />
        <TopPlayerCard
          type="bowler"
          rank={topPlayersData.bowler.rank}
          playerImage={topPlayersData.bowler.playerImage}
          teamLogo={topPlayersData.bowler.teamLogo}
          playerName={topPlayersData.bowler.playerName}
          runs={topPlayersData.bowler.runs}
          strikeRate={topPlayersData.bowler.strikeRate}
          matchesPlayed={topPlayersData.bowler.matchesPlayed}
          ecoRate={topPlayersData.bowler.ecoRate}
          maidens={topPlayersData.bowler.maidens}
          leaderboard={topPlayersData.bowler.leaderboard}
        />

      </div>
    </div>
  );
};


const TopPlayerCard = ({
  type = "batsman",
  rank = 1,
  playerImage,
  teamLogo,
  playerName,
  runs,
  strikeRate,
  matchesPlayed,
  fours,
  sixes,
  ecoRate,
  maidens,
  leaderboard = [],
}) => {
  return(
    <div className="bg-white overflow-hidden shadow-lg w-full max-w-3xl">
  {/* Top Section */}
  <div className="bg-black text-white px-6 py-4">
    <div className="text-xl font-semibold">{type === "batsman" ? "TOP BATSMAN" : "TOP BOWLER"}</div>
  </div>

  {/* Player Highlight Section */}
  <div className="relative bg-gradient-to-r from-[rgb(10,31,49)] to-[rgb(34,98,150)] bg-cover bg-center text-white px-4 sm:px-6 flex flex-col 2xl:flex-row items-center gap-4"
    style={{
      backgroundImage: `url('/images/playerProfile/bgVector.svg'), linear-gradient(to right, rgb(18,53,82), rgb(34,98,150))`,
      backgroundBlendMode: 'normal'
    }}
  >
    {/* #1 in top-left of this section */}
    <div className="absolute top-4 left-4 text-5xl font-bold italic">
        <Image width={50} height={50} src="/images/playerProfile/1.svg" alt="rank" />
    </div>

    {/* logo in right-left of this section */}
    <div className="absolute top-4 right-4 text-5xl font-bold italic">
      <Image
        width={50}
        height={50}
        src={teamLogo}
        alt={`${playerName} team logo`}
      />
    </div>

    <Image
      src={playerImage}
      alt="Player"
      width={128}
      height={128}
      className="object-contain w-48 h-auto "
    />
    <div className="flex-1">
      <div className="text-3xl font-semibold mb-8 text-center 2xl:text-start">{playerName}</div>

      <div className="grid grid-cols-2 justify-center sm:flex sm:flex-wrap gap-6 mt-4 text-center bg-[rgb(20,59,94)] p-4 mb-4 rounded-md">
        <div className="flex justify-center items-end gap-2">
          <div className="text-4xl font-bold">{runs}</div>
          <div className="text-[10px] ">RUNS</div>
        </div>
        <div className="flex justify-center items-end gap-2">
          <div className="text-4xl font-bold">{strikeRate}</div>
          <div className="text-[10px] ">STRIKE <br /> RATE</div>
        </div>
        <div className="flex justify-center items-end gap-2">
          <div className="text-4xl font-bold">{matchesPlayed}</div>
          <div className="text-[10px] ">MATCHES <br /> PLAYED</div>
        </div>
        {type === 'batsman' ? (
          <>
            <div className="flex justify-center items-end gap-2">
              <div className="text-4xl font-bold">{fours}</div>
              <div className="text-[10px]">4s</div>
            </div>
            <div className="flex justify-center items-end gap-2">
              <div className="text-4xl font-bold">{sixes}</div>
              <div className="text-[10px]">6s</div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-end gap-2">
              <div className="text-4xl font-bold">{ecoRate}</div>
              <div className="text-[10px]">ECO <br /> RATE</div>
            </div>
            <div className="flex justify-center items-end gap-2">
              <div className="text-4xl font-bold">{maidens}</div>
              <div className="text-[10px]">MAIDEN</div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>

  {/* Leaderboard */}
  <div className="bg-[rgba(11,18,32,1) overflow-x-auto">
    <table className="w-full min-w-[500px] text-[10px] text-left">
      {/* Header Section */}
      <thead className="text-white bg-[rgba(11,18,32,1)]">
        <tr className="border-b border-gray-600">
          <th className="py-2 px-6 text-left">Name</th>
          <th className="py-2 px-2 text-center">MP</th>
            {type === 'batsman' ? (
            <>
              <th className="py-2 px-2 text-center">Runs</th>
              <th className="py-2 px-2 text-center">SR</th>
              <th className="py-2 px-2 text-center">4s</th>
              <th className="py-2 px-2 text-center">6s</th>
            </>
          ) : (
            <>
              <th className="py-2 px-2 text-center">Wickets</th>
              <th className="py-2 px-2 text-center">SR</th>
              <th className="py-2 px-2 text-center">Eco</th>
              <th className="py-2 px-2 text-center">Maiden</th>
            </>
          )}
        </tr>
      </thead>

      {/* Body Section */}
      <tbody className="text-white bg-[rgba(15,26,45,1)]">
        {leaderboard.map((player, index) => (
          <tr key={index} className="border-b border-gray-700 hover:bg-[rgba(20,35,60,1)]">
            <td className="py-2 px-6 flex items-center gap-2">
              <img src={player.logo} alt={player.name} className="w-5 h-5" />
              {player.name}
            </td>
            <td className="py-2 px-2 text-center">{player.matches}</td>
              {type === 'batsman' ? (
              <>
                <td className="py-2 px-2 text-center">{player.runs}</td>
                <td className="py-2 px-2 text-center">{player.sr}</td>
                <td className="py-2 px-2 text-center">{player.fours}</td>
                <td className="py-2 px-2 text-center">{player.sixes}</td>
              </>
            ) : (
              <>
                <td className="py-2 px-2 text-center">{player.wickets}</td>
                <td className="py-2 px-2 text-center">{player.sr}</td>
                <td className="py-2 px-2 text-center">{player.eco}</td>
                <td className="py-2 px-2 text-center">{player.maidens}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
  
}

export default TopPlayers;
