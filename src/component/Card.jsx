import MenuIcon from "../images/icon-ellipsis.svg";

const Card = ({ background, estilo, tipo, current, previous }) => {
  return (
    <div className={background + estilo}>
      <div className="card-info">
        <p>{tipo}</p>
        <img src={MenuIcon} alt="" />
      </div>
      <div className="dates">
        <h2>{current + 1}hrs</h2>
        <p>Last Week - {previous + 1}hrs </p>
      </div>
    </div>
  );
};

export default Card;
