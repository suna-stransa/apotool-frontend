import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = props => (
  <ApplicationContext.Provider
    value={{
      isInitializedAppState: useState(false)
    }}
  >
    {props.children}
  </ApplicationContext.Provider>
);

ApplicationContextProvider.propTypes = {
  children: PropTypes.node
};
