import { Link } from "react-router-dom";
const RobotPresentation = (props) => {
  return (
    <div className="cardRobot">
      <div className="robotPicture">
        <img src={props.src} alt={props.alt} />
      </div>

      <div className="robotInformation">
        <p className="robotName">{props.name}</p>
        <p className="robotEmail">{props.email}</p>
      </div>
      <Link to={`/robot/${props.id}`} className="linkToRobotFullInformation">
        Cliquez pour voir plus d'information sur moi
      </Link>
    </div>
  );
};

export default RobotPresentation;
