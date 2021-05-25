import RobotPresentation from "./RobotPresentation";

const RobotsList = (props) => {
  const pictureUrl = "https://robohash.org/";

  const renderRobots = () => {
    if (props.friends.length > 0) {
      return props.friends.map((friend) => {
        return (
          <RobotPresentation
            key={friend.id}
            name={friend.name}
            email={friend.email}
            src={pictureUrl + friend.id}
            alt={friend.name}
            id={friend.id}
          />
        );
      });
    } else {
      return (
        <div className="not-found">
          Aucune correspondance, veuillez saisir un autre nom
        </div>
      );
    }
  };
  return <div className="robotList">{renderRobots()}</div>;
};
export default RobotsList;
