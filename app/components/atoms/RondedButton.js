import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RondedButton({ onPress, ioniconName, marginLeft }) {
  return (
    <Button marginLeft={marginLeft} onPress={onPress}>
      <Ionicons name={ioniconName} size={20} color="white" />
    </Button>
  );
}

// Styled
const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.BlueKazidomi};
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || "0"};
`;
