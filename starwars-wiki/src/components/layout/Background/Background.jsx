import { useEffect, useState } from "react";
import { memo } from "react";
import StarfieldAnimation from "react-starfield-animation";

// eslint-disable-next-line react/display-name
export const Background = memo(() => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StarfieldAnimation
      key={containerWidth}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      numParticles={800}
      dx={0.000000001}
      dy={0.000000001}
    />
  );
});
