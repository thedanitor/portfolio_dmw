import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import DanPhotoLarge from "../../assets/images/DanWeikart.jpg";

export default function HeaderPhoto() {
  return <Image id="danPhotoLarge" src={DanPhotoLarge} alt="Dan Weikart Large" roundedCircle/>;
}
