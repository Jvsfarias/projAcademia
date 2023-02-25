//import "./screenTwo.css";
import aboutImg from "../../assets/homemForte.webp";
export default function ScreenTwo() {
  return (
    <div
      className="secondSection flex justify-center gap-[1rem] py-14 flex-col-reverse lg:flex-row items-center"
      id="about"
    >
      <img src={aboutImg} alt="Pessoa Treinando" className="w-[400px]" />
      <div className="textsScreenTwo flex-col lg:w-2/5 mt-4 w-[80%]">
        <h1 className="font-black text-4xl text-orangeProject tracking-wider">
          QUEM SOMOS?
        </h1>
        <p className="mt-6 text-grayText text-lg">
          Somos uma academia tradicional localizada no bairro do Catolé com mais
          de 20 anos no mercado, sempre trabalhando para criar relacionamentos
          mais próximos com nossos alunos e fazer da nossa academia uma extensão
          da sua casa. Trabalhar pela saúde e pela melhoria da qualidade de vida
          das pessoas é a essência da Academia Atlante. Aqui você pode realizar
          todo tipo de atividade e manter-se completamente em forma, trabalhando
          tanto seu corpo quanto sua mente.
        </p>
      </div>
    </div>
  );
}
