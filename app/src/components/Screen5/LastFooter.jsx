import "./lastFooter.css";
export default function LastFooter() {
  return (
    <div>
      <h1 className="lastFooter text-[15px] text-white bg-black text-center py-3">
        © 2023 ACADEMIA ATLANTE- TODOS OS DIREITOS RESERVADOS | DESENVOLVIDO POR
        {"  "}
        <span className="underline text-cyan-500">
          <a
            href="https://github.com/Jvsfarias"
            target="_blank"
            className="lastFooter"
          >
            JVSFARIAS
          </a>
        </span>
      </h1>
    </div>
  );
}
