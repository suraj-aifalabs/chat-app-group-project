import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

function Navbar() {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "#ffcc00", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <Toolbar sx={{ padding: "0 0px" }}>
        {/* Brand Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold", color: "#333" }}>
          Golden Hour Cafe
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{
              color:"black",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/menu"
            sx={{
              color:"black",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Menu
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
