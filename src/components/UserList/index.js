import React from "react";
import { View, Button, FlatList } from "react-native";
import { Text, Avatar, Card, IconButton, Searchbar } from "react-native-paper";

export const UserList = ({ title, subtitle, avatar, onPress }) => {
  return (
    <View style={{ minWidth: "100%" }}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Image {...props} source={{ uri: avatar }} />}
        right={(props) => (
          <IconButton {...props} icon="drag" onPress={onPress} />
        )}
      />
    </View>
  );
};
