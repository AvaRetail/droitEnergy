
import React, {useEffect} from "react";
import background from '../video/back.mp4';
import background1 from '../video/back1.mp4';
import background3 from '../video/back3.mp4';
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
// import './Header.css';
function Header() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }
  return (
    <>
      <div className="header-container" >
      {/* <img alt="background" src={background} className='background-img' /> */}
      <video autoPlay loop muted className='background-video'  data-aos="fade-up" data-aos-duration="4500">
        <source src={background1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="background-img"></div> */}
      <div className="text-container"   data-aos="fade-right" data-aos-duration="4500">
        <h1>
        <span className="main-home-text">Powering Progress </span>
        <br /><strong className="main-home-text">Preserving the Planet</strong></h1>
        <p className="pt-20">Our mission is to utilize advancements in geoscience<br /> to expedite the shift towards clean energy by delivering affordable
        <br /> and dependable geothermal power solution </p>
        
         {/* <button type="button" className="btn readmore">
        <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Read More
              </Link>
        </button>  */}
        
      </div>
    </div>

    </>
  );
}
export default Header;
