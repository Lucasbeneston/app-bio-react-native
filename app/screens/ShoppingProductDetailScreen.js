import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

// Components
import RondedButton from "../components/atoms/RondedButton";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.SafeAreaView``;

const IllustrationContainer = styled.View`
  width: 100%;
  height: 250px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.GreyExtraLight};
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

// Bottom
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
  background-color: white;
  border-radius: 30px;
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

// Informations
const InformationContainer = styled.View`
  padding: 5% 5% 150px;
`;
const Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const Brand = styled.Text`
  text-transform: uppercase;
  color: ${colors.GreyDark};
  font-weight: 500;
`;
const Quantity = styled.Text`
  font-size: 18px;
  color: ${colors.GreyDark};
`;
const MemberPrice = styled.Text``;
const StandardPrice = styled.Text``;

const InformationsTitle = styled.Text`
  font-size: 18;
  font-weight: 600;
  margin-top: 20px;
`;
const InformationsDetails = styled.Text`
  margin-top: 5px;
`;

export default function ShoppingProductDetailScreen({ route, navigation }) {
  const {
    illustrationSrc,
    brand,
    name,
    quantity,
    standardPrice,
    memberPrice,
    ingredients,
    use,
    whyYouWillLoveIt,
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
      </Container>
      <ScrollView>
        <InformationContainer>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Quantity>{quantity}</Quantity>
          <StandardPrice>{standardPrice}</StandardPrice>
          <MemberPrice>{memberPrice}</MemberPrice>
          <InformationsTitle>Ingrédients/Composition</InformationsTitle>
          {ingredients.map((ingredient, index) => (
            <InformationsDetails key={index}>
              - {ingredient}
            </InformationsDetails>
          ))}
          <InformationsTitle>Utilisation</InformationsTitle>
          <InformationsDetails>{use}</InformationsDetails>
          <InformationsTitle>Pourquoi vous allez adorer</InformationsTitle>
          <InformationsDetails>{whyYouWillLoveIt}</InformationsDetails>
        </InformationContainer>
      </ScrollView>
      <AddAndQuantityContainer>
        <InputNumberContainer>
          <InputNumberLess activeOpacity={0.7}>
            <SignMoreLess>-</SignMoreLess>
          </InputNumberLess>
          <InputNumberMore activeOpacity={0.7}>
            <SignMoreLess>+</SignMoreLess>
          </InputNumberMore>
          <InputNumberValue>
            <TextValue>1</TextValue>
          </InputNumberValue>
        </InputNumberContainer>
        <AddToCartButton activeOpacity={0.7}>
          <AddToCartTitle>Ajouter au panier</AddToCartTitle>
        </AddToCartButton>
      </AddAndQuantityContainer>
    </>
  );
}
