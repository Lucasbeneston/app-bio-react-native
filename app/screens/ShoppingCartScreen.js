import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";
import colors from "../config/colors";

// CartContext
import { CartContext } from "../context/CartContext";

// Components
import RondedButton from "../components/atoms/RondedButton";
import EmptySectionSVG from "../components/atoms/EmptySectionSVG";

export default function ShoppingCartScreen({ navigation }) {
  const { cartItems, removeItem } = useContext(CartContext);
  console.log(cartItems);

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
        <EmptyCartContainer>
          <EmptySectionSVG />
          <EmptyCartTitle>Oups ! Votre panier est vide</EmptyCartTitle>
          <EmptyCartSubTitle>
            Remplissez-le de produits healthy
          </EmptyCartSubTitle>
        </EmptyCartContainer>
      ) : (
        <DetailsCart>
          {cartItems.map((item) => (
            <ItemContainer key={item.name}>
              <ItemIllustrationContainer>
                <ItemIllustration source={item.illustration} />
              </ItemIllustrationContainer>
              <ItemInformationsAndQuantityContainer>
                <ItemInformationsContainer>
                  <ItemDescriptionContainer>
                    <ItemBrand>{item.brand}</ItemBrand>
                    <ItemName numberOfLines={1}>{item.name}</ItemName>
                    <Text>{item.quantity}</Text>
                  </ItemDescriptionContainer>
                  <ItemPriceContainer>
                    <ItemPrice>{item.standardPrice}</ItemPrice>
                  </ItemPriceContainer>
                </ItemInformationsContainer>
                <ItemQuantityContainer>
                  <ChangeQuantityContainer>
                    <ChangeQuantityButton>
                      <Ionicons name="remove-outline" size={20} color="black" />
                    </ChangeQuantityButton>
                    <QuantityValueContainer>
                      <QuantityValue>1</QuantityValue>
                    </QuantityValueContainer>
                    <ChangeQuantityButton>
                      <Ionicons name="add-outline" size={20} color="black" />
                    </ChangeQuantityButton>
                  </ChangeQuantityContainer>
                  <RemoveItemContainer
                    onPress={() => {
                      removeItem(item);
                    }}
                  >
                    <Ionicons name="trash-outline" size={20} color="white" />
                  </RemoveItemContainer>
                </ItemQuantityContainer>
              </ItemInformationsAndQuantityContainer>
            </ItemContainer>
          ))}
        </DetailsCart>
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

// Empty cart container
const EmptyCartContainer = styled.View`
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

// DetailsCart
const DetailsCart = styled.View`
  padding: 5%;
`;

// Item container
const ItemContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`;
const ItemIllustrationContainer = styled.View`
  flex: 1;
  background-color: ${colors.BluePorcelain};
  border-radius: 10px;
`;
const ItemIllustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
  margin: 10px;
`;
const ItemInformationsAndQuantityContainer = styled.View`
  flex: 2;
`;

const ItemInformationsContainer = styled.View`
  flex-direction: row;
`;

const ItemDescriptionContainer = styled.View`
  padding: 10px;
  flex: 1;
`;

const ItemBrand = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
`;
const ItemName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const ItemPriceContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.BlueOxford};
`;

const ItemQuantityContainer = styled.View`
  padding: 10px 0 10px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ChangeQuantityContainer = styled.View`
  flex-direction: row;
`;

const ChangeQuantityButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${colors.GreyExtraLight};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
const QuantityValueContainer = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const QuantityValue = styled.Text`
  font-size: 16px;
`;

const RemoveItemContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${colors.BurningOrange};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
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
