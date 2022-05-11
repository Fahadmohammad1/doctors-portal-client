import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center bg-cover lg:px-28"
      style={{ background: `url(${appoinment})` }}
    >
      <div className="lg:flex-1">
        <img className="mt-[-115px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="lg:flex-1">
        <h3 className="text-xl text-secondary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white mt-5 font-semibold font-sans">
          Make an appoinment Today
        </h2>
        <p className="text-white mt-5 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          nulla nisi provident modi! Ratione perferendis dolore reprehenderit
          voluptatem quo? Deleniti, reprehenderit mollitia quis veniam ad,
          voluptates temporibus eligendi minima obcaecati hic quas amet aliquid,
          excepturi nisi nihil modi perferendis sed!
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
