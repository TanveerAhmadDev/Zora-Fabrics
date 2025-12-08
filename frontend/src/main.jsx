import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ServerContext from "./context/ServerContext.jsx";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ServerContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServerContext>
    </AuthContext>
  </StrictMode>
);
