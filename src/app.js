import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RobotsList from "./components/RobotsList";
import "./app.css";
import RobotsDetails from "./components/RobotDetails";
import Loader from "./components/Loader";

const App = () => {
  const [robotsDatabase, setRobotsDatabase] = useState([]);
  const [robotDetails, setRobotDetails] = useState([]);
  const [friends, setFriends] = useState(robotsDatabase);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const robotsList = response.data.map((robot) => {
        return { id: robot.id, name: robot.name, email: robot.email };
      });
      setLoading(false);
      setRobotsDatabase(robotsList);
      setRobotDetails(response.data);
      setFriends(robotsList);
    });
  }, []);

  const handleChange = (e) => {
    const filteredFriendsList = robotsDatabase.filter((robot) => {
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
            <SearchBar
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
              render={() => <RobotsList friends={friends} />}
            />
            <Route
              path="/robot/:id"
              render={({ match }) => (
                <RobotsDetails fullInformation={robotDetails} match={match} />
              )}
            />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
