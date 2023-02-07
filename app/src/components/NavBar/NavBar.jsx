import "./NavBar.css";
import logo from "../../assets/atlantePng.png";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />

      <div className="menu-btn">
        <i className="fa fa-bars fa-2x" onClick={() => setIsOpen(!isOpen)}></i>
      </div>

      <ul
        className={`${
          isOpen ? "open" : ""
        } flex text-white gap-8 items-center text-sm`}
      >
        <li>
          <a href="#">INICiO</a>
        </li>
        <li>
          <a href="#">PLANOS</a>
        </li>
        <li>
          <a href="#">LOCALICAÇÃO</a>
        </li>
        <li>
          <a href="#">PROFESSORES</a>
        </li>
        <li>
          <a href="#">CONTATO</a>
        </li>
      </ul>
    </div>
  );
}
