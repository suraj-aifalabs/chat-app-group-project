import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import "../Styles/Menu.css";
import { foodData, beveragesData, bestSellersData } from "./DummyData";

const Menu = () => {
  const [activeSection, setActiveSection] = useState<"food" | "beverages">("food");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cartDialogOpen, setCartDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleItemClick = (item: any) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item.name)
        ? prevSelected.filter((i) => i !== item.name)
        : [...prevSelected, item.name]
    );
  };

  const handlePreOrder = () => {
    if (selectedItems.length === 0) return;
    setCartDialogOpen(true);
  };
  
  const allItems = [...foodData, ...beveragesData, ...bestSellersData];
const getSelectedItemDetails = () => {
  return allItems.filter(item => selectedItems.includes(item.name));
};

const totalCost = getSelectedItemDetails().reduce((acc, item) => acc + item.cost, 0);


  const ItemComponent = ({ item }: any) => {
    const isSelected = selectedItems.includes(item.name);

    return (
      <Box
        sx={{
          border: isSelected ? "3px solid rgb(16, 12, 1)" : "none",
          borderRadius: "12px",
          transition: "border 0.3s ease",
          cursor: "pointer",
        }}
        className={`inner-container ${isSelected ? "selected" : ""}`}
        onClick={() => handleItemClick(item)}
      >
        <img src={item.image} alt={item.name} className="pizza-image" />
        <Box
          className="overlay"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography className="text">{item.name}</Typography>
          <Typography className="text">₹{item.cost}/-</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box className="bestseller">
        <Typography variant="h4" align="center" fontFamily="poppins" fontWeight="Bold" color="black">
          BESTSELLERS
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box className="main-container" sx={{ fontFamily: "poppins" }}>
          {bestSellersData.map((item) => (
            <ItemComponent item={item} key={item.id} />
          ))}
        </Box>
      </Container>

      <Box className="nav-buttons">
        <Button onClick={() => setActiveSection("food")} className={activeSection === "food" ? "active" : ""}>
          Food
        </Button>
        <Button  onClick={() => setActiveSection("beverages")} className={activeSection === "beverages" ? "active" : ""}>
          Beverages
        </Button>
      </Box>

      {activeSection === "food" && (
        <Container maxWidth="lg">
          <Box className="main-container">
            {foodData.map((item) => (
              <ItemComponent item={item} key={item.id} />
            ))}
          </Box>
        </Container>
      )}

      {activeSection === "beverages" && (
        <Container maxWidth="lg">
          <Box className="main-container">
            {beveragesData.map((item) => (
              <ItemComponent item={item} key={item.id} />
            ))}
          </Box>
        </Container>
      )}

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#d4a017",
          color:"black",
          marginTop: "20px",
          marginBottom: "20px",
          width: "25%",
          padding: "12px",
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: "16px",
          display:"block",
          mx: "auto",
          "&:hover": {
            backgroundColor: "#b8860b",
          },
        }}
        onClick={handlePreOrder}
      >
        Pre Order
      </Button>

      <Dialog open={cartDialogOpen} onClose={() => setCartDialogOpen(false)} fullWidth maxWidth="sm"  PaperProps={{
    sx: {
      borderRadius: "15px",
    },
  }}>
  <DialogTitle sx={{ fontFamily: "poppins", fontWeight: "bold", color:"black", backgroundColor:"#d4a017", textAlign:"center"}}>
    Your Cart
  </DialogTitle>
  <DialogContent dividers>
    <List>
      {getSelectedItemDetails().map((item) => (
        <ListItem key={item.name}>
          <ListItemText
            primary={item.name}
            secondary={`₹${item.cost}/-`}
            primaryTypographyProps={{ fontFamily: "poppins" }}
            secondaryTypographyProps={{ fontFamily: "poppins" }}
          />
        </ListItem>
      ))}
    </List>
    <Divider sx={{ my: 2 }} />
    <Typography align="right" sx={{ fontFamily: "poppins", fontWeight: "bold" }}>
      Total: ₹{totalCost}/-
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button
      onClick={() => setCartDialogOpen(false)}
      sx={{ fontFamily: "poppins", color: "black", fontWeight:"bolder"}}
    >
      Cancel
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#d4a017",
        color:"black",
        fontWeight:"bolder",
        fontFamily: "poppins",
        "&:hover": { backgroundColor: "#b8860b" },
      }}
      onClick={() => {
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        setCartDialogOpen(false);
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/reserve");
        }, 1000);
      }}
    >
      Confirm & Reserve
    </Button>
  </DialogActions>
</Dialog>


      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Items pre-ordered successfully!"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackbarOpen(false)}>
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