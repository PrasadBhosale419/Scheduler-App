import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="Index">
    <App />
  </div>
);
