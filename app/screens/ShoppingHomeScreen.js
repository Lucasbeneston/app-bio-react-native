import React from "react";
import styled from "styled-components/native";

// Data
import shopCategories from "../data/shopCategories";
import shopProducts from "../data/shopProducts";

// Components
import TopBar from "../components/organismes/TopBar";
import BecomeAMemberContainer from "../components/molecules/BecomeAMemberContainer";
import ProductsVerticalScrollSection from "../components/organismes/ProductsVerticalScrollSection";
import Product from "../components/molecules/Product";

export default function ShoppingScreen({ navigation }) {
  return (
    <Container>
      <TopBar
        isShoopingScreen={true}
        onPressSearch={() => alert("Press Search")}
        arrayCategories={shopCategories}
      />
      <ScrollViewVertical>
        <BecomeAMemberContainer
          onPress={() => navigation.navigate("Membership")}
        />
        <ProductsVerticalScrollSection
          titleSection="On craque pour..."
          productsArray={shopProducts}
          Children={shopProducts
            .filter((item) => item.weLoveIt)
            .map((product) => (
              <Product
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
        />
        <ProductsVerticalScrollSection
          titleSection="Les produits populaires"
          productsArray={shopProducts}
          Children={shopProducts
            .filter((item) => item.popular)
            .map((product) => (
              <Product
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
        />
      </ScrollViewVertical>
    </Container>
  );
}

// Styles
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;
const ScrollViewVertical = styled.ScrollView`
  margin-top: 2.5%;
`;
