import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";

// Data
import shopCategories from "../data/shopCategories";

// Components
import TopBar from "../components/organismes/TopBar";
import BecomeAMemberContainer from "../components/molecules/BecomeAMemberContainer";

// Styles
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;
const ScrollViewVertical = styled.ScrollView`
  margin-top: 2.5%;
`;

const InLoveWithContainer = styled.View``;

const InLoveWithTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 20px;
  margin-left: 5%;
`;

const ScrollViewHorizontal = styled.ScrollView`
  padding-left: 5%;
`;

// Product item
const Products = styled.TouchableOpacity`
  height: 350px;
  width: 175px;
  border-radius: 10px;
  background-color: ${colors.BluePorcelain};
  margin-right: 15px;
`;

const ProductIllustrationContainer = styled.View`
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

const ProductInformationContainer = styled.View`
  padding: 0 15px;
  flex: 1;
`;

const ProductBrand = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  color: ${colors.GreyDark};
  margin-bottom: 5px;
`;

const ProductName = styled.Text`
  text-align: center;
  font-weight: 600;
`;

const ProductQuantity = styled.Text`
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
  color: ${(props) => (props.member ? colors.BlueKazidomi : "black")};
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

export default function ShoppingScreen({ navigation }) {
  return (
    <Container>
      <TopBar
        onPressMenu={() => alert("Press Menu")}
        onPressSearch={() => alert("Press Search")}
        categoriesArray={shopCategories}
        onPressCategory={() => alert("Press category")}
      />
      <ScrollViewVertical>
        <BecomeAMemberContainer
          onPress={() => navigation.navigate("Membership")}
        />
        <InLoveWithContainer>
          <InLoveWithTitle>On craque pour...</InLoveWithTitle>
          <ScrollViewHorizontal
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Products>
              <ProductIllustrationContainer>
                <ProductIllustration
                  source={require("../assets/products/creme-de-coco.png")}
                />
              </ProductIllustrationContainer>
              <ProductInformationContainer>
                <ProductBrand>Kazidomi</ProductBrand>
                <ProductName numberOfLines={2}>Crème de coco Bio</ProductName>
                <ProductQuantity numberOfLines={1}>400 ml</ProductQuantity>
                <PriceButtonAddContainer>
                  <PriceContainer>
                    <Price>
                      <TypePrice>Standard</TypePrice>
                      <ValuePrice>3,28€</ValuePrice>
                    </Price>
                    <Price>
                      <TypePrice member>Membre</TypePrice>
                      <ValuePrice member>2.30€</ValuePrice>
                    </Price>
                  </PriceContainer>
                  <ButtonAdd>
                    <ButtonAddTitle>Ajouter</ButtonAddTitle>
                  </ButtonAdd>
                </PriceButtonAddContainer>
              </ProductInformationContainer>
            </Products>

            <Products>
              <ProductIllustrationContainer>
                <ProductIllustration
                  source={require("../assets/products/graines-de-courge-au-herbes-de-provence.png")}
                />
              </ProductIllustrationContainer>
              <ProductInformationContainer>
                <ProductBrand>Kazidomi</ProductBrand>
                <ProductName numberOfLines={2}>
                  Graines de courge aux herbes de Provence en vrac Bio
                </ProductName>
                <ProductQuantity numberOfLines={1}>250 g</ProductQuantity>
                <PriceButtonAddContainer>
                  <PriceContainer>
                    <Price>
                      <TypePrice>Standard</TypePrice>
                      <ValuePrice>3,28€</ValuePrice>
                    </Price>
                    <Price>
                      <TypePrice member>Membre</TypePrice>
                      <ValuePrice member>2.30€</ValuePrice>
                    </Price>
                  </PriceContainer>
                  <ButtonAdd>
                    <ButtonAddTitle>Ajouter</ButtonAddTitle>
                  </ButtonAdd>
                </PriceButtonAddContainer>
              </ProductInformationContainer>
            </Products>

            <Products>
              <ProductIllustrationContainer>
                <ProductIllustration
                  source={require("../assets/products/cafe-detox-honduras-bio-moulu-sachet.png")}
                />
              </ProductIllustrationContainer>
              <ProductInformationContainer>
                <ProductBrand>Kafé naka</ProductBrand>
                <ProductName numberOfLines={2}>
                  Café Détox Honduras Moulu Bio
                </ProductName>
                <ProductQuantity numberOfLines={1}>250 g</ProductQuantity>
              </ProductInformationContainer>
            </Products>

            <Products>
              <ProductIllustrationContainer>
                <ProductIllustration
                  source={require("../assets/products/perles-en-ceramique-carafe-15-pieces.png")}
                />
              </ProductIllustrationContainer>
              <ProductInformationContainer>
                <ProductBrand>Les verts moutons</ProductBrand>
                <ProductName numberOfLines={2}>
                  Perles en céramique Carafe
                </ProductName>
                <ProductQuantity numberOfLines={1}>15 pièces</ProductQuantity>
              </ProductInformationContainer>
            </Products>
          </ScrollViewHorizontal>
        </InLoveWithContainer>
      </ScrollViewVertical>
    </Container>
  );
}
