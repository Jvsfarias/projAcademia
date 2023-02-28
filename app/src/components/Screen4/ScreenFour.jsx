import "./screenFour.css";
import Card from "./Card";
import img1 from "../../assets/fotoCard1.webp";
import img2 from "../../assets/fotoCard2.webp";
import img3 from "../../assets/fotoCard3.webp";

export default function ScreenFour() {
  const tipo = {
    trimestral: "TRIMESTRAL",
    bimestral: "BIMESTRAL",
    mensal: "MENSAL",
  };

  const textos = {
    textoTrimestral:
      "(O mais vantajoso) No plano trimestral o aluno realiza o pagamento de R$180,00 (podendo ser parcelado no cartão, com adicional apenas da maquineta), passando a ter direito sobre os benefícios da academia durante 3 meses. Ao escolher esse plano, o aluno economiza 30 reais comparado ao plano mensal!",
    textoBimestral:
      "No plano bimestral o aluno realiza o pagamento de R$130,00 (podendo ser parcelado no cartão, com adicional apenas da maquineta), passando a ter direito sobre os benefícios da academia durante 2 meses. Ao escolher esse plano, o aluno economiza 10 reais comparado ao plano mensal!",
    textoMensal:
      "No plano semestral o aluno realiza o pagamento de R$70,00 (com adicional de R$5,00 da maquineta caso o pagamento seja através do cartão), passando a ter direito sobre os benefícios da academia durante 1 mês.",
  };

  const preco = {
    precoTrimestral: "R$60,00",
    precoBimestral: "R$65,00",
    precoMensal: "R$70,00",
  };
  return (
    <div className="py-[100px]" id="planos">
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
          tipo={tipo.trimestral}
          imagem={img1}
          texto={textos.textoTrimestral}
          preco={preco.precoTrimestral}
        />
        <Card
          tipo={tipo.bimestral}
          imagem={img2}
          texto={textos.textoBimestral}
          preco={preco.precoBimestral}
        />
        <Card
          tipo={tipo.mensal}
          imagem={img3}
          texto={textos.textoMensal}
          preco={preco.precoMensal}
        />
      </div>

      <div className="observacoes w-[80%] mx-auto max-w-[1100px]  text-[14px] mt-14 text-center text-black">
        <p>*Todos os planos, incluem as atividades de Musculação e FitDance.</p>
        <div className="flex justify-center gap-2 mt-3">
          <p>*As aulas de FitDance ocorrem nas terças e quintas:</p>
          <div>
            <p>Manhã: 07:30 as 08:30</p>
            <p>Noite: 19:30 as 20:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
