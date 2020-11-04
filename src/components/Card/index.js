import React from "react";
import { Share } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  Avatar,
  Button,
  Card as Carder,
  Title,
  Paragraph,
  Text,
  Chip,
  Divider,
  List,
} from "react-native-paper";

export const Card = ({
  title,
  subtitle,
  bio,
  avatar,
  html_url,
  public_repos,
  location,
  followers,
}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: html_url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Carder style={{ flex: 1 }}>
      <Carder.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Image {...props} source={{ uri: avatar }} />}
      />
      <Carder.Content>
        <Title>Bio</Title>
        <Paragraph>{bio}</Paragraph>
      </Carder.Content>
      <Carder.Cover source={{ uri: avatar }} />
      <Carder.Actions>
        <FontAwesome size={30} name="heart" color="red" />
        <Button>{followers}</Button>
      </Carder.Actions>
      <Carder.Actions style={{ marginBottom: "100%" }}>
        <Carder.Content>
          <Divider />
          <List.Section>
            <List.Subheader>Informações secretas</List.Subheader>
            <List.Item
              title={"Sou de " + location}
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title={"Tenho " + public_repos + " repositorios"}
              left={() => <List.Icon icon="folder" />}
            />
          </List.Section>
          <List.Section title="Compartilhe meu perfil :)">
            <Chip icon="information" onPress={() => onShare()}>
              {html_url}
            </Chip>
          </List.Section>
        </Carder.Content>
      </Carder.Actions>
    </Carder>
  );
};
