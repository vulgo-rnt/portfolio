import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Global } from "@emotion/react";
import { global, reset } from "../styles/globalStyles";

function LayoutGlobal() {
  return (
    <>
      <Global styles={[reset, global]} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutGlobal;
