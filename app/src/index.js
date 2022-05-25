import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
