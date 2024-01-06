import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import Nav from "../Nav";
import Logo from "../Logo";

export default function Header() {
  const scroll = useScrollTrigger();
  const variantToolBar = scroll ? "dense" : "regular";

  return (
    <AppBar
      style={{
        backgroundColor: "transparent",
        color: "var(--color-text-default)",
        backdropFilter: "blur(5px)",
        boxShadow: "none",
        borderBottom: scroll ? "0.1px solid rgba(0,0,0,0.2)" : "none",
      }}
      position="fixed"
      component={"header"}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          transition: "min-height border-bottom 0.4s ease",
        }}
        variant={variantToolBar}
      >
        <Logo />
        <Nav></Nav>
      </Toolbar>
    </AppBar>
  );
}
