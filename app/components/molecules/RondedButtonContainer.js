import React from "react";
import styled from "styled-components/native";

// Component
import RondedButton from "../atoms/RondedButton";

// Style
const ButtonContainer = styled.View`
  flex-direction: row;
  width: 90px;
  justify-content: space-between;
  margin: 0 5%;
`;

export default function RondedButtonContainer({ onPressMenu, onPressSearch }) {
  return (
    <ButtonContainer>
      <RondedButton onPress={onPressMenu} ioniconName="grid-outline" />
      <RondedButton onPress={onPressSearch} ioniconName="search-outline" />
    </ButtonContainer>
  );
}
