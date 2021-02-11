import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

// Component
import RondedButton from "../atoms/RondedButton";

// Style
const ButtonContainer = styled.View`
  flex-direction: row;
  margin: 0 5%;
  ${(props) => (props.open ? "width: 90%;" : "align-self: flex-start;")};
`;

const InputSearch = styled.TextInput`
  height: 40px;
  ${(props) => (props.open ? "flex:1" : "width: 40px")};
  margin-left: -40px;
  border-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: ${colors.BlueKazidomi};
  border-width: 2px;
  z-index: -1;
  padding-left: ${(props) => (props.open ? "45px" : "0px")};
`;

export default function RondedButtonContainer({
  open,
  onPressMenu,
  onPressSearch,
  menuIconName,
}) {
  return (
    <ButtonContainer open={open}>
      <RondedButton onPress={onPressMenu} ioniconName={menuIconName} />
      <RondedButton
        marginLeft="10px"
        onPress={onPressSearch}
        ioniconName="search-outline"
      />
      <InputSearch open={open} placeholder='Rechercher "kombucha"' />
    </ButtonContainer>
  );
}
