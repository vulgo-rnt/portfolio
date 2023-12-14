import useScreenSize from "../../hooks/useScreenSize";

export default function NavMenu() {
  const { width } = useScreenSize();
  if (width < 300) {
    return <p>300px</p>;
  } else {
    return <p>mais de 300px</p>;
  }
}
