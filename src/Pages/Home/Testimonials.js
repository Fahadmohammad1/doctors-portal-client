import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reveiws = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      reveiw:
        "This is a testing reveiw for reveiw section in doctors portal website.",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      reveiw:
        "This is a testing reveiw for reveiw section in doctors portal website.",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      reveiw:
        "This is a testing reveiw for reveiw section in doctors portal website.",
      location: "California",
    },
  ];
  return (
    <section className="px-8 my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-secondary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {reveiws.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
