import React from "react";
import styled from "styled-components";

import EmptySectionSVG from "../../components/atoms/EmptySectionSVG";

export default function CartEmptyInformations() {
  return (
    <Container>
      <EmptySectionSVG />
      <Title>Oups ! Votre panier est vide</Title>
      <SubTitle>Remplissez-le de produits healthy</SubTitle>
    </Container>
  );
}

// Styles
const Container = styled.View`
  flex: 1;
  padding: 5%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;
const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
`;
