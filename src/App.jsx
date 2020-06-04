import React from "react";

import { ApplicationContextProvider } from "./context/ApplicationContext";
import { composeWrappers } from "react-compose-wrappers";
import { AppThemeProvider } from "style/AppTheme";

export const App = () => {
  const AppProvider = composeWrappers([
    ApplicationContextProvider,
    AppThemeProvider,
  ]);

  return (
    <AppProvider>
      <></>
    </AppProvider>
  );
};
