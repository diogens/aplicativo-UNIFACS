import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme, Checkbox } from "react-native-paper";
import { Layout } from "../../components/";

import { Context } from "../../context/";

export const Home = () => {
  const { name, setName, isDark, setIsDark } = React.useContext(Context);
  const { dark, colors, mode } = useTheme();
  const [checked, setChecked] = React.useState(false);
  return (
    <Layout>
      <Text style={{ color: colors.primary }}>{name}</Text>
      <Button
        title="Btn"
        onPress={(e) => {
          console.log("oi", name);
          setIsDark(!isDark);
          if (name === "Desligado") {
            setName("Ligado");
          }
          if (name === "Ligado") {
            setName("Desligado");
          }
        }}
      />
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          setIsDark(!isDark);
          if (name === "Desligado") {
            setName("Ligado");
          }
          if (name === "Ligado") {
            setName("Desligado");
          }
        }}
      />
    </Layout>
  );
};
