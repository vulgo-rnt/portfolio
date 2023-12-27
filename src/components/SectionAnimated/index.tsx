import styled from "@emotion/styled";
import { ReactElement } from "react";

interface PropsComponent {
  children: string | ReactElement;
  direction: "left" | "right";
}

const Contanier = styled.section<PropsComponent>`
  width: 100%; //
  background-color: beige;

  animation: ${({ direction }) => `${direction}Fade`} 1ms ease-in;
  animation-timeline: View();
  animation-range: cover 0 cover 50%;

  @keyframes rightFade {
    from {
      transform: translate3d(100px, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes leftFade {
    from {
      transform: translate3d(-100px, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

export default function SectionAnimated({
  children,
  direction,
}: PropsComponent) {
  return <Contanier direction={direction}>{children}</Contanier>;
}
