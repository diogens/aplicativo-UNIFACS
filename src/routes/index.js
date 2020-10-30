import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import { Home, Herois } from "../screens";

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "#000",
            borderTopColor: "rgba(255, 255, 255, 0.3)",
          },
          activeBackgroundColor: "#888",
          activeTintColor: "#fff",
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Contatos"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="code" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SuperHeros"
          component={Herois}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="star" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
