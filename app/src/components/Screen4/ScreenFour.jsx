import "./ScreenFour.css";
import Card from "./Card";
import img1 from "../../assets/fotoCard1.jpg";
import img2 from "../../assets/fotoCard2.jpg";
import img3 from "../../assets/fotoCard3.jpg";

export default function ScreenFour() {
  const tipo = {
    anual: "ANUAL",
    trimestral: "TRIMESTRAL",
    mensal: "MENSAL",
  };

  const textos = {
    textoAnual:
      "ANUAL ipsum dolor sit amet consectetur, adipisicing elit. Doloremque odio molestias ad ex aliquam laboriosam molestiae soluta unde at, magni quibusdam nisi harum delectus vitae nesciunt, sequi, aspernatur ut neque.",
    textoTrimestral:
      "TRIMESTRALrem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque odio molestias ad ex aliquam laboriosam molestiae soluta unde at, magni quibusdam nisi harum delectus vitae nesciunt, sequi, aspernatur ut neque.",
    textoMensal:
      "MENSAL ipsum dolor sit amet consectetur, adipisicing elit. Doloremque odio molestias ad ex aliquam laboriosam molestiae soluta unde at, magni quibusdam nisi harum delectus vitae nesciunt, sequi, aspernatur ut neque.",
  };

  const preco = {
    precoAnual: "R$60,00",
    precoTrimestral: "R$65,00",
    precoMensal: "R$70,00",
  };
  return (
    <div className="py-[100px]">
      <div className="flex w-[80%] justify-center mx-auto mb-20 items-center">
        <div className="w-[22vw] h-[1px] border-[1px] border-black"> </div>
        <h1 className="flex gap-3">
          <span className="textosPlanos font-thin text-3xl">NOSSOS</span>
          <span className="textosPlanos font-black text-3xl">PLANOS</span>
        </h1>
        <div className="w-[22vw] h-[1px] border-[1px] border-black"> </div>
      </div>
      <div className="cards flex items-start justify-center gap-7">
        <Card
          tipo={tipo.anual}
          imagem={img1}
          texto={textos.textoAnual}
          preco={preco.precoAnual}
        />
        <Card
          tipo={tipo.trimestral}
          imagem={img2}
          texto={textos.textoTrimestral}
          preco={preco.precoTrimestral}
        />
        <Card
          tipo={tipo.mensal}
          imagem={img3}
          texto={textos.textoMensal}
          preco={preco.precoMensal}
        />
      </div>

      <div className="observacoes  w-[80%] mx-auto max-w-[1100px]  text-[17px] mt-14 text-center text-black">
        <p>
          *Todos os planos, incluem as atividades de Musculação, FitDance, e
          aulas de Step!
        </p>
      </div>
    </div>
  );
}
