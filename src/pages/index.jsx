import React, { useRef, useState } from "react";
import { HeroCont } from "@/components/Home/HeroCont";
import { FormContainer } from "@/components/Home/FormContainer";
import { SecondContainer } from "@/components/Home/SecondContainer";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  const [serviceSelection, setServiceSelection] = useState("");
  const formRef = useRef(null);

  const scrollToForm = () => {
    // Method 1: Custom smooth scroll with duration control
    const element = formRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 1000; // 1 second duration
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);

        // Easing function for smooth animation
        const ease =
          progressPercentage < 0.5
            ? 2 * progressPercentage * progressPercentage
            : 1 - Math.pow(-2 * progressPercentage + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  return (
    <>
      <HeroCont onScrollToForm={scrollToForm} />
      <SecondContainer
        onScrollToForm={scrollToForm}
        setServiceSelection={setServiceSelection}
      />
      <div ref={formRef}>
        <FormContainer serviceSelection={serviceSelection} />
      </div>
      <Footer />
    </>
  );
}
