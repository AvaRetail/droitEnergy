
import React, {useEffect} from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../img/logo.png';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import logo6 from '../img/logo6.png';
import logo8 from '../img/logo8.png';
// import './Navbar.css';
function Navbar() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="4500">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            {/* <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            > */}
              <img alt="logo" src={logo8} className="droitlogo"/>
            {/* </Link> */}
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
           
            <li>
            <button type="button" className="btn readmore">
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact Us
              </Link>
              </button>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
       </div>
    </nav>
  );
}
export default Navbar;
