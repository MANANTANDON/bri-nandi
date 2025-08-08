// components/StarBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const StarBackground = ({ style = {} }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    // optional debug
    // console.log("Particles loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      // ensure the wrapper/canvas is constrained to the parent
      style={{
        position: "absolute",
        inset: 0, // top:0; right:0; bottom:0; left:0
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // so hero content can receive pointer events
        ...style,
      }}
      options={{
        // IMPORTANT: disable full screen so canvas stays inside the parent element
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } }, // transparent so parent bg shows
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 83.9,
              size: 2,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
            remove: { quantity: 2 },
          },
        },
        particles: {
          number: {
            value: 120, // fewer stars by default (tweak as needed)
            density: { enable: true, area: 800 },
          },
          color: { value: "#f48643" },
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            bounce: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
