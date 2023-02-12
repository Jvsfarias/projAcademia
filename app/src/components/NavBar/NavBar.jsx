import "./NavBar.css";
import logo from "../../assets/atlantePng.png";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        } flex text-white gap-8 items-center font-bold text-sm`}
      >
        <li>
          <HomeIcon className="iconNav" />
          <a href="#">INICIO</a>
        </li>
        <li>
          <FitnessCenterIcon className="iconNav" />
          <a href="#">PLANOS</a>
        </li>
        <li>
          <LocationOnIcon className="iconNav" />
          <a href="#">LOCALIZAÇÃO</a>
        </li>
        <li>
          <SchoolIcon className="iconNav" />
          <a href="#">PROFESSORES</a>
        </li>
        <li>
          <WhatsAppIcon className="iconNav" />
          <a href="#">CONTATO</a>
        </li>
        <li>
          <a href="#" className="aulaGratis">
            AULA GRATIS
          </a>
        </li>
      </ul>
    </div>
  );
}
