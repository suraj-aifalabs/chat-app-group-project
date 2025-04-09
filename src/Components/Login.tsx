import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import CustomButton from './CustomButton';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert as MuiAlert,
  Box
} from "@mui/material";
import { AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props: any, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("info");
  const navigate = useNavigate();

  const generateOtp = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const showSnackbar = (message: string, severity: AlertColor) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const sendOtp = async () => {
    const otpCode = generateOtp();
    setGeneratedOtp(otpCode);
    localStorage.setItem("otp", otpCode);

    const templateParams = {
      user_email: email,
      message: `Your OTP for login is: ${otpCode}`,
    };

    try {
      await emailjs.send(
        "service_5r1zv3b",
        "template_gq3ezar",
        templateParams,
        "PsuC8qAilPhVwMDol"
      );
      setIsOtpSent(true);
      showSnackbar("OTP sent to your email!", "success");
    } catch (error) {
      console.error("Error sending OTP:", error);
      showSnackbar("Failed to send OTP. Please try again.", "error");
    }
  };

  const verifyOtp = () => {
    if (otp === localStorage.getItem("otp")) {
      showSnackbar("OTP verified successfully!", "success");
      setTimeout(() => {
        navigate("/reserve");
      }, 1000);
    } else {
      showSnackbar("Invalid OTP. Try again.", "error");
    }
  };

  const handleCloseDialog = () => {
    navigate("/");
  };

  return (
    <>
      <Dialog open={true} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
        <DialogTitle>
      <Typography variant="h5" align="center" sx={{ color: 'black' }}>
        Email Login
      </Typography>

        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {!isOtpSent ? (
              <>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <Button variant="contained" color="primary" fullWidth onClick={sendOtp}> */}
                 {/* Send OTP/*}
                {/* </Button> */}
                <CustomButton label="Send Otp" onClick={sendOtp} color="black" />

                

              </>
            ) : (
              <>
                <TextField
                  label="OTP"
                  type="text"
                  fullWidth
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <CustomButton label="Verify OTP" variant="contained" color="success" fullWidth onClick={verifyOtp}/>
                
                </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          {/*<Button onClick={handleCloseDialog} color="secondary" fullWidth>
            Cancel
          </Button>*/}
            <CustomButton label="cancel" onClick={handleCloseDialog} color="black"/>


        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
