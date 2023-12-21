import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Global } from "@emotion/react";
import { global, reset } from "../../styles/globalStyles";
import styled from "@emotion/styled";

const ContanierContantPage = styled.main`
  max-width: 1200px;
  margin: 140px auto;
  padding: 30px;
`;

function LayoutGlobal() {
  return (
    <>
      <Global styles={[reset, global]} />
      <Header />
      <ContanierContantPage>
        <Outlet />
      </ContanierContantPage>
      <Footer />
    </>
  );
}

export default LayoutGlobal;
