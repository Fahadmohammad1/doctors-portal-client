import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg shadow-xl mx-auto text-center lg:px-12 xl:px-20">
      <div className="card-body">
        <h2
          className="card-title font-semibold text-seco
        
        ndary"
        >
          {name}
        </h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            className="btn modal-button border-0 bg-gradient-to-r from-secondary to-primary font-semibold text-white uppercase"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
