import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import List from "../components/List";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <Featured />
      <List sectionTitle="Continue to Watch" />
      <List sectionTitle="Popular on Netflix" />
      <List sectionTitle="Popular in your Country" />
      <List sectionTitle="Finished This Weekend" />
      <p style={{ textAlign: "center", margin: "10px" }}>
        Copywrite ©2022 | Made by Abdul Muizz
      </p>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  overflow: hidden;
`;
