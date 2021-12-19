import img1 from "../../assets/364303086.jpg";
import img2 from "../../assets/-473Wx593H-461083532-green-MODEL2.webp";
import img3 from "../../assets/-473Wx593H-461085141-blue-MODEL.webp";
import img4 from "../../assets/5cc1a381ced3e400011c4676.webp";

import { useState, useEffect } from "react";

function Slider() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <div></div>;
}

export default Slider;
