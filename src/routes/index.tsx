import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "../pags/LayoutGlobal";
import Projects from "../pags/Projects";
import About from "../pags/About";
import Home from "../pags/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
