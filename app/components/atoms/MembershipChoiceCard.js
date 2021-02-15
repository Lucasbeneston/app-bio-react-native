import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

export default function MembershipChoiceCard({
  isSelected,
  title,
  subTitle,
  priceYear,
  isPriceMember,
  priceMonth,
  onPress,
}) {
  return (
    <ChoiceContainer
      selected={isSelected}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <PriceYear member={isPriceMember}>{priceYear}</PriceYear>
      <PriceMonth>{priceMonth}</PriceMonth>
    </ChoiceContainer>
  );
}

const ChoiceContainer = styled.TouchableOpacity`
  padding: 30px 20px;
  width: 47.5%;
  background-color: ${colors.GreyExtraLight};
  border-radius: 10px;
  align-items: center;
  border: ${(props) =>
    props.selected ? `4px solid ${colors.GreyLight}` : "0px"};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: -5px;
  color: ${colors.GreyDark};
`;
const PriceYear = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.member ? colors.BurningOrange : colors.BlueKazidomi};
`;
const PriceMonth = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;
