import vid2 from "../assets/vb.mp4";
import Search from "./Search";

const Page1 = () => {
  return (
    <div className="page1__section">
      <div>
        <video autoPlay muted loop id="myVideo" className='sm:w-[100vw] sm:h-[100vh] h-[60vh] object-cover opacity-100  top-0 -z-50 relative' >
          <source src={vid2} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <form className="d-flex page__form" role="search">
        <Search />
      </form>
    </div>
  );
};

export default Page1;
