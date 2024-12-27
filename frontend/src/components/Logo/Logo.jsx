import React from "react";
import Tilt from 'react-parallax-tilt';
import face from "./face.png"

const Logo = () => {
  return (
    <div>
        <Tilt className="br2 shadow-2 card" style={{ width: "100px", height: "100px"}}>
            <div>
                <img src={face} alt="" />
            </div>
        </Tilt>
    </div>
  );
}

export default Logo;