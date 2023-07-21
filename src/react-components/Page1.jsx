import vid2 from "../assets/vb.mp4";
import Search from "./Search";

const Page1 = () => {
  return (
    <div className="page1__section">
      <div className="page1__section--vid fixed top-0 left-0 w-screen h-screen">
        <video loop autoPlay className="w-full h-full object-cover">
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
