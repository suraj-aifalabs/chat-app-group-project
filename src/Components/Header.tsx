import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../Styles/Header.css";
import Login from "./Login";
import Reserve from "./Reserve";

function Header() {
  const navigate = useNavigate();
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

  const handleLogin = () => {
    setOpen(false); // Close the modal
    navigate("/login"); // Navigate to the Login page
  };


  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Golden Hour Cafe</h1>
        <p>Experience the taste of authentic flavors in every bite.</p>
        <button className="reserve-button" onClick={handleReserveClick}>
          Reserve
        </button>
      </header>

      {/* first call */}
      <Dialog open={open} onClose={handleClose}>
        
        <DialogTitle>Reserve a Table</DialogTitle>
        <DialogContent>
          <p>Please log in to reserve a table.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLoginClick} color="primary" >
            Log In
          </Button>
        </DialogActions>
      </Dialog>

     
       {/* Second call*/}
      <Dialog open={loginOpen} onClose={handleLoginClose}>
      <Login openReserve={handleLoginClose} />
       </Dialog>



    {/* third call*/}
       <Dialog open={reserveOpen} onClose={()=>setReserveOpen(false)}>
       <Reserve onClose={()=>setReserveOpen(false)}/>

      </Dialog>
    </div>
  );
}

export default Header;
