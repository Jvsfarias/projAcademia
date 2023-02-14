import "./ScreenFour.css";
import CardPlano from "./CardPlano";
export default function ScreenFour() {
  const textosPlanos = {
    anual:
      "*R$60,00 preço médio mensal/anual para uma atividade. Forma de pagamento: Em 12 vezes no cheque, sendo a 1a à vista, ou em 10 vezes, sendo entrada à vista mais o restante dividido em 9 vezes no cartão de crédito.",

    trimestral:
      "*R$65,00 preço médio mensal/anual para uma atividade. Forma de pagamento: Em 12 vezes no cheque, sendo a 1a à vista, ou em 10 vezes, sendo entrada à vista mais o restante dividido em 9 vezes no cartão de crédito.",

    mensal:
      "*R$70,00 preço médio mensal/anual para uma atividade. Forma de pagamento: Em 12 vezes no cheque, sendo a 1a à vista, ou em 10 vezes, sendo entrada à vista mais o restante dividido em 9 vezes no cartão de crédito.",
  };
  return (
    <div className="screen4 bg-orangeProject">
      <div className="linhasTopPlano text-[#12100E] flex items-center justify-between mx-[7rem] pt-[3rem]">
        <div className="border-[1px] w-[40%] border-black "></div>
        <h1 className="titulo font-black text-4xl">PLANOS</h1>
        <div className="border-[1px] w-[40%] border-black"></div>
      </div>

      <CardPlano
        valor="60,00*"
        tipoPlano="ANUAL -"
        texto={textosPlanos.anual}
      />
      <CardPlano
        valor="65,00*"
        tipoPlano="TRIMESTRAL -"
        texto={textosPlanos.trimestral}
      />
      <CardPlano
        valor="70,00*"
        tipoPlano="MENSAL -"
        texto={textosPlanos.mensal}
      />
    </div>
  );
}
