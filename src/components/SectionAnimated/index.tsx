import styled from "@emotion/styled";
import { ReactElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction?: "left" | "right";
}

const Contanier = styled.section`
  background-color: beige;

  overflow: hidden;
  position: relative;
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animateControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateControls.start("visible");
    } else {
      animateControls.start("hidden");
    }
    console.log(isInView);
  }, [isInView]);

  return (
    <Contanier ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animateControls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </Contanier>
  );
}
