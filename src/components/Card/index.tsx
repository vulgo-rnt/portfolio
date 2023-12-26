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
  text-align: center;
  border-radius: 20px;
  padding: 50px;
  gap: 30px;

  img {
    max-width: 100%;
  }
  @media (max-width: 600px) {
    padding-top: ${({ initial }) => (initial ? "120px" : "50px")};
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
