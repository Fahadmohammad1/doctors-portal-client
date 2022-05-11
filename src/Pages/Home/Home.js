import React from "react";
import Banner from "./Banner";
import bg from "../../assets/images/bg.png";
import Details from "./Details";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-4 xl:px-0">
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
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
