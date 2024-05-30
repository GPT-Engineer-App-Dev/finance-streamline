import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: "#FDF6E3" // Assuming this is the background color of the Financial Times website
};

const theme = extendTheme({ colors });

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        background-color: ${colors.background};
      }
    `}
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);