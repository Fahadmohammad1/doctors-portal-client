import React from "react";
import Banner from "./Banner";
import bg from "../../assets/images/bg.png";
import Details from "./Details";
import Services from "./Services";
import DentalCare from "./DentalCare";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";

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
      <div className="lg:px-40 lg:mt-10 lg:mb-40">
        <DentalCare></DentalCare>
      </div>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
