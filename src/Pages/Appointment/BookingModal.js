import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user, loading] = useAuthState(auth);
  const formatedDate = format(date, "PP");

  if (loading) {
    return <Loading></Loading>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("https://doctors-portal-server-drab-one.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set, ${formatedDate} at ${slot}`);
        } else {
          toast.error(`Already have an appointment on ${data.booking?.date}`);
        }
        refetch();
        setTreatment(null);
      });
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
              name="phone"
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
