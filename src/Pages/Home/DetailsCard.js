import React from "react";

const DetailsCard = ({ img, bg, cardTitle }) => {
  return (
    <div class={`card lg:card-side shadow-xl ${bg} text-white`}>
      <figure className="pl-6">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default DetailsCard;
