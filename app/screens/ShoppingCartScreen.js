import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import colors from "../config/colors";

// CartContext
import { CartContext } from "../context/CartContext";

// Components
import RondedButton from "../components/atoms/RondedButton";
import CartItemList from "../components/organismes/CartItemList";
import CartEmptyInformations from "../components/molecules/CartEmptyInformations";

export default function ShoppingCartScreen({ navigation }) {
  const { cartItems } = useContext(CartContext);

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

      {Object.keys(cartItems).length === 0 ? (
        <CartEmptyInformations />
      ) : (
        <CartItemList contextData={cartItems} />
      )}
      <BottomContainer>
        {Object.keys(cartItems).length === 0 ? (
          <Button
            activeOpacity={0.7}
            onPress={() => navigation.navigate("ShoppingHomeScreen")}
          >
            <ButtonTitle>Je commence mon shopping</ButtonTitle>
          </Button>
        ) : (
          <Button
            activeOpacity={0.7}
            onPress={() => {
              alert("Paiement non disponible");
            }}
          >
            <ButtonTitle>Valider mon panier</ButtonTitle>
          </Button>
        )}
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
