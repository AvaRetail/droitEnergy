import img1 from "../img/about-us.png";
import bullet from "../img/icons/bullet.png";
function About() {
  return (
    <>
     
      <div className="container about">
        {/* <h1 className='about-h1'>About Us</h1> */}
        {/* <h1 className='about-h1'>About Us<span className="solid-line"></span></h1> */}
        <div className="about-container">
          <h1 className="about-h1">About Us &nbsp; </h1>
          <hr className="solid-line" />
        </div>

        <div className="row">
          {/* <div className="col-md-6 text-center"> */}
          <div className="col-md-5">
            <img alt="about" src={img1} className="img-fluid" />
          </div>
          <div className="col-md-7">
            {/* <h1 className="main-title about-h2">About Us</h1> */}
            <h2 className="about-h2">
              Unlock the Power of Geothermal Energy with DROIT
            </h2>
            <br />
            {/* <p className="about-p">Tap into the Earth's Hidden Energy</p> */}
            <div style={{ display: "inline" }}>
              <ol style={{ listStyleType: "none" }}>
              
              <li style={{ listStyleType: "none", paddingBottom:"1rem" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        alt="Icon"
                        src={bullet}
                        className="img-fluid"
                        style={{ marginRight: "5px" }}
                      />
                    </div>
                    <div className="col-md-8 main-p">
                      At DROIT, we harness the incredible potential of
                      geothermal energy - a renewable energy source that taps
                      into the Earth's natural heat. 
                    </div>
                  </div>
              </li>
              <li style={{ listStyleType: "none", paddingBottom:"1rem" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        alt="Icon"
                        src={bullet}
                        className="img-fluid"
                        style={{ marginRight: "5px" }}
                      />
                    </div>
                    <div className="col-md-8 main-p">
                      By drilling at the right
                      depths, we unlock abundant heat energy that can power
                      turbines and generate electricity, all while leaving zero
                      carbon footprint.
                    </div>
                  </div>
              </li>
               
              </ol>
            </div>

            {/* <a href="" className="clear" rel="noreferrer">
              Learn More &nbsp; →
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
