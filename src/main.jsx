import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme";

import "./assets/fonts/hellix/hellix.css"
import "./index.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root"))
  .render(
    <BrowserRouter>
      <ChakraProvider theme={theme} >
        <CSSReset />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  )
