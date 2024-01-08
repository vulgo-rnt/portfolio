import styled from "@emotion/styled";
import { ReactElement, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

interface PropsComponent {
  children: string | ReactElement | ReactElement[];
  direction?: "left" | "right";
}
interface PropsStyles {
  scroll?: number;
}

const Contanier = styled.section`
  background-color: beige;
  height: 40px;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;
const ContanierScroll = styled.span<PropsStyles>`
  position: absolute;
  left: ${({ scroll }) => `${scroll}%`};
  transition: all 0.8s ease;
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  const { height, width } = useScreenSize();
  const [scroll, setScroll] = useState(100);

  document.addEventListener("scroll", () => {
    const elementRef = document.getElementById("SectionAnimate");
    const relativeToTheTopPage = elementRef?.getBoundingClientRect().top || 0;
    const percentageElementToTheScreen = (relativeToTheTopPage / height) * 100;
    setScroll(percentageElementToTheScreen);
  });

  return (
    <Contanier id="SectionAnimate">
      <ContanierScroll scroll={scroll}>{scroll}</ContanierScroll>
    </Contanier>
  );
}
