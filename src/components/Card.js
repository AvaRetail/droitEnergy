function Card(props) {
  return (
    <div className="card">
      <br />
      <div className="card-content">
      <div className="leftPadding">
        {/* <img alt="card-img" src={"../img/"+props.img} className="text-center img-fluid" /> */}
        <div className="row">
          <div className="col">
          <img alt="card-img" src={props.img} className="text-center icon-fluid" />
          </div>
        </div>
      </div>
      <div className="leftPadding">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="main-p">
           {props.text}
        </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
