import React from "react";
import { Share } from "react-native";
import {
  Avatar,
  Button,
  Card as Carder,
  Title,
  Paragraph,
  Text,
  Chip,
} from "react-native-paper";

export const Card = ({ title, subtitle, bio, avatar, html_url }) => {
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
      <Carder.Actions style={{ marginBottom: "100%" }}>
        <Carder.Content>
          <Chip icon="information" onPress={() => onShare()}>
            {html_url}
          </Chip>
        </Carder.Content>
      </Carder.Actions>
    </Carder>
  );
};
