import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./Context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartContextProvider>
    <Router>
      <App />
    </Router>
  </CartContextProvider>
);
