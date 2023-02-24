import "./NavBar.css";
import logo from "../../assets/atlantePng.png";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box nav">
      <motion.img
        src={logo}
        alt="Logo"
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="menu-btn">
        <i className="fa fa-bars fa-2x" onClick={() => setIsOpen(!isOpen)}></i>
      </div>

      <ul
        className={`${
          isOpen ? "open" : ""
        } flex text-white gap-8 items-center font-bold text-sm`}
      >
        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <HomeIcon className="iconNav" />
          <Link
            to="homePage"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            INICIO
          </Link>
        </motion.li>

        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FitnessCenterIcon className="iconNav" />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            SOBRE
          </Link>
        </motion.li>

        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LocationOnIcon className="iconNav" />
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            LOCALIZAÇÃO
          </Link>
        </motion.li>

        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SchoolIcon className="iconNav" />
          <Link
            to="planos"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            PLANOS
          </Link>
        </motion.li>

        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WhatsAppIcon className="iconNav" />
          <Link
            to="footerContact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTATO
          </Link>
        </motion.li>

        <motion.li
          initial={{ y: "-110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="aulaGratis"
          >
            AULA EXPERIMENTAL
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
