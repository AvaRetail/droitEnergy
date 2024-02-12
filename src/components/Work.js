import img1 from "../img/about-us.png";
import bullet from "../img/icons/bullet.png";
import Card from "./Card";
import Unlock from '../img/icons/Unlock.png';
import Energy from '../img/icons/Energy.png';
import Core from '../img/icons/Earth Core.png';
import card3 from '../img/card3.png';
function Work() {
  return (
    <>
     
      <div className="container about">
    
        <div className="about-container">
          <hr className="solid-line" />
          <h1 className="about-h1">&nbsp; How It Works </h1>
        </div>

        <div className="container services">
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-2 leftPadding">
                        <Card title="Revealing Earth's Power" img={Unlock} text="Welcome to the future of sustainable energy – where we harness the Earth's own warmth to power our world. Let's delve into the fundamentals of geothermal energy and discover how this natural marvel is revolutionizing the way we generate power." />
                    </div>
                    <div className="col-md-6 mb-2">
                    <Card title="What is Geothermal Energy?" img={Core} text="Geothermal energy is the Earth's internal heat energy stored beneath its surface. This incredible resource originates from the Earth's formation and the decay of radioactive isotopes. As we tap into this vast reservoir, we unlock a renewable and clean source of power that stands out in the crowded energy landscape." />
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Card title="How is Geothermal Energy Produced?" img={Energy} text="The process of harnessing geothermal energy begins by drilling deep into the Earth's crust. The Earth's interior, at these depths, is hotter than the surface, and this heat can be captured through wells. Water is then circulated through these wells, turning into steam as it encounters the intense heat. This steam is what drives turbines, generating electricity." />
                    </div>
                    <div className="col-md-6 mb-2">
                    <Card title="How Does Geothermal Energy Work?" img={Energy} text="Unlike some other renewable sources, geothermal energy is a consistent, 24/7 power supply – it's not dependent on weather conditions or time of day. In essence, geothermal energy is a clean, reliable, and sustainable power source that harnesses the Earth's natural heat. By utilizing this incredible force, we're not just providing energy for today; we're investing in a greener, more sustainable tomorrow" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
      </div>
    </>
  );
}
export default Work;
