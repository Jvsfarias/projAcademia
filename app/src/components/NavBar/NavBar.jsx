import "./NavBar.css";
import logo from "../../assets/atlantePng.png";

export default function NavBar() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="flex text-white gap-8 items-center">
        <li>Inicio</li>
        <li>Planos</li>
        <li>Localização</li>
        <li>Personais</li>
        <li>Contato</li>
      </ul>
    </div>
  );
}
