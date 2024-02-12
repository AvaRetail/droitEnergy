import React, { useState } from "react";
import img1 from "../img/ao-1.jpg";
function AdaptableCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="ad-container">
      <div className="row">
        <div className={`col-md-12 ad-position-relative ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="ad-image-container">
          <img alt="card-img" src={props.img} className={`text-center max-width-half-height ${isHovered ? 'hovered' : ''}`} />
            <div className="ad-overlay"></div> {/* Black overlay */}
          </div>
          <div className="ad-overlay-text">
            <p className="text-center" dangerouslySetInnerHTML={{ __html: props.imgtext }}></p>
          </div>
        </div>
        {isHovered && (
          <>
            <div className="col-md-6 ad-text-container centered ml-5" style={{marginLeft:"5rem"}}>
              <p>{props.text}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default AdaptableCard;
