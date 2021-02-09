import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

// Data
import shopCategories from "../data/shopCategories";
import shopProducts from "../data/shopProducts";

// Components
import TopBar from "../components/organismes/TopBar";
import BecomeAMemberContainer from "../components/molecules/BecomeAMemberContainer";
import Product from "../components/organismes/Product";

// Styles
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;
const ScrollViewVertical = styled.ScrollView`
  margin-top: 2.5%;
`;

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
        <View>
          <InLoveWithTitle>On craque pour...</InLoveWithTitle>
          <ScrollViewHorizontal
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {shopProducts.map((product) => (
              <Product
                key={product.name}
                brand={product.brand}
                name={product.name}
                quantity={product.quantity}
                standardPrice={product.standardPrice}
                memberPrice={product.standardPrice}
              />
            ))}
          </ScrollViewHorizontal>
        </View>
      </ScrollViewVertical>
    </Container>
  );
}
