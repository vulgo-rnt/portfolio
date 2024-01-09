import { NavigateFunction } from "react-router-dom";

export function handleClickNavigate(item: string, navigate: NavigateFunction) {
  const lowerCaseItem = item.toLocaleLowerCase();
  if (lowerCaseItem === "contato") {
    if (window.location.pathname === "/") {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      navigate(`/`);
      window.scrollTo(0, document.body.scrollHeight);
    }
  } else {
    navigate(`/${lowerCaseItem}`);
  }
}
