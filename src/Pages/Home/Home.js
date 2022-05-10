import React from "react";
import Banner from "./Banner";
import bg from "../../assets/images/bg.png";

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
    </div>
  );
};

export default Home;
