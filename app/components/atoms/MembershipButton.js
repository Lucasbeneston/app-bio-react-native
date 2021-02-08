import React from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../config/colors";

const Container = styled.View`
  height: 68px;
  width: 110px;
  border-radius: 30px;
  background-color: ${colors.BlueKazidomi};
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 10px;
  color: white;
`;

export default function MembershipButton({ size }) {
  return (
    <Container>
      <Ionicons name="person-add-outline" size={34} color="white" />
      <Label>Adhésion</Label>
    </Container>
  );
}
