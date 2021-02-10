import React from "react";
import styled from "styled-components/native";

// Component
import Product from "../../components/molecules/Product";

// Styles
const Container = styled.View`
  margin: 15px 0;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-left: 5%;
`;
const ScrollViewHorizontal = styled.ScrollView`
  padding-left: 5%;
`;

export default function ProductsVerticalScrollSection({
  titleSection,
  productsArray,
}) {
  return (
    <Container>
      <Title>{titleSection}</Title>
      <ScrollViewHorizontal
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {productsArray
          .map((product) => (
            <Product
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
      </ScrollViewHorizontal>
    </Container>
  );
}
