import React from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h2>Availbale Appointments on {format(date, "PP")}</h2>
    </div>
  );
};

export default AvailableAppointment;
