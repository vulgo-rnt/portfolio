import useScreenSize from "../../hooks/useScreenSize";
import BurgerMenu from "../BurgerMenu";
import InLineMenu from "../InLineMenu";

export default function Nav() {
  const navItems = ["Projetos", "Sobre", "Contato"];
  const { width } = useScreenSize();

  if (width < 500) {
    return <BurgerMenu navItems={navItems} />;
  } else {
    return <InLineMenu navItems={navItems} />;
  }
}
