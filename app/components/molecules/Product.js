import React, { useContext } from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";
import { CartContext } from "../../context/CartContext";

export default function Product({
  isInCategoryScreen,
  onPress,
  illustration,
  brand,
  name,
  quantity,
  standardPrice,
  memberPrice,
}) {
  const { addItem } = useContext(CartContext);

  return (
    <Container
      activeOpacity={0.8}
      onPress={onPress}
      isInCategoryScreen={isInCategoryScreen}
    >
      <IllustrationContainer>
        <ProductIllustration source={illustration} />
      </IllustrationContainer>
      <InformationContainer>
        <Brand>{brand}</Brand>
        <Name numberOfLines={2}>{name}</Name>
        <Quantity numberOfLines={1}>{quantity}</Quantity>
        <PriceButtonAddContainer>
          <PriceContainer>
            <Price>
              <TypePrice>Standard</TypePrice>
              <ValuePrice>{standardPrice}</ValuePrice>
            </Price>
            <Price>
              <TypePrice member>Membre</TypePrice>
              <ValuePrice member>{memberPrice}</ValuePrice>
            </Price>
          </PriceContainer>
          <ButtonAdd
            onPress={() => {
              addItem({
                illustration,
                brand,
                name,
                quantity,
                standardPrice,
                memberPrice,
              });
            }}
          >
            <ButtonAddTitle>Ajouter</ButtonAddTitle>
          </ButtonAdd>
        </PriceButtonAddContainer>
      </InformationContainer>
    </Container>
  );
}

// Styles
const Container = styled.TouchableOpacity`
  height: 350px;
  width: ${(props) => (props.isInCategoryScreen ? "45%" : "175px")};
  border-radius: 10px;
  background-color: ${colors.BluePorcelain};
  ${(props) =>
    props.isInCategoryScreen ? "margin: 0 2.5% 5%" : "margin-right: 15px"};
`;
const IllustrationContainer = styled.View`
  width: 175px;
  height: 150px;
  padding: 15px;
`;
const ProductIllustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
`;
const InformationContainer = styled.View`
  padding: 0 15px;
  flex: 1;
`;
const Brand = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  color: ${colors.GreyDark};
  margin-bottom: 5px;
`;
const Name = styled.Text`
  text-align: center;
  font-weight: 600;
`;
const Quantity = styled.Text`
  text-align: center;
  font-weight: 400;
  color: ${colors.GreyDark};
`;
const PriceButtonAddContainer = styled.View`
  height: 95px;
  width: 100%;
  position: absolute;
  bottom: 15px;
  left: 15px;
  justify-content: space-between;
`;
const PriceContainer = styled.View`
  height: 45px;
  justify-content: space-between;
`;
const Price = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TypePrice = styled.Text`
  font-size: ${(props) => (props.member ? "12px" : "14px")};
  font-weight: 400;
`;
const ValuePrice = styled.Text`
  font-size: ${(props) => (props.member ? "14px" : "16px")};
  font-weight: 600;
  color: ${(props) => (props.member ? colors.BurningOrange : "black")};
`;
const ButtonAdd = styled.TouchableOpacity`
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.BlueKazidomi};
  align-items: center;
  justify-content: center;
`;
const ButtonAddTitle = styled.Text`
  font-weight: 600;
  color: white;
`;
