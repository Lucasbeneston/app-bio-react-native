import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";
import colors from "../../config/colors";

// Styles
const Container = styled.View`
  margin: 5% 0 0;
  padding-bottom: 10px;
  padding-left: 5%;
  padding-right: 5%;
  border-bottom-width: 1px;
  border-color: ${colors.GreyLight};
`;
const LinkContainer = styled.ScrollView`
  flex-direction: column;
  max-height: ${(props) => props.maxHeight}px;
  padding-bottom: 10px;
`;
const Link = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  justify-content: center;
  padding: 0 10px;
  padding-right: 5%;
  border-bottom-width: 1px;
  border-color: ${colors.GreyExtraLight};
`;
const Text = styled.Text`
  font-weight: 600;
  text-transform: uppercase;
`;
const Button = styled.TouchableOpacity`
  background-color: ${colors.BlueKazidomi};
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const ButtonTitle = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  color: white;
`;

export default function InlineMenu({ arrayCategories }) {
  const TabHeight = useBottomTabBarHeight();
  const ScreenHeight = Dimensions.get("window").height;
  const safeHeight = ScreenHeight - TabHeight - 300;

  const value = useState(new Animated.Value(0));

  function toggleMenu() {}

  return (
    <Container>
      <LinkContainer
        maxHeight={safeHeight}
        showsVerticalScrollIndicator={false}
      >
        {arrayCategories.map((category) => (
          <Link
            key={category}
            onPress={() => {
              alert(`Press ${category}`);
            }}
          >
            <Text>{category}</Text>
          </Link>
        ))}
      </LinkContainer>
      <Button
        onPress={() => {
          alert("Press become ...");
        }}
      >
        <ButtonTitle>Devenir membre</ButtonTitle>
      </Button>
    </Container>
  );
}
