import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from "react-animations";

const fadeInKeyframes = keyframes`${fadeIn}`;
const fadeOutKeyframes = keyframes`${fadeOut}`;

const AnimatedText = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${(props) => (props.animate ? fadeInKeyframes : fadeOutKeyframes)}
    0.1s forwards;
  animation-delay: ${(props) => props.index * 0.1}s;
`;

const TextWithAnimation = ({ text }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const nonSpaceCharCount = text.replace(/\s+/g, "").length;
    const totalDuration = nonSpaceCharCount * 0.1 * 1000 + 1000;
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, totalDuration);
    }, totalDuration * 2);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-[#1b5bf7] text-[40px] font-semibold">
      {text.split("\n").map((line, lineIndex) => (
        <div key={lineIndex} style={{ whiteSpace: "pre" }}>
          {line.split("").map((char, charIndex) => (
            <AnimatedText
              key={charIndex}
              index={lineIndex * (line.length + 1) + charIndex} // Fixing the index calculation
              animate={animate}
            >
              {char}
            </AnimatedText>
          ))}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full z-10 flex items-center justify-between mt-[160px]">
      <div>
        <img
          className="w-[270px]"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
          alt="rasm"
        />
        <p className="text-[#464359] mt-[20px] font-semibold text-[40px]">
          IT-Outsourcing Company <br />
        </p>
        <TextWithAnimation
          text={"Development and\nimplementation ERP\nsystems"}
        />
        <button className="w-[230px] text-white text-[20px] mt-[20px] font-medium hover:scale-105 duration-100 h-[55px] rounded-[8px] bg-[#1b5bf7]">
          Contact
        </button>{" "}
      </div>
      <div>
        <img
          src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
