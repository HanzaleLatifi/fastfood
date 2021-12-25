import React from "react";
import "../App.css";
import bgimg from "../assets/bg1.png";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

function HomePage() {
 

  return (
    <>
      <section id="home">
        <main className="landingPage">
          <div className="landingText">
            <h2 className="heading"> به فست فود لاروخا خوش آمديد</h2>
            <p>طعمي لذيذ و به ياد ماندني را با ما تجربه كنيد</p>
            <a href="#menu" className="btn btn-primary" style={{fontSize:'3rem',width:'20rem'}}>مشاهده منو </a>
          </div>
          <div className="landingImg">
            <img src={bgimg} alt="fastfood"/>
          </div>
        </main>
      </section>
      <Menu />
      <Footer/>
    </>
  );
}

export default HomePage;
