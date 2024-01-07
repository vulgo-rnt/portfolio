import styled from "@emotion/styled";
import { ReactElement } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import useScrollPosition from "../../hooks/useScrollPosition";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction: "left" | "right";
  width: number;
  scroll: number;
}

const Contanier = styled.section<PropsComponent>`
  background-color: beige;
  height: 200px;
  width: ${({ width }) => `${width * 2}px`};
  padding-left: ${({ scroll }) => `${scroll}px`};
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  const { width } = useScreenSize();
  const scroll = useScrollPosition();
  console.log(scroll);
  const seletor = document.getElementById("SectionAnimate");
  const top = seletor ? seletor.getBoundingClientRect().top : 0;

  return (
    <Contanier
      width={width}
      scroll={top}
      direction={direction}
      id="SectionAnimate"
    >
      {children}
    </Contanier>
  );
}
