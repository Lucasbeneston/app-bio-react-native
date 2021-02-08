import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

// Styled
const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.BlueKazidomi};
  align-items: center;
  justify-content: center;
`;

export default function RondedButton({ ioniconName }) {
  return (
    <Button>
      <Ionicons name={ioniconName} size={20} color="white" />
    </Button>
  );
}
