import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl text-center text-secondary">
        Availbale Appointments on {format(date, "PP")}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 container mx-auto px-5 xl:px-0">
        {services.map((service) => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          key={treatment._id}
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
