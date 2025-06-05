import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import PreloaderContainer from "./components/preloader/preloader-container.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className={`layout-mainpreloader relative z-[2000]`}>
        <PreloaderContainer />
      </div>
      <App />
    </BrowserRouter>
  </StrictMode>
);
