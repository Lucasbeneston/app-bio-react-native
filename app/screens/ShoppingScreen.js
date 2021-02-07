import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function ShoppingScreen() {
  return (
    <Container>
      <Text>ShoppingScreen</Text>
    </Container>
  );
}
