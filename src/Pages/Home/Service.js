import React from "react";

const Service = ({ service }) => {
  return (
    <div class="card w-full bg-base-100 shadow-xl mx-auto">
      <figure class="px-10 pt-10">
        <img src={service.image} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
