import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";

// Data
import shopProducts from "../data/shopProducts";

// Components
import RondedButton from "../components/atoms/RondedButton";
import Product from "../components/molecules/Product";

export default function ShoppingProductCategorie({ route, navigation }) {
  const { selectedCategorie } = route.params;

  return (
    <SafeAreaView>
      <Header>
        <RondedButton
          ioniconName="chevron-back-outline"
          onPress={() => navigation.goBack()}
        />
        <CategoryTitleContainer>
          <CategoryTitle>{selectedCategorie}</CategoryTitle>
        </CategoryTitleContainer>
      </Header>
      <ScrollView>
        <ProductsContainer>
          {shopProducts
            .map((product) => (
              <Product
                isInCategoryScreen={true}
                onPress={() =>
                  navigation.navigate("ShoppingProductDetailScreen", {
                    illustrationSrc: product.illustration,
                    brand: product.brand,
                    name: product.name,
                    quantity: product.quantity,
                    standardPrice: product.standardPrice,
                    memberPrice: product.memberPrice,
                    ingredients: product.ingredients,
                    use: product.use,
                    whyYouWillLoveIt: product.whyYouWillLoveIt,
                  })
                }
                key={product.name}
                illustration={product.illustration}
                brand={product.brand}
                name={product.name}
                quantity={product.quantity}
                standardPrice={product.standardPrice}
                memberPrice={product.memberPrice}
              />
            ))
            .slice(0, 6)}
        </ProductsContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5%;
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

const ProductsContainer = styled.View`
  flex-wrap: wrap;
  padding: 5% 2.5%;
  flex-direction: row;
  justify-content: space-evenly;
`;
