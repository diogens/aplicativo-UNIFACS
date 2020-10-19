import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

export const Layout = ({ children }) => {
  const { dark, colors, mode } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.primary }}>HomeScreen</Text>
      {children}
      <Text style={{ color: colors.primary }}>Yo!</Text>
    </View>
  );
};
