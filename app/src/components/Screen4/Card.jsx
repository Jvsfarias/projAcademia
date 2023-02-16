import { useState } from "react";
import "./Card.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function Teste({ tipo, imagem, texto, preco }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card flex flex-col items-center bg-[#181818] text-colorTextsCards pt-2 rounded-lg">
      <h1 className="font-black mb-[10px] text-2xl text-colorTextsCards ">
        <span className="font-thin">PLANO</span>{" "}
        <span className="tracking-wider text-orangeProject">{tipo}</span>
      </h1>
      <img src={imagem} alt="foto" className="foto brightness-110" />
      <div className="paragrafoPrincipal m-4 flex items-center gap-[100px]">
        <FitnessCenterIcon fontSize="medium" />
        <p className="text-xl ">{preco}</p>
        <ExpandMoreIcon
          fontSize="large"
          className="iconArrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && <p className="mx-4 pb-4">{texto}</p>}
    </div>
  );
}
