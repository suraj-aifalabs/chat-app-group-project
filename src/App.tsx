import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Reserve from "./Components/Reserve";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";



function App() {
  return (
<BrowserRouter>
<Navbar/>
<Hero/>
<About/>
<Footer/>
<Routes>
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
