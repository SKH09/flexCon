import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Inspect from "inspx";
import Form from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inspect>
      <Form />
    </Inspect>
  </StrictMode>
);
