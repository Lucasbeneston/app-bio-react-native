import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

import RondedButton from "../components/atoms/RondedButton";

export default function ShoppingProductCategorie({ route, navigation }) {
  const { selectedCategorie } = route.params;

  return (
    <SafeAreaView>
      <Header>
        <RondedButton
          ioniconName="chevron-back-outline"
          onPress={() => navigation.goBack()}
        />
        <CategoryTitleContainer>
          <CategoryTitle>{selectedCategorie}</CategoryTitle>
        </CategoryTitleContainer>
      </Header>
    </SafeAreaView>
  );
}

// Styles
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5%;
`;

const CategoryTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: -40px;
`;
