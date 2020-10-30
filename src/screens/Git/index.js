import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { Layout } from "../../components";

import { Context } from "../../context";
import { api } from "../../services";

export const Git = () => {
  const [user, setUser] = React.useState();
  const [followers, setFollowers] = React.useState([]);
  const [name, setName] = React.useState("diogenes");

  React.useEffect(() => {
    async function getUserGithub() {
      const response = await api.get(`${name}/followers`);
      setFollowers(response.data);
    }
    getUserGithub();
  }, []);

  return (
    <Layout>
      <Text>Teste = dados do git</Text>
      <FlatList
        data={followers}
        renderItem={({ item }) => {
          console.log(item);
          return <Text>{item.login}</Text>;
        }}
      />
    </Layout>
  );
};
