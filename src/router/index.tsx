import { BrowserRouter, Route, Routes } from "react-router-dom";

import appRoutes from "./appRouter";
import LayoutDefault from "../layout";
import { transformRoute } from "./hook";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          {transformRoute(appRoutes)}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
