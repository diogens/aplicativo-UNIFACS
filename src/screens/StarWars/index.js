import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Container, Content, Accordion, Left } from "native-base";
import { apiSw } from "../../services";
import { Layout, Card as Box, UserList } from "../../components";
import { Context } from "../../context";

const toUpperFirst = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const Starwars = () => {
  const { isDark } = React.useContext(Context);
  const [sw, setSw] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  React.useEffect(() => {
    async function getSw() {
      const res = await apiSw.get(`/people/?page=${pageNum}`);
      setSw(res.data.results);
    }
    getSw();
  }, []);

  async function getNextPage() {
    const res = await apiSw.get(`/people/?page=${pageNum}`);
    if (pageNum < 10) setPageNum(pageNum + 1);

    setSw(res.data.results);
  }

  async function getPreviousPage() {
    const res = await apiSw.get(`/people/?page=${pageNum}`);
    if (pageNum > 1) setPageNum(pageNum - 1);

    setSw(res.data.results);
  }

  return (
    <Layout title="Lista de Personagens do StarWars">
      <Container style={{ width: "100%" }}>
        <Content padder>
          <Accordion
            style={
              isDark ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }
            }
            dataArray={sw}
            renderHeader={(item) => {
              return (
                <UserList
                  title={item.name}
                  subtitle={
                    item.birth_year == "unknown"
                      ? "Ano de nascimento desconhecido"
                      : "Ano de nascimento: " + item.birth_year
                  }
                  avatar="https://icons-for-free.com/iconfiles/png/512/r2d2+robot+starwars+icon-1320166698566079188.png"
                />
              );
            }}
            renderContent={(item) => {
              return (
                <View style={style.userContainer}>
                  <Text>Eye color: {toUpperFirst(item.eye_color)}</Text>
                  <Text>Gender: {toUpperFirst(item.gender)}</Text>
                  <Text>Height: {toUpperFirst(item.height)} cm</Text>
                  <Text>Hair color: {toUpperFirst(item.hair_color)}</Text>
                  <Text>
                    Weight:{" "}
                    {item.mass != "unknown"
                      ? item.mass + " kg"
                      : toUpperFirst(item.mass)}
                  </Text>
                </View>
              );
            }}
            expanded={0}
          />
          <View style={style.stickToTheRight}>
            <Text>Página {pageNum}</Text>
          </View>
          <View style={style.pageFilter}>
            <Button
              mode="outlined"
              onPress={() => {
                getPreviousPage();
              }}
            >
              Previous
            </Button>
            <Button
              mode="contained"
              icon="star"
              onPress={() => {
                getNextPage();
              }}
            >
              Next
            </Button>
          </View>
        </Content>
      </Container>
    </Layout>
  );
};

const style = StyleSheet.create({
  userContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "14.5%",
    marginLeft: 20,
    marginRight: 20,

    backgroundColor: "#ffa00080",
  },
  pageFilter: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  stickToTheRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
  },
});
