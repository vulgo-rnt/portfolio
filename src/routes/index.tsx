import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "../pags/LayoutGlobal";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index path="/" element={<p>teste</p>} />
          <Route path="/test" element={<p>PAGINA TESTE</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
