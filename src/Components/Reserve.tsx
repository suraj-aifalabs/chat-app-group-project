import React, { useState, useEffect, useRef } from "react";
import "./../styles/reserve.css";

interface Booking {
  name: string;
  phone: string;
  date: string;
  time: string;
  table: string;
  items: string[];
}


const snackOptions = ["Pizza", "Burger", "Avocado Toast", "Pancake", "Scrambled Eggs","Smoothie Bowl"];
const tableOptions = Array.from({ length: 10 }, (_, i) => `Table ${i + 1}`);

const Reserve: React.FC = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table, setTable] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTableAvailable = (selectedTable: string, selectedDate: string, selectedTime: string): boolean => {
    const selectedTimeObj = new Date(`${selectedDate}T${selectedTime}`);
    return !bookings.some((booking) => {
      if (booking.table === selectedTable && booking.date === selectedDate) {
        const bookedTimeObj = new Date(`${booking.date}T${booking.time}`);
        const timeDiff = Math.abs(selectedTimeObj.getTime() - bookedTimeObj.getTime()) / (1000 * 60 * 60);
        return timeDiff < 2;
      }
      return false;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !date || !time || !table || items.length === 0) {
      alert("All fields are required!");
      return;
    }

    if (!isTableAvailable(table, date, time)) {
      alert(`Table ${table} is already booked for this time. Choose another table or a different time.`);
      return;
    }

    const newBooking: Booking = { name, phone, date, time, table, items };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert(`Table ${table} booked successfully for ${date} at ${time}!`);
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setTable("");
    setItems([]);
    props.onClose();
  };

  return (
    <div className="reserve-container">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Name:</label> */}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        {/* <label>Phone Number:</label> */}
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        {/* <label>Date:</label> */}
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        {/* <label>Time:</label> */}
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <select value={table} onChange={(e) => setTable(e.target.value)} required>
          <option value="">Select Table</option>
          {tableOptions.map((t) => (
            <option key={t} value={t} disabled={!isTableAvailable(t, date, time)}>
              {t} {isTableAvailable(t, date, time) ? "" : "(Reserved)"}
            </option>
          ))}
        </select>

        {/* <label>Order Items:</label> */}
        <div className="dropdown-container" ref={dropdownRef}>
          <div className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {items.length > 0 ? items.join(", ") : "Order Items"}
            <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {snackOptions.map((snack) => (
                <label key={snack} className="dropdown-item">
                  <input
                    type="checkbox"
                    value={snack}
                    checked={items.includes(snack)}
                    onChange={(e) => {
                      const selected = e.target.value;
                      setItems((prev) =>
                        prev.includes(selected) ? prev.filter((item) => item !== selected) : [...prev, selected]
                      );
                    }}
                  />
                  {snack}
                </label>
              ))}
            </div>
          )}
        </div>

        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default Reserve;
