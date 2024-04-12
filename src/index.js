// default
import React from "react";
import ReactDOM from "react-dom/client";

//  styles
import "./index.scss";

// main component
import App from "./App";

// router
import { BrowserRouter as Router } from "react-router-dom";

// dependencies
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
