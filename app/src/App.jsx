import "./App.css";
import ScreenOne from "./components/Screen1/ScreenOne";
import InstaButton from "./components/NavBar/InstaButton";
import ScreenTwo from "./components/Screen2/ScreenTwo";
import ScreenTree from "./components/Screen3/ScreenTree";
import ScreenFour from "./components/Screen4/ScreenFour";
import Footer from "./components/Screen5/Footer";
import LastFooter from "./components/Screen5/LastFooter";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <ScreenOne />
      <ScreenTwo />
      <ScreenTree />
      <ScreenFour />
      <Footer />
      <LastFooter />
      <InstaButton />
    </div>
  );
}
