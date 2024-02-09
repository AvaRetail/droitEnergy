
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import logo from '../img/logo.png';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import logo5 from '../img/logo5.png';
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
    <header>
    <img src="https://t3.ftcdn.net/jpg/02/51/80/40/360_F_251804029_ON3oL8BkopdueiT61zXaDMOF3qfSiWNx.jpg" alt="" className="logo" />
    <nav>
        <ul className="navlinks">
            <li className="items"><a href="#">Home</a></li>
            <li className="items"><a href="#">Services</a></li>
            <li className="items"><a href="#">Blog</a></li>
            <li className="items"><a href="#">About-Us</a></li>
            <li><a href="#"><button>Contact Us</button></a></li>
            <li onclick="showSidebar()"><a href="#"><ion-icon name="menu-outline"></ion-icon></a></li>
        </ul>
        <ul className="sidebar">
            <li onclick="closeSidebar()"><a href="#"><ion-icon name="close-outline"></ion-icon></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About-Us</a></li>
            <img src="https://t3.ftcdn.net/jpg/02/51/80/40/360_F_251804029_ON3oL8BkopdueiT61zXaDMOF3qfSiWNx.jpg" alt="" />
        </ul>
    </nav>
</header>
  );
}
export default Navbar;
