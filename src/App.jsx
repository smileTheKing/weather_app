import { motion, stagger } from "framer-motion";
import "./App.css";
import { FooterComponent, NavbarComponent } from "./components";
import Forecast from "./components/Forecast";
import TypingWriterEffect from "./components/TypingWriterEffect";
import HomeComponent from "./pages/Home";
import AnimateReveal from "./components/AnimateReveal";

function App() {
  const textToType =
    "Hello, world! This is a typing effect using Framer Motion.";
  {
    /* <TypingWriterEffect text={textToType}/>*/
  }

  return (
    <div className=" min-h-screen flex-col  justify-between items-center flex relative w-full bg-gradient-to-r from-gray-400/60 to-gray-500 ">
      <div className=" top-4   absolute  w-2/3 z-20 ">
        <NavbarComponent />
      </div>
      <HomeComponent />
    </div>
  );
}

export default App;
