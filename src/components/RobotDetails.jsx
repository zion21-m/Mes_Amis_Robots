import { Link } from "react-router-dom";

const RobotsDetails = (props) => {
  const RobotsDetailsList = props.fullInformation.map((robotDetails) => {
    return {
      id: robotDetails.id,
      name: robotDetails.name,
      username: robotDetails.username,
      email: robotDetails.email,
      street: robotDetails.address.street,
      suite: robotDetails.address.suite,
      city: robotDetails.address.city,
      zipcode: robotDetails.address.zipcode,
      lat: robotDetails.address.geo.lat,
      lng: robotDetails.address.geo.lng,
      website: robotDetails.website,
      phone: robotDetails.phone,
      companyName: robotDetails.company.name,
      companyCatchPhrase: robotDetails.company.catchPhrase,
      bs: robotDetails.company.bs,
    };
  });

  const getById = () => {
    return RobotsDetailsList.find((robot) => {
      return robot.id === Number(props.match.params.id);
    });
  };

  const pictureUrl = "https://robohash.org/";

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
            <span className="robotInformationB--bold">Company catchPhrase</span>
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
};

export default RobotsDetails;
