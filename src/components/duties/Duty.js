import "./Duties.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Duty({ title, desc }) {
  useEffect(() => {
    Aos.init({duration:2000 , delay:200 })
   }, [])
  return (
    <div
      className="duty "
      data-aos="flip-right"
    >
      <p className="duty-title">{title}</p>
      <hr />
      <p className="duty-desc">{desc}</p>
    </div>
  );
}

export default Duty;
