import "./ScreenOne.css";
export default function ScreenOne() {
  return (
    <div>
      <div className="imagem" />
      <div className="marketing text-white inline-block ">
        <h1 className="topText">ESCOLHA A</h1>
        <h1 className="topText">ACADEMIA QUE</h1>
        <h1 className="lastText">VOCÊ MERECE!</h1>
        <button className="px-[4rem] py-[1.5 rem] font-black border-orangeProject border-[2px] text-3xl mt-5 hover:scale-105">
          CONHECER PLANOS
        </button>
      </div>
    </div>
  );
}
