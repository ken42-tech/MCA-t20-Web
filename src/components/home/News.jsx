import TitleComponent from "../common/TitleComponent";

const News = () => {
  return (
    <div className="section-width section-padding">
      <TitleComponent title={"Socials"} />
      <div className="grid grid-cols-3 gap-8 ">
        <div className="">
          <div className="bg-[#E07E27] px-5 py-5 rounded-t-xl">
            <p>@t20mumbai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
