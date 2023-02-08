import "./App.css";
import ScreenOne from "./components/ScreenOne/ScreenOne";
import ScreenTwo from "./components/ScreenTwo/ScreenTwo";
import NavBar from "./components/NavBar/NavBar";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <ScreenOne />
      <ScreenTwo />
    </div>
  );
}
