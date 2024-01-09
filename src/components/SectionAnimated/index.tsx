import styled from "@emotion/styled";
import { ReactElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import directionAnimate from "./directionAnimateFunction";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction?: "left" | "right" | "up" | "down";
  effectScala?: boolean;
}

const Contanier = styled.section`
  overflow: hidden;
  position: relative;
`;

export default function SectionAnimated({
  children,
  direction = "left",
  effectScala = false,
}: PropsComponent) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animateControls = useAnimation();
  const variant = directionAnimate(direction, effectScala);

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
