import React, { useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");

  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services", formatedDate],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/v2/available?date=${formatedDate}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(services);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-xl text-center text-secondary">
        Availbale Appointments on {format(date || new Date(), "PP")}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 container mx-auto px-5 xl:px-0">
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
