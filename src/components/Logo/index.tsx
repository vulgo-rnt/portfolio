import styled from "@emotion/styled";
import letter from "../../assets/letter.png";
import { useNavigate } from "react-router-dom";

const ContanierLogo = styled.div`
  img {
    height: 2.5em;
  }
  p {
    margin-top: auto;
    font-size: 40px;
    text-shadow: #c2c2c2 2px 2px;
  }
  font-family: "tag";
  display: flex;
  cursor: pointer;
`;

export default function Logo({ width }: { width: number }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ContanierLogo onClick={handleClick}>
      <img src={letter} />
      {width > 380 && <p>enan .t</p>}
    </ContanierLogo>
  );
}
