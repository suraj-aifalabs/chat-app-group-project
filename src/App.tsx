import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Reserve from "./Components/Reserve";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import "./App.css";
import LandingPage from "./Components/LandingPage";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHome && (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<></>} />{" "}
        {/* Just to represent the home route */}
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
