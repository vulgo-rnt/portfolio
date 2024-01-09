import { AppBar, Toolbar } from "@mui/material";
import Nav from "../Nav";
import Logo from "../Logo";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Header() {
  const scroll = useScrollPosition();
  const variantToolBar = scroll > 0 ? "dense" : "regular";

  return (
    <AppBar
      style={{
        backgroundColor: scroll ? "white" : "transparent",
        color: "var(--color-text-default)",
        boxShadow: "none",
        borderBottom: scroll ? "0.1px solid rgba(0,0,0,0.2)" : "none",
        transition: "background-color 0.2s linear",
      }}
      position="fixed"
      component={"header"}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          transitionProperty: "min-height border-bottom",
          transitionDuration: "0.6s",
        }}
        variant={variantToolBar}
      >
        <Logo />
        <Nav />
      </Toolbar>
    </AppBar>
  );
}
