import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import Nav from "../Nav";
import Logo from "../Logo";

export default function Header() {
  const scroll = useScrollTrigger();
  const variantToolBar = scroll ? "dense" : "regular";

  return (
    <AppBar
      style={{
        backgroundColor: scroll ? "white" : "transparent",
        color: "var(--color-text-default)",
        boxShadow: "none",
        borderBottom: scroll ? "0.1px solid rgba(0,0,0,0.2)" : "none",
        transition: "background-color 0.1s linear",
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
        <Nav></Nav>
      </Toolbar>
    </AppBar>
  );
}
