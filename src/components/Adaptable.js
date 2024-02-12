import AdaptableCard from "./AdaptableCard";
import img1 from "../img/ao-1.jpg";
import img2 from "../img/ao-2.jpg";
import img3 from "../img/ao-3.jpg";
function Adaptable() {
  return (
    <>
        <div className="container">

        <div className="about-container">
          <h1 className="about-h1">Adaptable Options &nbsp;</h1>
          <hr className="solid-line" />
        </div>
        <p className="ad-main-p">
          A sustainable energy solution, widely accessible in close proximity to
          every community and industrial hub across the globe
        </p>
        <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 mb-2 leftPadding">
                  <AdaptableCard
                    img={img1}
                    imgtext="A sustainable <br/> solution"
                    text="We are committed to creating a sustainable future by providing highly space-efficient and affordable energy sources. With our team of experts and trusted partner companies, we are dedicated to building a network of geothermal energy plants across India, reducing our dependency on fossil fuels and paving the way for a greener tomorrow. "
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 mb-2 leftPadding">
                  <AdaptableCard
                    img={img2}
                    imgtext="Clean Energy <br />for All "
                    text="By harnessing geothermal energy, we offer a clean and reliable alternative to traditional energy sources. Our mission is to make clean energy accessible to everyone, ensuring a brighter and more sustainable future for generations to come. "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 mb-2 leftPadding">
                  <AdaptableCard
                    img={img3}
                    imgtext="Thinking beyond business"
                    text="We are committed to creating a positive impact on society and aligning our efforts with the United Nations' Sustainable Development Goals. By investing in geothermal energy, we are actively working towards achieving goals such as affordable and clean energy (SDG 7) and climate action (SDG 13). "
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
    </>
  );
}
export default Adaptable;
