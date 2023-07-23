import vid2 from "../assets/vb.mp4";

import Search from "./Search";

const Page1 = () => {
  return (
    <div className="page1__section">
      <div className="page1__section--vid">
        <video loop autoPlay className="vid__bottom">
          <source src={vid2} type="video/mp4" />
        </video>
      </div>
      <form className="d-flex page__form" role="search">
        <Search />
      </form>
    </div>
  );
};

export default Page1;
