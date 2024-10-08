import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three"; // Vanta.js requires three.js
import FOG from "vanta/dist/vanta.fog.min";

const VantaClouds = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: '#deb992',
            midtoneColor: '#5ebec4',
            lowlightColor: '#D1B5A3',
            baseColor: '#051622',
            blurFactor: 0.53,
            speed: 1.60,
            zoom: 0.60
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // Change this as needed
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default VantaClouds;
