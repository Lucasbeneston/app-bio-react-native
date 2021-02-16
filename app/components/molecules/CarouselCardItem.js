import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import colors from "../../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function CarouselCardItem({ item, index }) {
  return (
    <CardItem key={index}>
      <Ionicons name={item.ionicon} size={50} color={colors.BlueKazidomi} />
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </CardItem>
  );
}

// Styles
const CardItem = styled.View`
  width: ${ITEM_WIDTH}px;
  padding: 30px;
  flex: 1;
  background-color: ${colors.OffWhite};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 5px solid ${colors.GreyExtraLight};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
  text-align: center;
  color: ${colors.BlueOxford};
`;
const Description = styled.Text`
  font-size: 16px;
  text-align: center;
`;
