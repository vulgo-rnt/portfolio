import styled from "@emotion/styled";
import { ReactElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction?: "left" | "right" | "up" | "down";
}

const Contanier = styled.section`
  background-color: beige;
  overflow: hidden;
  position: relative;
`;

const directionAnimate = (direction: string) => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0 },
      };
    case "up":
      return {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export default function SectionAnimated({
  children,
  direction = "left",
}: PropsComponent) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animateControls = useAnimation();
  const variant = directionAnimate(direction);

  useEffect(() => {
    if (isInView) {
      animateControls.start("visible");
    } else {
      animateControls.start("hidden");
    }
  }, [isInView]);

  return (
    <Contanier ref={ref}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={animateControls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </Contanier>
  );
}
