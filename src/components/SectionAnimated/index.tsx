import styled from "@emotion/styled";
import { ReactElement } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import useScrollPosition from "../../hooks/useScrollPosition";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction?: "left" | "right";
}
interface PropsStyles {
  scroll?: number;
}

const Contanier = styled.section`
  background-color: beige;
  height: 200px;
  width: 100vw;
  position: relative;
`;
const ContanierScroll = styled.span<PropsStyles>`
  position: absolute;
  left: ${({ scroll }) => `${scroll}px`};
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  const { width } = useScreenSize();
  const scroll = useScrollPosition();
  console.log(scroll, children, direction); //test
  const seletor = document.getElementById("SectionAnimate");
  const top = seletor ? seletor.getBoundingClientRect().top : 0;

  return (
    <Contanier id="SectionAnimate">
      <ContanierScroll scroll={top}>{width}</ContanierScroll>
    </Contanier>
  );
}
