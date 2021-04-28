import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
const Robot = (props) => {
  const [personalRobot, setPersonalRobot] = useState([]);

  useEffect(function () {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const robotPersonalFriendlist = data.map((robotPersonal) => {
          return {
            id: robotPersonal.id,
            name: robotPersonal.name,
            username: robotPersonal.username,
            email: robotPersonal.email,
            street: robotPersonal.address.street,
            suite: robotPersonal.address.suite,
            city: robotPersonal.address.city,
            zipcode: robotPersonal.address.zipcode,
            lat: robotPersonal.address.geo.lat,
            lng: robotPersonal.address.geo.lng,
            website: robotPersonal.website,
            phone: robotPersonal.phone,
            companyName: robotPersonal.company.name,
            companyCatchPhrase: robotPersonal.company.catchPhrase,
            bs: robotPersonal.company.bs,
          };
        });
        setPersonalRobot(robotPersonalFriendlist);
      });
  }, []);

  const getById = () => {
    return personalRobot.find((friend) => {
      return friend.id === Number(props.match.params.id);
    });
  };

  const pictureUrl = "https://robohash.org/";

  if (personalRobot.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        <h1 className="pageTitle">{getById().name}, mon ami bien-aime</h1>

        <div className="robotFullInformation">
          <div className="robotImgContainer">
            <img src={pictureUrl + getById().id} alt={getById().name} />
          </div>
          <div className="robotInformation">
            <p className="robotName">
              <span className="robotInformationB--bold">Name</span> :
              {getById().name}
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Username</span> :
              {getById().username}
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Email</span> :
              {getById().email}
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Adresse</span>
              <br />
              <p>
                Appartment {getById().suite}, street {getById().street}, city
                {getById().city}, zipcode {getById.zipcode}, geo: lat:
                {getById().lat} lng: {getById().lng}
              </p>
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Téléphone</span> :
              {getById().phone}
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Site web</span> :
              {getById().website}
            </p>
            <p className="robotDetails">
              <span className="robotInformationB--bold">Company name</span> :
              {getById().companyName} <br />
              <span className="robotInformationB--bold">
                Company catchPhrase
              </span>
              : {getById().companyCatchPhrase} <br />
              <span className="robotInformationB--bold">Company bs</span> :
              {getById().bs}
            </p>
            <p>
              <Link to="/" className="linkToHome">
                Voir tous mes amis
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default Robot;
