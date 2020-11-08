import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme, Appbar, Drawer, Portal, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../context";
import { StatusBar } from "expo-status-bar";

export const Layout = ({ children, title, subtitle, func }) => {
  const { name, setName, isDark, setIsDark } = React.useContext(Context);
  const { dark, colors, mode } = useTheme();
  const [checked, setChecked] = React.useState(false);
  const [active, setActive] = React.useState("");
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("Contatos");
            console.log("09");
          }}
        />
        {/* <Button
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
        /> */}
        <Appbar.Content title={title} subtitle={subtitle} />
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
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.background,
        }}
      >
        {children}
      </View>
    </>
  );
};
