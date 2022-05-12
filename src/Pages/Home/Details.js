import React from "react";
import DetailsCard from "./DetailsCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Details = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      <DetailsCard
        cardTitle="Opening Hour's"
        img={clock}
        bg={"bg-gradient-to-r from-secondary to-primary"}
      ></DetailsCard>
      <DetailsCard
        cardTitle="Visit our location"
        img={marker}
        bg={"bg-accent"}
      ></DetailsCard>
      <DetailsCard
        cardTitle="Contact us now"
        img={phone}
        bg={"bg-gradient-to-r from-secondary to-primary"}
      ></DetailsCard>
    </div>
  );
};

export default Details;
