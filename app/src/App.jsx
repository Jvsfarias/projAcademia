import "./App.css";
import ScreenOne from "./components/Screen1/ScreenOne";
import WhatsButton from "./components/NavBar/WhatsButton";
import ScreenTwo from "./components/Screen2/ScreenTwo";
import ScreenTree from "./components/Screen3/ScreenTree";
import ScreenFour from "./components/Screen4/ScreenFour";
import Footer from "./components/Screen5/Footer";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <WhatsButton />
      <ScreenOne />
      <ScreenTwo />
      <ScreenTree />
      <ScreenFour />
      <Footer />
    </div>
  );
}
