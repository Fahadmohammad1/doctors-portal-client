import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description: "This is a short description for services.",
      image: `${fluoride}`,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description: "This is a short description for services.",
      image: `${cavity}`,
    },
    {
      id: 3,
      title: "Theeth Whitening",
      description: "This is a short description for services.",
      image: `${whitening}`,
    },
  ];
  return (
    <div className="lg:mt-32 mt-14">
      <h3 className="text-2xl uppercase text-center text-secondary">
        our services
      </h3>
      <h1 className="text-4xl text-center text-accent">Services We Provide</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-7 lg:px-6">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
