import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import BarreDeRecherche from "./components/barreDeRecherche";
import ListOfRobots from "./components/listOfRobots";
import "./app.css";
import Robot from "./components/robot";
import Loader from "./components/loader";

const App = (props) => {
  const [robots, setRobots] = useState([]);
  const [robotFullDetails, setRobotFullDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(function () {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const robotsFriendsList = data.map((robot) => {
          return { id: robot.id, name: robot.name, email: robot.email };
        });

        setLoading(false);
        setRobots(robotsFriendsList);
        setRobotFullDetails(data);
        setFriends(robotsFriendsList);
      });
  }, []);

  let [friends, setFriends] = useState(robots);

  const handleChange = (e) => {
    e.preventDefault();

    const filteredFriendsList = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFriends(filteredFriendsList);
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          {location.pathname === "/" && (
            <h1 className="pageTitle">MES AMIS ROBOTS</h1>
          )}

          {location.pathname === "/" && (
            <BarreDeRecherche
              handleChange={handleChange}
              placeholder="Recherche"
              id="recherche"
              className="barreDeRecherche"
            />
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ListOfRobots friends={friends} />}
            />
            <Route
              path="/robot/:id"
              render={({ match }) => (
                <Robot fullInformation={robotFullDetails} match={match} />
              )}
            />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
