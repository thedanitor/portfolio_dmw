import React, { useState, useEffect } from "react";
import "./style.css";
import DanPhotoLarge from "../../assets/images/DanWeikart.jpg";

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
    <div id="photoCon" className={photoConClass}>
      <img id="danPhotoLarge" src={DanPhotoLarge} alt="Dan Weikart Large" />
    </div>
  );
}
