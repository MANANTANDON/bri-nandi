// components/Home/HeroCont.jsx
import { StarBackground } from "@/components/StarBackground";
import Image from "next/image";
import { Suspense } from "react";

export const HeroCont = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#1F1F1F",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Suspense fallback={<div>Loading particles...</div>}>
          <StarBackground />
          {/* Or pass custom styles: <StarBackground style={{ opacity: 0.9 }} /> */}
        </Suspense>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#f48643",
          fontSize: "43px",
          marginTop: "100px",
        }}
      >
        Bri Nandi
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%", // center horizontally
          bottom: 0,
          transform: "translateX(-50%) translateY(50%)", // keep bottom offset and horizontal centering
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          color: "#f48643",
        }}
        className="chartSpin"
      >
        <Image
          src={"/chartwheel.svg"}
          layout="intrinsic"
          height={800}
          width={800}
          style={{ transform: "scale(1.2)" }} // scales image
        />
      </div>
    </div>
  );
};
