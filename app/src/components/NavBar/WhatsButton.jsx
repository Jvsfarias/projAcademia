import whatsIcon from "../.././assets/whatsicon.png";
import "./whats.css";
export default function WhatsButton() {
  return (
    <a
      href="https://wa.me/5583998267007"
      className="whatsIcon w-[60px] fixed z-50 bottom-6 right-11 hover:scale-105 "
      target="_blank"
    >
      <img src={whatsIcon} alt="whatsIcon" className="wi rounded-full" />
    </a>
  );
}
