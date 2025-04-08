import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Stack,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "../Styles/Menu.css";
import { foodData, beveragesData, bestSellersData } from "./DummyData";

const Menu = () => {
  const [activeSection, setActiveSection] = useState<"food" | "beverages">(
    "food"
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleItemClick = (item: any) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((item: any) => item.id !== item.id)
        : [...prevSelected, item]
    );
  };

  const handlePreOrder = () => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    setSnackbarOpen(true);
  };

  const ItemComponent = (props) => {
    return (
      <Box
        sx={{
          border: selectedItems ? "3px solidrgb(16, 12, 1)" : "none",
          borderRadius: "12px",
          transition: "border 0.3s ease",
          cursor: "pointer",
        }}
        className={`inner-container ${
          selectedItems.includes(props.item.id) ? "selected" : ""
        }`}
        key={props.key}
        onClick={() => handleItemClick(props.item)}
      >
        <img
          src={props.item.image}
          alt={props.item.name}
          className="pizza-image"
        />
        <Box
          className="overlay"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography className="text">{props.item.name}</Typography>
          <Typography className="text">₹{props.item.cost}/-</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box className="bestseller">
        <Typography
          variant="h4"
          align="center"
          fontFamily={"poppins"}
          fontWeight={"Bold"}
        >
          BESTSELLERS
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box className="main-container" sx={{ fontFamily: "poppins" }}>
          {bestSellersData.map((item) => {
            return <ItemComponent item={item} key={item.id} />;
          })}
        </Box>
      </Container>

      <Box className="nav-buttons">
        <Button
          onClick={() => setActiveSection("food")}
          className={activeSection === "food" ? "active" : ""}
        >
          Food
        </Button>
        <Button
          onClick={() => setActiveSection("beverages")}
          className={activeSection === "beverages" ? "active" : ""}
        >
          Beverages
        </Button>
      </Box>
      {activeSection === "food" && (
        <Container maxWidth="lg">
          <Box className="main-container">
            {foodData.map((item) => {
              return <ItemComponent item={item} key={item.id} />;
            })}
          </Box>
        </Container>
      )}

      {activeSection === "beverages" && (
        <Container maxWidth="lg">
          <Box className="main-container">
            {beveragesData.map((item) => {
              return <ItemComponent item={item} key={item.id} />;
            })}
          </Box>
        </Container>
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: " #d4a017",
          marginTop: "20px",
          marginBottom: "20px",
          width: "35%",
          marginLeft: "386px",
          padding: "12px",
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "#b8860b",
          },
        }}
        onClick={handlePreOrder}
      >
        Pre Order
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Items pre-ordered successfully!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setSnackbarOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        ContentProps={{
          sx: {
            backgroundColor: "#218f17",
            color: "#fff",
            fontFamily: "poppins",
            fontSize: "15px",
          },
        }}
      />
    </>
  );
};

export default Menu;
