const TitleComponent = ({ title, orange = false }) => {
  return (
    <>
      {orange ? (
        <div className="relative h-fit px-8 py-2 bg-[#DE6927]   xl:w-[480px] lg:w-[320px] rounded-md mb-12">
          <Image
            src={"/images/elements/header-element.png"}
            width={50}
            height={50}
            className="w-auto absolute h-full top-0 -left-0 rounded-l-md"
            alt="Logo"
          />
          <h2 className="text-white">{title}</h2>
        </div>
      ) : (
        <div className="relative h-fit px-8 py-2 bg-gradient-to-r from-black to-[#213375] xl:w-[480px] lg:w-[320px] rounded-md mb-12">
          <Image
            src={"/images/elements/header-element.png"}
            width={50}
            height={50}
            className="w-auto absolute h-full top-0 -left-0 rounded-l-md"
            alt="Logo"
          />
          <h2 className="text-white">Teams</h2>
        </div>
      )}
    </>
  );
};

export default TitleComponent;
