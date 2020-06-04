import React from "react";
import PropTypes from "prop-types";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import red from "@material-ui/core/colors/red";
import { ThemeProvider } from "@material-ui/core/styles";

export const AppTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      h1: {
        fontWeight: "fontWeightBold",
        fontSize: 27
      },
      body1: {
        fontSize: 14
      }
    },
    palette: {
      primary: {
        main: lightBlue[600]
      },
      secondary: {
        main: lightBlue[50]
      },
      error: {
        main: red[800]
      }
    }
  })
);

export const AppThemeProvider = props => {
  return <ThemeProvider theme={AppTheme}>{props.children}</ThemeProvider>;
};

AppThemeProvider.propTypes = {
  children: PropTypes.node
};
