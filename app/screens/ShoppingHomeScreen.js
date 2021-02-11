import React from "react";
import styled from "styled-components/native";

// Data
import shopCategories from "../data/shopCategories";
import shopProducts from "../data/shopProducts";

// Components
import TopBar from "../components/organismes/TopBar";
import BecomeAMemberContainer from "../components/molecules/BecomeAMemberContainer";
import ProductsVerticalScrollSection from "../components/organismes/ProductsVerticalScrollSection";

// Styles
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;
const ScrollViewVertical = styled.ScrollView`
  margin-top: 2.5%;
`;

export default function ShoppingScreen({ navigation }) {
  return (
    <Container>
      <TopBar
        onPressSearch={() => alert("Press Search")}
        categoriesArray={shopCategories}
        onPressCategory={() => alert("Press category")}
      />
      <ScrollViewVertical>
        <BecomeAMemberContainer
          onPress={() => navigation.navigate("Membership")}
        />
        <ProductsVerticalScrollSection
          titleSection="On craque pour..."
          productsArray={shopProducts}
        />
        <ProductsVerticalScrollSection
          titleSection="Les produits populaires"
          productsArray={shopProducts}
        />
      </ScrollViewVertical>
    </Container>
  );
}