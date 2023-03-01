import insta from "../.././assets/logoInsta.png";
import "./insta.css";
export default function InstaButton() {
  return (
    <a
      href="https://www.instagram.com/atlanteacademia/"
      className="whatsIcon w-[55px] fixed z-50 bottom-6 right-11 hover:scale-105 "
      target="_blank"
    >
      <img src={insta} alt="icone instagram" className="wi rounded-full" />
    </a>
  );
}
