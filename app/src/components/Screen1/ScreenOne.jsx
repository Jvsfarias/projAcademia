import "./screenOne.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function ScreenOne() {
  return (
    <div id="homePage">
      <div className="imagem" />
      <motion.div
        className="marketing text-white inline-block "
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.4 }}
      >
        <h1 className="topText">ESCOLHA A</h1>
        <h1 className="topText">ACADEMIA QUE</h1>
        <h1 className="lastText">VOCÊ MERECE!</h1>
        <button className="px-[4rem] py-[1.5 rem] font-black border-orangeProject border-[2px] text-3xl mt-5 hover:scale-105 hover:bg-orangeProject">
          <Link
            to="planos"
            spy={true}
            smooth={true}
            offset={-10}
            duration={800}
          >
            CONHECER PLANOS
          </Link>
        </button>
      </motion.div>
    </div>
  );
}
