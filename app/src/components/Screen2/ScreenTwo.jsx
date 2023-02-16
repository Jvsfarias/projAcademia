import "./ScreenTwo.css";
import aboutImg from "../../assets/modeloAbout.png";
import { motion } from "framer-motion";

export default function ScreenTwo() {
  return (
    <div className="secondSection flex justify-center gap-[1rem] py-14">
      <motion.img
        src={aboutImg}
        alt="Pessoa Treinando"
        className="w-[500px]"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.3 }}
      />
      <motion.div
        className="textsScreenTwo flex-col w-2/5 mt-4"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.3 }}
      >
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
      </motion.div>
    </div>
  );
}
