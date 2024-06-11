import React, { useState, useEffect } from "react";
import Landing from "./Landing/Landing";
import Portfolio from "./Main/Portfolio";

const Home = () => {
  const storage = sessionStorage.getItem("redirect");

  const [ipAddress, setIpAddress] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    fetch("https://geoloaction-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.IPv4);
        setCountry(data.country_name);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      })
      .catch((error) => console.log(error));
  }, []);

  const visitor = { ipAddress, country, latitude, longitude };

  window.onload = () => {
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitor),
    }).then(() => {
      // alert("Post Added Success!");
      // setIsPending(false);
      // navigate("/");
    });
  };

  return <section>{!storage ? <Landing /> : <Portfolio />}</section>;
};

export default Home;
