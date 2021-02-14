import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";

// Components
import CarouselCards from "../components/organismes/CarouselCards";
import SubscribeChoicesContainer from "../components/molecules/SubscribeChoicesContainer";

export default function MembershipScreen() {
  return (
    <Container>
      <ContainerTitle>
        <Title>L'adhésion Kazidomi</Title>
      </ContainerTitle>
      <SliderContainer>
        <CarouselCards />
      </SliderContainer>
      <SubscribeContainer>
        <SubscribeChoicesContainer />
        <BottomText>
          L'adhésion dure <BoldText>12 mois</BoldText> et se{" "}
          <BoldText>renouvelle automatiquement</BoldText>. Vous pouvez annuler
          votre adhésion au bout d'un an.
        </BottomText>
        <SubscribeButton>
          <SubscribeButtonTitle>Ajouter au panier</SubscribeButtonTitle>
        </SubscribeButton>
      </SubscribeContainer>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

// Header title
const ContainerTitle = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: ${colors.BlueKazidomiLight};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

// Slider
const SliderContainer = styled.View`
  background-color: ${colors.BlueKazidomiLight};
  flex: 1;
  padding: 7.5% 0;
  align-items: center;
`;

// SubscribeContainer
const SubscribeContainer = styled.View`
  padding: 10% 5%;
`;

const BottomText = styled.Text`
  text-align: center;
  font-size: 12px;
`;

const BoldText = styled.Text`
  font-weight: 600;
`;

// Subscribe button
const SubscribeButton = styled.View`
  height: 60px;
  background-color: ${colors.BlueKazidomi};
  border-radius: 30px;
  margin: 20px 5% 0;
  align-items: center;
  justify-content: center;
`;
const SubscribeButtonTitle = styled.Text`
  text-transform: uppercase;
  color: white;
  font-weight: 600;
`;
