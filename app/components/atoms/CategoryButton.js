import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

// Styles
const Button = styled.TouchableOpacity`
  height: 40px;
  background-color: ${colors.BluePorcelain};
  padding: 0 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const Category = styled.Text`
  font-weight: 600;
  color: ${colors.BlueOxford};
`;

export default function CategoryButton({ onPressCategory, name }) {
  return (
    <Button onPress={onPressCategory} activeOpacity={0.8}>
      <Category>{name}</Category>
    </Button>
  );
}
