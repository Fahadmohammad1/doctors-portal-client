import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div class="hero min-h-screen xl:px-8">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="lg:max-w-2xl rounded-lg shadow-2xl" alt="" />
        <div className="xl:pr-16">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn border-0 bg-gradient-to-r from-secondary to-primary font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
