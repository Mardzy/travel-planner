import React from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import { Router } from "./Router";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <Router />
    </FluentProvider>
  </React.StrictMode>,
);
