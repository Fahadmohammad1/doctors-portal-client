import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot, name, _id);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary mb-7">
            Booking for: {name}
          </h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full "
            />
            <select name="slot" class="select select-bordered w-full">
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full "
            />
            <input type="submit" class="btn btn-secondary w-full " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
