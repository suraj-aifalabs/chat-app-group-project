import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./../styles/login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const generateOtp = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
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
      alert("OTP sent to your email!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = () => {
    if (otp === localStorage.getItem("otp")) {
      alert("OTP verified successfully!");
      navigate("/reserve");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Email Login</h2>
      {!isOtpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default Login;
