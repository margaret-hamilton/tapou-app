import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>);
