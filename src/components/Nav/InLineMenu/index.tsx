import styled from "@emotion/styled";
import { handleClickNavigate } from "../handleClickNavigate";
import { useNavigate } from "react-router-dom";

const SectionStyled = styled.section`
  display: flex;
  gap: 30px;
  cursor: pointer;
  p:hover {
    border-bottom: 1px solid black;
  }
`;

export default function InLineMenu({ navItems }: { navItems: string[] }) {
  const navigate = useNavigate();
  return (
    <SectionStyled>
      {navItems.map((item) => {
        return (
          <p key={item} onClick={() => handleClickNavigate(item, navigate)}>
            {item}
          </p>
        );
      })}
    </SectionStyled>
  );
}
