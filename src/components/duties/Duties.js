import "./Duties.css";
import Duty from "./Duty";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function Duties() {
 
  return (
    <section className="duties">
      <Duty 
        title="مواد اوليه سالم و تازه"
        desc="لاروخا با استفاده مواد اوليه تازه و برگر هاي دست ساز طعمي لذيذ و خاص برای شما به ارمغان مي آورد"
      />
      <Duty
        title="تحويل سفارشات سريع"
        desc="لاروخا با شعبه هاي مختلف سعي بر اين دارد كه سفارشات شما به سرعت تحويل داده شود "
      />
      <Duty
        title="رعايت پروتكل هاي بهداشتي"
        desc="لاروخا با رعايت تمام پروتکل هاي بهداشتي خصوصا در ايام كرونا پذیراي شما خواهد بود"
      />
    </section>
  );
}

export default Duties;
