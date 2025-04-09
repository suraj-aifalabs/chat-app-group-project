import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../Styles/Header.css";
import Login from "./Login";
import Reserve from "./Reserve";
import CustomButton from './CustomButton';



function Header() {

  // const navigate = useNavigate();
  const [open, setOpen] = useState(false); // State to control modal visibility
  const [loginOpen, setLoginOpen] = useState(false); // State to control modal visibility
  const [reserveOpen, setReserveOpen] = useState(false); // State to control modal visibility

  const handleReserveClick = () => {
    setOpen(true); // Open the modal when Reserve is clicked
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };
  const handleLoginClick = () => {
    // close previous modal and open login component
    setLoginOpen(true);
    setOpen(false);
  };

  const handleLoginClose = () => {
    // close login modal and open reserve modal
    setLoginOpen(false); // Close the modal
    setReserveOpen(true);
  };

  // const handleLogin = () => {
  //   setOpen(false); // Close the modal
  //   navigate("/login"); // Navigate to the Login page
  // };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Golden Hour Cafe</h1>
        <p>Experience the taste of authentic flavors in every bite.</p>
        {/* <button className="reserve-button" onClick={handleReserveClick}> */}
          {/* Reserve */}
        {/* </header></button> */}
        <CustomButton label="Reserve" onClick={handleReserveClick} color="black" />


      </header>

      {/* first call */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <DialogTitle sx={{ color: 'black' }}>Reserve a Table</DialogTitle>
          <p>Please log in to reserve a table.</p>
        </DialogContent>
        <DialogActions>
          {/*<Button  onClick={handleClose} color="black" >
            Cancel
          </Button>
                  

          <Button onClick={handleLoginClick} color="black">
            Log In
          </Button>*/}
                            <CustomButton label="Cancel" onClick={handleClose} color="black" />
                            <CustomButton label="Log In" onClick={handleLoginClick} color="black" />



        </DialogActions>
      </Dialog>

      {/* Second call*/}
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <Login />
      </Dialog>

      {/* third call*/}
      <Dialog open={reserveOpen} onClose={() => setReserveOpen(false)}>
        <Reserve />
      </Dialog>
    </div>
  );
}

export default Header;
