import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import colors from "../config/colors";

const Container = styled.SafeAreaView``;

const IllustrationContainer = styled.View`
  width: 100%;
  height: 300px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.GreyLight};
  padding: 20px;
`;

const Illustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
`;

export default function ShoppingProductDetailScreen({ route }) {
  const {
    illustrationSrc,
    brand,
    name,
    quantity,
    standardPrice,
    memberPrice,
  } = route.params;

  return (
    <Container>
      <IllustrationContainer>
        <Illustration source={illustrationSrc} />
      </IllustrationContainer>
      <Text>{brand}</Text>
      <Text>{name}</Text>
      <Text>{quantity}</Text>
      <Text>{standardPrice}</Text>
      <Text>{memberPrice}</Text>
    </Container>
  );
}
