// components/Home/HeroCont.jsx
import { StarBackground } from "@/components/StarBackground";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";

export const HeroCont = () => {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
    console.log(window.innerHeight);
  }, [height]);

  return (
    <div
      style={{
        position: "relative",
        height: `${height}px`,
        overflow: "hidden",
        background: "#1F1F1F",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          height: "200px",
          background: "linear-gradient(to top, transparent,#1f1f1f)",
          zIndex: 3,
        }}
      >
        <Header />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Suspense>
          <StarBackground />
        </Suspense>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%) translateY(50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          color: "#f48643",
        }}
        className="chartSpin"
      >
        <div
          style={{
            position: "relative",
            height: { xs: "700px", md: "1000px" },
            width: { xs: "700px", md: "1000px" },
            overflow: "hidden",
          }}
        >
          <Image
            src={"/chartwheel.svg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, transparent 20%, #f48643 120%)",
        }}
      ></div>
    </div>
  );
};
