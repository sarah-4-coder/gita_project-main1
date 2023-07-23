// import vid1 from "../videos/vt.mp4";
// import vid2 from "../videos/vb.mp4";
// import "./Design.css"
import Gif from "../assets/ball_gif.gif"
import Search from "./Search";

const Page1 = () => {
  return (
    <div className="page1__section">
      <div className="page1__section--vid">
        <img alt="" src={Gif} className="h-screen w-screen"></img>
        {/* <video loop autoPlay className="vid__bottom">
          <source src={vid2} type="video/mp4" />
        </video> */}
      </div>
      <form className="d-flex page__form" role="search">
        <Search />
      </form>
    </div>
  );
};

export default Page1;