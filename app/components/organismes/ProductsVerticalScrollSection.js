import React from "react";
import styled from "styled-components/native";

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
  Children,
  titleSection,
}) {
  return (
    <Container>
      <Title>{titleSection}</Title>
      <ScrollViewHorizontal
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Children}
      </ScrollViewHorizontal>
    </Container>
  );
}
