import Map from "./Map";
import "./screenTree.css";

export default function ScreenTree() {
  return (
    <section
      className="secao flex flex-col items-center gap-7  p-9 bg-[#12100E] pb-32"
      id="location"
    >
      <div className="flex items-center font-black text-[2rem] tracking-wider gap-2 text-slate-200 ">
        <div className="w-[16vw] h-[1px] border-[1px] border-orangeProject">
          {" "}
        </div>
        <span className="textosScreenTree font-thin">NOSSA </span>
        <span className="textosScreenTree">LOCALIZAÇÃO</span>
        <div className="w-[16vw] h-[1px] border-[1px] border-orangeProject">
          {" "}
        </div>
      </div>
      <Map />
    </section>
  );
}
