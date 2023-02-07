import "./NavBar.css";
import logo from "../../assets/atlantePng.png";

export default function NavBar() {
  let ul = document.querySelector(".nav ul");
 
function menuShow(){
    if(ul.classList.contains("open")){
        ul.classList.remove("open");
    }else{
        ul.classList.add("open")
    }
}


  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />

      <div className="menu-btn"><i className="fa fa-bars fa-2x" onClick={menuShow}></i></div>

      <ul className="flex text-white gap-8 items-center text-sm">
        <li><a href="#">INCIO</a></li>
        <li><a href="#">PLANOS</a></li>
        <li><a href="#">LOCALICAÇÃO</a></li>
        <li><a href="#">PROFESSORES</a></li>
        <li><a href="#">CONTATO</a></li>
      </ul>
    </div>
  );
}
