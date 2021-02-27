import React from 'react';
import loadGif from "../../assets/images/dmwLoading.gif";
import Container from "react-bootstrap/Container";

export default function Loading() {
    return (
        <div className="loadBg">
            <img src={loadGif} alt="DMW loading" />
        </div>
    )
}
