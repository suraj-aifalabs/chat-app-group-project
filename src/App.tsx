import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from "./Components/Login";
   import Menu from "./Components/Menu";
 import LandingPage from "./Components/LandingPage";
import Reserve from "./Components/Reserve";

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

<Routes>
        
        <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login />} />  
         <Route path="/menu" element={<Menu />} />  
         <Route path="/reserve" element={<Reserve />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
