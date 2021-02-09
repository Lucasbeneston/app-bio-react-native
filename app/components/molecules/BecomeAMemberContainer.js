import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

// Styles
const Container = styled.View`
  background-color: ${colors.GreyExtraLight};
  border-radius: 20px;
  padding: 20px;
  margin: 2.5% 5%;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

const DottedLine = styled.View`
  border-bottom-color: ${colors.GreyLight};
  border-bottom-width: 1px;
  margin: 10px 0;
`;

const Informations = styled.Text`
  font-weight: 500;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.BlueKazidomi};
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonTitle = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`;

export default function BecomeAMemberContainer({ onPress }) {
  return (
    <Container>
      <Title>Vivre sainement n'a jamais été aussi simple</Title>
      <DottedLine />
      <Informations>
        Vos produits sains et biologiques préférés jusqu'à 50% moins chers
        livrés chez vous.
      </Informations>
      <Button onPress={onPress}>
        <ButtonTitle>Devenir membre</ButtonTitle>
      </Button>
    </Container>
  );
}
