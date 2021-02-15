import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import colors from "../config/colors";

// Components
import RondedButton from "../components/atoms/RondedButton";
import EmptySectionSVG from "../components/atoms/EmptySectionSVG";

export default function ShoppingCartScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <RondedButton
          ioniconName="chevron-back-outline"
          onPress={() => navigation.goBack()}
        />
        <CategoryTitleContainer>
          <CategoryTitle>Votre panier</CategoryTitle>
        </CategoryTitleContainer>
      </Header>
      <ItemsContainer>
        <EmptySectionSVG />
        <EmptyCartTitle>Oups ! Votre panier est vide</EmptyCartTitle>
        <EmptyCartSubTitle>Remplissez-le de produits healthy</EmptyCartSubTitle>
      </ItemsContainer>
      <BottomContainer>
        <Button
          activeOpacity={0.7}
          onPress={() => navigation.navigate("ShoppingHomeScreen")}
        >
          <ButtonTitle>Je commence mon shopping</ButtonTitle>
        </Button>
      </BottomContainer>
    </SafeAreaView>
  );
}

// Styles
// Header container
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5% 10px;
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

// Items container
const ItemsContainer = styled.View`
  flex: 1;
  padding: 5%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
const EmptyCartTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;
const EmptyCartSubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
`;

// Bottom container
const BottomContainer = styled.View`
  position: absolute;
  bottom: 5%;
  width: 100%;
`;
const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: ${colors.BlueKazidomi};
  border-radius: 30px;
  margin: 0 10%;
  align-items: center;
  justify-content: center;
`;
const ButtonTitle = styled.Text`
  text-transform: uppercase;
  color: white;
  font-weight: 600;
`;
