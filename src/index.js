import React from "react";
import { StatusBar } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  DarkTheme,
} from "react-native-paper";

import { Routes } from "./routes";
import { AppContext, Context } from "./context/";

const lighTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ced4da",
    accent: "#03dac4",
    background: "#f6f6f6",
  },
};

const darkTheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
  },
};

export default function Main() {
  const { name, isDark } = React.useContext(Context);
  return (
    <PaperProvider theme={isDark ? darkTheme : lighTheme}>
      <StatusBar
        backgroundColor={
          isDark ? darkTheme.colors.background : lighTheme.colors.background
        }
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <Routes />
    </PaperProvider>
  );
}
