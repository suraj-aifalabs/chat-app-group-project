import React, { useState, useEffect } from "react";
import "./../styles/reserve.css";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
  Box,
  Typography,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";

interface Booking {
  name: string;
  date: string;
  time: string;
  table: string;
  items: string[];
}

const snackOptions = [
  "Pizza",
  "Burger",
  "Avocado Toast",
  "Pancake",
  "Scrambled Eggs",
  "Smoothie Bowl",
];

const tableOptions = Array.from({ length: 10 }, (_, i) => `Table ${i + 1}`);

const tableSeats = tableOptions.map(() => Math.floor(Math.random() * 5) + 2);

const Reserve: React.FC = () => {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState<Dayjs | null>(null);
  const [table, setTable] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  const isTableAvailable = (
    selectedTable: string,
    selectedDateTime: Dayjs | null
  ): boolean => {
    if (!selectedDateTime) return true;
    return !bookings.some((booking) => {
      if (booking.table === selectedTable) {
        const bookedTime = new Date(`${booking.date}T${booking.time}`);
        const selectedTime = selectedDateTime.toDate();
        const timeDiff =
          Math.abs(selectedTime.getTime() - bookedTime.getTime()) /
          (1000 * 60 * 60);
        return timeDiff < 2;
      }
      return false;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !dateTime || !table || items.length === 0) {
      alert("All fields are required!");
      return;
    }

    if (!isTableAvailable(table, dateTime)) {
      alert(
        `Table ${table} is already booked for this time. Choose another table or a different time.`
      );
      return;
    }

    const formattedDate = dateTime.format("YYYY-MM-DD");
    const formattedTime = dateTime.format("HH:mm");

    const newBooking: Booking = {
      name,
      date: formattedDate,
      time: formattedTime,
      table,
      items,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert(
      `Table: ${table} booked successfully for ${formattedDate} at ${formattedTime}!`
    );
    setName("");
    setDateTime(null);
    setTable("");
    setItems([]);
  };

  const minDate = dayjs().startOf("day");
  const maxDate = minDate.add(3, "day").endOf("day");

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Box
        className="reserve-container"
        sx={{ maxWidth: 500, flex: 1, minWidth: 300, padding: 4 }}
      >
        <Typography variant="h4" gutterBottom>
          Table Reservation
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              value={dateTime}
              onChange={setDateTime}
              disablePast
              minDateTime={minDate}
              maxDateTime={maxDate}
              slotProps={{
                textField: { fullWidth: true, margin: "normal" },
              }}
            />
          </LocalizationProvider>

          <TextField
            select
            label="Select Table"
            fullWidth
            margin="normal"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required
          >
            {tableOptions.map((t) => (
              <MenuItem
                key={t}
                value={t}
                disabled={!isTableAvailable(t, dateTime)}
              >
                {t} {!isTableAvailable(t, dateTime) ? "(Reserved)" : ""}
              </MenuItem>
            ))}
          </TextField>

          <FormControl fullWidth margin="normal">
            <InputLabel id="order-items-label">Order Items</InputLabel>
            <Select
              labelId="order-items-label"
              multiple
              value={items}
              onChange={(e) => setItems(e.target.value as string[])}
              input={<OutlinedInput label="Order Items" />}
              renderValue={(selected) => (selected as string[]).join(", ")}
            >
              {snackOptions.map((snack) => (
                <MenuItem key={snack} value={snack}>
                  <Checkbox checked={items.includes(snack)} />
                  <ListItemText primary={snack} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Book Table
          </Button>
        </form>
      </Box>

      <Box sx={{ flex: 1, minWidth: 300 }}>
        <Typography variant="h5" gutterBottom>
          Table Availability
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {tableOptions.map((t, index) => {
            const isAvailable = isTableAvailable(t, dateTime);
            const isSelected = t === table;

            return (
              <Box
                key={t}
                sx={{
                  border: "2px solid",
                  borderColor: isSelected ? "primary.main" : "#ccc",
                  borderRadius: 2,
                  padding: 2,
                  textAlign: "center",
                  backgroundColor: isAvailable
                    ? isSelected
                      ? "#e3f2fd"
                      : "#f9f9f9"
                    : "#ef9a9a",
                  cursor: isAvailable ? "pointer" : "not-allowed",
                  transition: "0.3s",
                }}
                onClick={() => {
                  if (isAvailable) {
                    setTable(t);
                  } else {
                    alert(`${t} is already reserved for the selected time.`);
                  }
                }}
              >
                <Typography variant="subtitle1">{t}</Typography>
                <Typography variant="body2">
                  {tableSeats[index]} members
                </Typography>
                {!isAvailable && (
                  <Typography variant="caption" color="error">
                    Reserved
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Reserve;
