import React from "react";
import styled from "styled-components/native";

// Component
import RondedButton from "../components/atoms/RondedButton";

// Style
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

const Informations = styled.Text``;

export default function PostScreen({ route, navigation }) {
  const { category, illustrationSrc, title, publication } = route.params;
  return (
    <Container>
      <RondedButton
        onPress={() => navigation.goBack()}
        ioniconName="close-outline"
      />
      <Informations>category : {category}</Informations>
      <Informations>illustrationSrc : {illustrationSrc}</Informations>
      <Informations>title : {title}</Informations>
      <Informations>publication : {publication}</Informations>
    </Container>
  );
}
