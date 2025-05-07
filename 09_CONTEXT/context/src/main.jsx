import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterContextProvider } from "./context/CounterContext.jsx";
import { TitleColorProvider } from "./context/TitleColorContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorProvider>
        <App />
      </TitleColorProvider>
    </CounterContextProvider>
  </StrictMode>
);
