import { useState } from "react";
import "./Card.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Teste({ tipo, imagem, texto, preco }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card flex flex-col items-center bg-[#181818] text-colorTextsCards pt-2 rounded-lg">
      <h1 className="font-black mb-[10px] text-2xl text-[#ffffffde] ">
        PLANO {tipo}
      </h1>
      <img src={imagem} alt="foto" className="foto" />
      <div className="paragrafoPrincipal m-4 flex items-center gap-[110px]">
        <FavoriteIcon fontSize="small" className="iconHeart" />
        <p className="text-xl font-thin">{preco}</p>
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
