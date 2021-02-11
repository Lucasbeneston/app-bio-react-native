import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import colors from "../config/colors";

// Components
import RondedButton from "../components/atoms/RondedButton";

const Container = styled.SafeAreaView``;

const IllustrationContainer = styled.View`
  width: 100%;
  height: 300px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.GreyLight};
  padding: 20px;
`;

const ButtonsContainer = styled.View`
  position: absolute;
  width: 100%;
  margin: 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;

const Illustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
`;

const AddAndQuantityContainer = styled.View`
  width: 90%;
  margin: 10% 5%;
  height: 60px;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
`;

const InputNumberContainer = styled.View`
  align-self: flex-start;
  flex-direction: row;
`;

const InputNumberValue = styled.View`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 30px;
  position: absolute;
  left: 45px;
  top: 5px;
  justify-content: center;
  align-items: center;
  border-width: 5px;
  border-color: ${colors.BluePorcelain};
`;

const TextValue = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.BlueOxford};
`;

const InputNumberLess = styled.TouchableOpacity`
  width: 70px;
  height: 60px;
  background-color: ${colors.GreyLight};
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  justify-content: center;
  padding-left: 17px;
`;

const InputNumberMore = styled.TouchableOpacity`
  width: 70px;
  height: 60px;
  background-color: ${colors.GreyLight};
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  justify-content: center;
  padding-left: 40px;
`;

const SignMoreLess = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const AddToCartButton = styled.TouchableOpacity`
  height: 60px;
  padding: 0 25px;
  background-color: ${colors.BlueKazidomi};
  align-self: flex-start;
  justify-content: center;
  border-radius: 30px;
`;

const AddToCartTitle = styled.Text`
  text-transform: uppercase;
  color: white;
  font-weight: 600;
`;

export default function ShoppingProductDetailScreen({ route, navigation }) {
  const {
    illustrationSrc,
    brand,
    name,
    quantity,
    standardPrice,
    memberPrice,
  } = route.params;

  return (
    <>
      <Container>
        <IllustrationContainer>
          <ButtonsContainer>
            <RondedButton
              onPress={() => navigation.goBack()}
              ioniconName="close-outline"
            />
            <RondedButton
              onPress={() => alert("Press like")}
              ioniconName="heart-outline"
            />
          </ButtonsContainer>
          <Illustration source={illustrationSrc} />
        </IllustrationContainer>
        <Text>{brand}</Text>
        <Text>{name}</Text>
        <Text>{quantity}</Text>
        <Text>{standardPrice}</Text>
        <Text>{memberPrice}</Text>
      </Container>
      <AddAndQuantityContainer>
        <InputNumberContainer>
          <InputNumberLess>
            <SignMoreLess>-</SignMoreLess>
          </InputNumberLess>
          <InputNumberMore>
            <SignMoreLess>+</SignMoreLess>
          </InputNumberMore>
          <InputNumberValue>
            <TextValue>1</TextValue>
          </InputNumberValue>
        </InputNumberContainer>
        <AddToCartButton>
          <AddToCartTitle>Ajouter au panier</AddToCartTitle>
        </AddToCartButton>
      </AddAndQuantityContainer>
    </>
  );
}
