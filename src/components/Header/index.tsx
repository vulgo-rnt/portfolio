import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import Nav from "../Nav";
import styled from "@emotion/styled";
import useScreenSize from "../../hooks/useScreenSize";
import Logo from "../Logo";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const scroll = useScrollTrigger() ? "dense" : "regular";
  const { width } = useScreenSize();
  return (
    <AppBar
      style={{ backdropFilter: "blur(10px)" }}
      color="transparent"
      position="fixed"
      component={"header"}
    >
      <ToolbarStyled
        style={{ transition: "min-height 0.2s ease" }}
        variant={scroll}
      >
        <Logo width={width} />
        <Nav width={width}></Nav>
      </ToolbarStyled>
    </AppBar>
  );
}
