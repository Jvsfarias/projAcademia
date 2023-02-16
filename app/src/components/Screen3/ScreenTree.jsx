import Map from "./Map";
import "./ScreenTree.css";
import { motion } from "framer-motion";

export default function ScreenTree() {
  return (
    <section className="secao flex flex-col items-center gap-7 mt-24 p-9 bg-[#12100E] pb-16">
      <motion.div
        className="flex items-center font-black text-[2rem] tracking-wider gap-2 text-slate-200 "
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-[16vw] h-[1px] border-[1px] border-orangeProject">
          {" "}
        </div>
        <span className="textosScreenTree font-thin">NOSSA </span>
        <span className="textosScreenTree">LOCALIZAÇÃO</span>
        <div className="w-[16vw] h-[1px] border-[1px] border-orangeProject">
          {" "}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Map />
      </motion.div>
    </section>
  );
}
