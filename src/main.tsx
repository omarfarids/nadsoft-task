import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BrowserRouter from "@/config/BrowserRouter";
import "@/styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
