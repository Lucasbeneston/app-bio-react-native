import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import colors from "../config/colors";

// Components
import RondedButton from "../components/atoms/RondedButton";

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

  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <SafeAreaView>
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
        <AllPriceContainer>
          <StandardPriceContainer>
            <StandardPrice>{standardPrice}</StandardPrice>
            <PriceText>Standard</PriceText>
          </StandardPriceContainer>
          <MemberPriceContainer>
            <MemberPrice>{memberPrice}</MemberPrice>
            <PriceText>Membres</PriceText>
          </MemberPriceContainer>
        </AllPriceContainer>
      </SafeAreaView>
      <ScrollViewInformation>
        <InformationContainer>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Quantity>{quantity}</Quantity>
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
      </ScrollViewInformation>
      <AddAndQuantityContainer>
        <InputNumberContainer>
          <InputNumberLess
            activeOpacity={0.7}
            onPress={() => {
              if (productQuantity > 1) {
                setProductQuantity(productQuantity - 1);
              }
            }}
          >
            <SignMoreLess>-</SignMoreLess>
          </InputNumberLess>
          <InputNumberMore
            activeOpacity={0.7}
            onPress={() => {
              if (productQuantity < 100) {
                setProductQuantity(productQuantity + 1);
              }
            }}
          >
            <SignMoreLess>+</SignMoreLess>
          </InputNumberMore>
          <InputNumberValue>
            <TextValue>{productQuantity}</TextValue>
          </InputNumberValue>
        </InputNumberContainer>
        <AddToCartButton activeOpacity={0.8}>
          <AddToCartTitle>Ajouter au panier</AddToCartTitle>
        </AddToCartButton>
      </AddAndQuantityContainer>
    </>
  );
}

// Styles
const IllustrationContainer = styled.View`
  width: 100%;
  height: 300px;
  border-bottom-width: 6px;
  border-bottom-color: ${colors.GreyExtraLight};
`;
const ButtonsContainer = styled.View`
  position: absolute;
  width: 90%;
  margin: 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;
const Illustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
  margin: 20px 20px 30px;
`;
const AllPriceContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-self: flex-start;
  padding: 0 10px;
  bottom: -27px;
  width: 100%;
  justify-content: center;
`;
const StandardPriceContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 20px 0 35px;
  background-color: ${colors.GreyExtraLight};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;
const MemberPriceContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 35px 0 20px;
  background-color: ${colors.GreyExtraLight};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const StandardPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const MemberPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.BurningOrange};
`;
const PriceText = styled.Text`
  font-size: 12px;
  color: ${colors.GreyDark};
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
const ScrollViewInformation = styled.ScrollView`
  z-index: -1;
`;
const InformationContainer = styled.View`
  padding: 40px 5% 150px;
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
const InformationsTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;
const InformationsDetails = styled.Text`
  margin-top: 5px;
`;
