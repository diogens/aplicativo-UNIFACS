import React from "react";
import { View, Button, FlatList } from "react-native";
import {
  Text,
  ProgressBar,
  Colors,
  ActivityIndicator,
} from "react-native-paper";
import { Modalize } from "react-native-modalize";
import { Layout, Card as Box, UserList } from "../../components";

import { Context } from "../../context";
import { api } from "../../services";

export const Git = () => {
  const modalizeRef = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [searchUsers, setSearchUsers] = React.useState("diogens");
  const [user, setUser] = React.useState();
  const [followers, setFollowers] = React.useState([]);
  const [name, setName] = React.useState("diogens");

  const [progressPercentage, setProgressPercentage] = React.useState(0);

  React.useEffect(() => {
    async function getUserGithub() {
      const response = await api.get(`/users/${searchUsers}/followers`);
      setFollowers(response.data);
    }
    getUserGithub();
  }, []);

  async function selectUser(user) {
    setLoading(true);
    modalizeRef.current?.open();
    try {
      const response = await api.get(`/users/${user}`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  return (
    <Layout title="Seguidores do GitHub">
      <FlatList
        data={followers}
        renderItem={({ item }) => {
          return (
            <UserList
              avatar={item?.avatar_url}
              title={item.login}
              subtitle={item.url}
              onPress={() => {
                selectUser(item.login);
              }}
            />
          );
        }}
      />
      <Modalize snapPoint={400} ref={modalizeRef} style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator
            size={80}
            style={{ marginTop: "50%" }}
            animating={true}
            color={Colors.deepOrangeA400}
          />
        ) : (
          <Box
            style={{ flex: 1 }}
            avatar={user?.avatar_url}
            title={user?.name}
            subtitle={user?.login}
            bio={user?.bio}
            html_url={user?.html_url}
            location={user?.location}
            public_repos={user?.public_repos}
            following={user?.following}
            followers={user?.followers}
          />
        )}
      </Modalize>
    </Layout>
  );
};
