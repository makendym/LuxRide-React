import { Routes, Route } from "react-router-dom";
import Safety from "./pages/safety";
import About from "./pages/aboutUs";
import Home from "./pages/Home";
import MainNavbar from "./components/mainNavbar";
import Footer from "./components/footer";
import CreateRiders from "./components/ridersSignUp";
import HorizontalNonLinearStepper from "./components/emailSignUp"
function App() {
  document.body.style.backgroundColor = "black";
  return (
    <>
      <MainNavbar />

      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/safety" element={<Safety />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ridersSignUp" element={<CreateRiders/>}></Route>
        <Route path= "/emailSignUp" element={<HorizontalNonLinearStepper/>}></Route>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
