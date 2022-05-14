import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot, name, _id);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary mb-7">
            Booking for: {name}
          </h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              disabled
              value={format(date || new Date(), "PP")}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full "
            />
            <input
              type="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />

            <input type="submit" className="btn btn-secondary w-full " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
