import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import NavMenu from "../NavMenu";
import styled from "@emotion/styled";
import useScreenSize from "../../hooks/useScreenSize";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const scroll = useScrollTrigger() ? "dense" : "regular";
  const { width } = useScreenSize();
  return (
    <AppBar color="transparent" position="fixed" component={"nav"}>
      <ToolbarStyled
        style={{ transition: "min-height 0.2s ease" }}
        variant={scroll}
      >
        <p>imagem</p>
        <NavMenu width={width}></NavMenu>
      </ToolbarStyled>
    </AppBar>
  );
}
