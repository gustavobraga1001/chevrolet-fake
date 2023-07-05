import "./Ball.css";

const Ball = (props) => {
  return (
    <div className="Ball">
      <img src={props.img} alt={props.text} />
      <p>{props.text}</p>
    </div>
  );
};

export default Ball;
