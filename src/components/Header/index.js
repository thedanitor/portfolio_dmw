import React, { useState, useEffect } from "react";
import "./style.css";
import DanPhotoLarge from "../../assets/images/DanWeikart.jpg";
// import backgroundLg from "./assets/images/Ruby_Beach_Olympic_National_Park_16x9_Large_comp.jpg";
// import background from "./assets/images/Ruby_Beach_Olympic_National_Park_16x9_1920_comp.jpg";
// import backgroundSm from "./assets/images/Ruby_Beach_Olympic_National_Park_mobile_comp.jpg";

export default function Header() {
  const [photoConClass, setPhotoConClass] = useState("");

  const handleScroll = () => {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > window.innerHeight * 0.1) {
      setPhotoConClass("hidden");
    } else {
      setPhotoConClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div id="backgroundImg">
      <div id="photoCon" className={photoConClass}>
        <img id="danPhotoLarge" src={DanPhotoLarge} alt="Dan Weikart Large" />
      </div>
    </div>
  );
}
