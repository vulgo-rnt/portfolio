import BurgerMenu from "../BurgerMenu";
import InLineMenu from "../InLineMenu";

export default function Nav({ width }: { width: number }) {
  const navItems = ["Projetos", "Sobre", "Contato"];

  if (width < 500) {
    return <BurgerMenu navItems={navItems} />;
  } else {
    return <InLineMenu navItems={navItems} />;
  }
}
