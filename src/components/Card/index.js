import React from "react";
import { Share } from "react-native";
import { FontAwesome, SimpleLineIcons, Entypo } from "@expo/vector-icons";
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
  following,
  blog,
  email,
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

        <SimpleLineIcons size={30} name="user-following" color="red" />
        <Button>{following}</Button>
      </Carder.Actions>

      <Divider />
      <List.Section style={{ width: "100%", background: "red" }}>
        <List.Subheader>Informações secretas</List.Subheader>
        <List.Item
          style="Local"
          title={"Sou de " + location}
          description={"Sou de " + location}
          left={() => <List.Icon icon="rocket" />}
        />
        <List.Item
          title="Repositório"
          description={"Tenho " + public_repos + " repositorios"}
          left={() => <List.Icon icon="sim" />}
        />
        <List.Item
          title="Blog"
          description={blog || "não tem"}
          left={() => <List.Icon icon="web" />}
        />
        <List.Item
          title="Email"
          description={email || "não tem"}
          left={() => <List.Icon icon="email" />}
        />
      </List.Section>
      <List.Section title="Compartilhe meu perfil :)">
        <Carder.Actions>
          <Chip icon="information" onPress={() => onShare()}>
            {html_url}
          </Chip>
          <Entypo
            name="share"
            size={24}
            color="#fff"
            onPress={() => onShare()}
          />
        </Carder.Actions>
      </List.Section>
    </Carder>
  );
};
