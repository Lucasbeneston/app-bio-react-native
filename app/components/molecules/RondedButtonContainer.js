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

export default function RondedButtonContainer() {
  return (
    <ButtonContainer>
      <RondedButton
        onPress={() => alert("Press menu")}
        ioniconName="grid-outline"
      />
      <RondedButton
        onPress={() => alert("Press search")}
        ioniconName="search-outline"
      />
    </ButtonContainer>
  );
}
