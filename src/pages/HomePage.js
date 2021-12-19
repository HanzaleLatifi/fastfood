import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import bgimg from "../assets/bg.png";
import Menu from "../components/menu/Menu";

function HomePage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setState(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(state);

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
            <img src={bgimg} />
          </div>
        </main>
      </section>
      <Menu />
    </>
  );
}

export default HomePage;
