import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2 className="text-3xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a Valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 character or longer",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-600">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full max-w-xs bg-accent"
          type="submit"
          value="add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
