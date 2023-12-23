import styled from "@emotion/styled";
import { ReactElement } from "react";

interface CardProps {
  initial?: boolean;
  children: string | ReactElement;
  img?: string;
}

const CardStyled = styled.section<{ initial: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #d2e6f8;
  border-radius: 20px;
  padding: 50px;
  @media (max-width: 600px) {
    padding-top: ${({ initial }) => (initial ? "120px" : "20px")};
    border-radius: ${({ initial }) => (initial ? "0 0 20px 20px" : "20px")};
  }
`;

export default function Card({ children, img, initial = false }: CardProps) {
  return (
    <CardStyled initial={initial}>
      <div>{children}</div>
      {img && (
        <div>
          <img src={img}></img>
        </div>
      )}
    </CardStyled>
  );
}
