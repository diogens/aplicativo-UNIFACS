import React from "react";
import { View, Text, Button, FlatList } from "react-native";

import { apiHero } from "../../services";
import { Layout, Card as Box, UserList } from "../../components";

export const Herois = () => {
  const [hero, setHero] = React.useState([]);

  React.useEffect(() => {
    async function getHero() {

      const res = await apiHero.get("/70");
      setHero(res.data);
    }
    getHero();
  }, [])

  return (
    <Layout title="Lista de Super Heróis">
      <FlatList
        data={hero}
        renderItem={(item) => {
          console.log(item)
          return (
            <Text>123</Text>
          );
        }}
      />
    </Layout>
  );
}
