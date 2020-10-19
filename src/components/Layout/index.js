import React from "react";
import { View, Text } from "react-native";
import { useTheme, Appbar, Drawer, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const Layout = ({ children, title, subtitle }) => {
  const { dark, colors, mode } = useTheme();
  const [active, setActive] = React.useState("");
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.canGoBack();
          }}
        />
        <Appbar.Content title={title} subtitle={subtitle} />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.background,
        }}
      >
        <Portal.Host>
          <Text>Content of the app</Text>
        </Portal.Host>
        {children}
      </View>
    </>
  );
};
