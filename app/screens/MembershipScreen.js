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
        <SubscribeButton activeOpacity={0.7}>
          <SubscribeButtonTitle>Ajouter au panier</SubscribeButtonTitle>
        </SubscribeButton>
      </SubscribeContainer>
    </Container>
  );
}

// Styles
const Container = styled.View`
  height: 100%;
  width: 100%;
`;
const ContainerTitle = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: ${colors.BlueKazidomi};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: ${colors.OffWhite};
`;
const SliderContainer = styled.View`
  background-color: ${colors.BlueKazidomi};
  flex: 1;
  padding: 7.5% 0;
  align-items: center;
`;
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
const SubscribeButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${colors.BlueOxford};
  border-radius: 30px;
  margin: 20px 5% 0;
  align-items: center;
  justify-content: center;
`;
const SubscribeButtonTitle = styled.Text`
  text-transform: uppercase;
  color: ${colors.OffWhite};
  font-weight: 600;
`;
