import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import NavMenu from "../NavMenu";

export default function Header() {
  const height = useScrollTrigger() ? "dense" : "regular";
  return (
    <AppBar color="transparent" position="fixed">
      <Toolbar style={{ transition: "min-height 0.2s ease" }} variant={height}>
        <p>imagem</p>
        <NavMenu></NavMenu>
      </Toolbar>
    </AppBar>
  );
}
