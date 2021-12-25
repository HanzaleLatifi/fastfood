import "./Footer.css";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
function Footer() {
  return (
    <footer id="aboutus">
      <section>
        <h3>درباره لاروخا</h3>
        <p>
          لاروخا در سال 1400 تاسيس شد و امكان سفارش انلاين در سراسر كشور را براي
          شما مشريان عزيز فراهم كرده است
        </p>
        <div className="social-contianer">
          <RiWhatsappFill />
          <RiInstagramFill />
          <IoCall />
        </div>
      </section>
      <p>developed by Hanzale Latifi</p>
    </footer>
  );
}

export default Footer;
