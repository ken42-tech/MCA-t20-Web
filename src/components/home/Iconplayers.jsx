const PlayerCard = ({ image, name }) => {
  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-lg m-2">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-blue-900"></div>

      {/* Image container */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image || "/api/placeholder/240/240"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name label */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-orange-500 text-white px-4 py-1 rounded-md font-medium text-sm">
          {name}
        </div>
      </div>
    </div>
  );
};

export default function IconPlayers() {
  // Sample player data
  const players = [
    { id: 1, name: "Aditya Tare", image: "/images/home/" },
    { id: 2, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 3, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 4, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 5, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 6, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 7, name: "Aditya Tare", image: "/api/placeholder/240/240" },
    { id: 8, name: "Aditya Tare", image: "/api/placeholder/240/240" },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center">
        {players.map((player) => (
          <PlayerCard key={player.id} image={player.image} name={player.name} />
        ))}
      </div>
    </div>
  );
}
