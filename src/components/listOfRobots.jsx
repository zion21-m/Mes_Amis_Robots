import RobotInformation from "./robotInformation";

const ListOfRobots = (props) => {
  const pictureUrl = "https://robohash.org/";

  const renderRobots = () => {
    return props.friends.map((friend) => {
      return (
        <RobotInformation
          key={friend.id}
          name={friend.name}
          email={friend.email}
          src={pictureUrl + friend.id}
          alt={friend.name}
          id={friend.id}
        />
      );
    });
  };
  return <div className="listRobot">{renderRobots()}</div>;
};
export default ListOfRobots;
