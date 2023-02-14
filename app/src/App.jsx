import "./App.css";
import ScreenOne from "./components/Screen1/ScreenOne";
import ScreenTwo from "./components/Screen2/ScreenTwo";
import ScreenTree from "./components/Screen3/ScreenTree";
import ScreenFour from "./components/Screen4/ScreenFour";
import NavBar from "./components/NavBar/NavBar";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <ScreenOne />
      <ScreenTwo />
      <ScreenTree />
      <ScreenFour />
    </div>
  );
}
