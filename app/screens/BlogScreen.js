import React from "react";
import styled from "styled-components/native";

// Components
import TopBar from "../components/organismes/TopBar";

// Style
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

export default function BlogScreen() {
  return (
    <Container>
      <TopBar />
    </Container>
  );
}
