import React from "react";
import Banner from "./Banner";
import bg from "../../assets/images/bg.png";
import Details from "./Details";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
        className="bg-cover"
      >
        <Banner />
      </div>
      <Details></Details>
    </div>
  );
};

export default Home;
