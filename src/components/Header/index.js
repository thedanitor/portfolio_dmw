import React from 'react';
import "./style.css";
import DanPhotoLarge from "../../assets/images/DanWeikart.jpg";

export default function Header() {

    return (
        <div>
            <img id="danPhotoLarge"
            src={DanPhotoLarge}
            alt="Dan Weikart Large"
            />
        </div>
    )
}
