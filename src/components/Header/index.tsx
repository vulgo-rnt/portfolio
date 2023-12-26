import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import Nav from "../Nav";
import useScreenSize from "../../hooks/useScreenSize";
import Logo from "../Logo";

export default function Header() {
  const scroll = useScrollTrigger() ? "dense" : "regular";
  const { width } = useScreenSize();
  return (
    <AppBar color="transparent" position="fixed" component={"header"}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          transition: "min-height 0.4s ease",
        }}
        variant={scroll}
      >
        <Logo width={width} />
        <Nav width={width}></Nav>
      </Toolbar>
    </AppBar>
  );
}
