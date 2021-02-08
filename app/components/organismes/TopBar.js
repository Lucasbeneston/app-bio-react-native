import React from "react";
import styled from "styled-components/native";

// Components
import CategoryScrollContainer from "../molecules/CategoryScrollContainer";
import RondedButtonContainer from "../molecules/RondedButtonContainer";

// Style
const TopBarContainer = styled.View`
  flex-direction: row;
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      <RondedButtonContainer />
      <CategoryScrollContainer />
    </TopBarContainer>
  );
}
