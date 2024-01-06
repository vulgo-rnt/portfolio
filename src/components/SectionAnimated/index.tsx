import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import useScreenSize from "../../hooks/useScreenSize";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction: "left" | "right";
}

const Contanier = styled.section<PropsComponent>`
  background-color: beige;
  height: 200px;
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  //te odeio matematica
  const scroll = useScrollPosition();
  const { width, height } = useScreenSize();
  const progressAnimate = width - scroll * 2;
  const positionElement = progressAnimate > 0 ? progressAnimate : 0;

  const top = document.getElementById("test")?.getBoundingClientRect().top;

  return (
    <Contanier direction={direction} id="test">
      <motion.div animate={{ x: 0 }}>{top}</motion.div>
    </Contanier>
  );
}
