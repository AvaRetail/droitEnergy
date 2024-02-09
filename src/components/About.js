import img1 from '../img/about-us.png';
function About() {
  return (
    <>
      <div style={{marginTop:'2rem',width:'100%',height:'10px'}} className="about-scroll"></div>
      <div className="container about">
      {/* <h1 className='about-h1'>About Us</h1> */}
      {/* <h1 className='about-h1'>About Us<span className="solid-line"></span></h1> */}
      <div className="about-container">
  <h1 className='about-h1'>About Us &nbsp; </h1>
  <hr className="solid-line" />
</div>
<br />
      <br />
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={img1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            {/* <h1 className="main-title about-h2">About Us</h1> */}
            <span className="about-span">Unlock the Power with DROIT</span><br />
            <p className="about-p">Tap into the Earth's Hidden Energy</p>
            <p className="main-p">
            At DROIT, we harness the incredible potential of geothermal energy - a renewable energy source that taps into the Earth's natural heat. 
            </p>
            <a href="" className="clear" rel="noreferrer">Learn More &nbsp; →</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
