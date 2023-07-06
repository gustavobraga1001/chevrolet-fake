import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
