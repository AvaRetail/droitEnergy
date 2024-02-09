import img1 from '../img/about-us.png';
import './Main.css'
function a1() {
  return (
    <>
     <section className="about-section">
    	<div className="container">
     <div className="about-container">
  <h1 className='about-h1'>About Us &nbsp; </h1>
  <hr className="solid-line" />
  </div>
        	<div className="row clearfix">
            	
              
                <div className="content-column col-md-6 col-sm-12 col-xs-12">
                	<div className="inner-column">
                    	<div className="sec-title">
                        
                            <br />
                        	<span className="about-span">Unlock the Power of Geothermal Energy with DROIT</span><br />
                            <p className="about-p">Tap into the Earth's Hidden Energy</p>
                        </div>
                        <div className="text">At DROIT, we harness the incredible potential of geothermal energy - a renewable energy source that taps into the Earth's natural heat. </div>
                        {/* <div className="email">Request Quote: <span className="theme_color">freequote@gmail.com</span></div> */}
                        <a href="about.html" className="theme-btn btn-style-three">Read More</a>
                    </div>
                </div>
            
                <div className="image-column col-md-6 col-sm-12 col-xs-12">
                	<div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div className="image">
                        <img alt="about" src={img1}  />
                            <div className="overlay-box">
                            	<div className="year-box"><span className="number">10</span>Years <br /> Experience <br /> Working</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  );
}
export default a1;
