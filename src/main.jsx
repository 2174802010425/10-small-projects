import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Context from "./hooks/Context.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Context>

    <App />
  </Context>
 
);
