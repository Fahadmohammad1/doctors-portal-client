import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-full shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={service.image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-accent">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
