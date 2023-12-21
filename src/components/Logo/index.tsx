import styled from "@emotion/styled";
import letter from "../../assets/letter.png";

const ContanierLogo = styled.div`
  @font-face {
    font-family: "tag";
    src: url("StreetGraffity.ttf");
  }
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
`;

export default function Logo({ width }: { width: number }) {
  return (
    <ContanierLogo>
      <img src={letter} />
      {width > 380 && <p>enan .t</p>}
    </ContanierLogo>
  );
}
