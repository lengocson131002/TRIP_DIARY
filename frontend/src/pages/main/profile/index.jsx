import React from "react";
import MapComponent from "../../../components/map";
import CountryList from "../../../components/profile/CountryList";
import FutureTrips from "../../../components/profile/FutureTrips";
import Header from "../../../components/profile/Header";
import Map from "../../../components/profile/Map";
// import Map from "../../../components/profile/Map";
import MapNav from "../../../components/profile/MapNav";
import Trips from "../../../components/profile/Trips";

const Profile = () => {
  return (
    <>
      <Header />
      <MapNav />
      <Map/>
      <FutureTrips />
      <Trips />
      <CountryList />
    </>
  );
};

export default Profile;
