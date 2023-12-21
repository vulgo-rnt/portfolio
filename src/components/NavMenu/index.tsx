import BurgerMenu from "../BurgerMenu";

export default function NavMenu({ width }: { width: number }) {
  const navItems = ["Home", "About", "Contact"];

  if (width < 990) {
    return <BurgerMenu navItems={navItems} />;
  } else {
    return <p>- 990px</p>;
  }
}
