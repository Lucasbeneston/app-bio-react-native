import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

export default function SubscribeChoicesContainer() {
  return (
    <Container>
      <ChoiceContainer selected>
        <SubTitle>paiement</SubTitle>
        <Title>annuel</Title>
        <PriceYear member>80€/an</PriceYear>
        <PriceMonth>6,67€/mois</PriceMonth>
      </ChoiceContainer>
      <ChoiceContainer>
        <SubTitle>paiement</SubTitle>
        <Title>mensuel</Title>
        <PriceYear>120€/an</PriceYear>
        <PriceMonth>10€/mois</PriceMonth>
      </ChoiceContainer>
    </Container>
  );
}

// Styles
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ChoiceContainer = styled.View`
  padding: 30px 20px;
  width: 47.5%;
  background-color: ${colors.GreyExtraLight};
  border-radius: 10px;
  align-items: center;
  border: ${(props) =>
    props.selected ? `4px solid ${colors.GreyLight}` : "0px"};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: -5px;
  color: ${colors.GreyDark};
`;
const PriceYear = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.member ? colors.BurningOrange : colors.BlueKazidomi};
`;
const PriceMonth = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;
