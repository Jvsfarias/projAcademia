import "./NavBar.css";
import logo from "../../assets/atlantePng.png";

export default function NavBar() {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="flex text-white gap-8 items-center text-lg">
        <li>INICIO</li>
        <li>PLANOS</li>
        <li>LOCALIZAÇÃO</li>
        <li>PROFESSORES</li>
        <li>CONTATO</li>
      </ul>
    </div>
  );
}
