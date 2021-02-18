import React, { useContext } from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components";
import colors from "../../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

// CartContext
import { CartContext } from "../../context/CartContext";

export default function CartItemList({ contextData }) {
  const { removeItem } = useContext(CartContext);

  return (
    <ScrollView>
      <DetailsCart>
        {contextData.map((item) => (
          <Container key={item.name}>
            <IllustrationContainer>
              <ItemIllustration source={item.illustration} />
            </IllustrationContainer>
            <InformationsAndQuantityContainer>
              <InformationsContainer>
                <DescriptionContainer>
                  <Brand>{item.brand}</Brand>
                  <Name numberOfLines={1}>{item.name}</Name>
                  <Text>{item.quantity}</Text>
                </DescriptionContainer>
                <PriceContainer>
                  <Price>{item.standardPrice}</Price>
                </PriceContainer>
              </InformationsContainer>
              <QuantityContainer>
                <ChangeQuantityContainer>
                  <ChangeQuantityButton>
                    <Ionicons
                      name="remove-outline"
                      size={20}
                      color={colors.Black}
                    />
                  </ChangeQuantityButton>
                  <QuantityValueContainer>
                    <QuantityValue>1</QuantityValue>
                  </QuantityValueContainer>
                  <ChangeQuantityButton>
                    <Ionicons
                      name="add-outline"
                      size={20}
                      color={colors.Black}
                    />
                  </ChangeQuantityButton>
                </ChangeQuantityContainer>
                <RemoveItemContainer
                  onPress={() => {
                    removeItem(item);
                  }}
                >
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color={colors.OffWhite}
                  />
                </RemoveItemContainer>
              </QuantityContainer>
            </InformationsAndQuantityContainer>
          </Container>
        ))}
      </DetailsCart>
    </ScrollView>
  );
}

// Styles
const DetailsCart = styled.View`
  padding: 5% 5% 100px;
`;
const Container = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`;
const IllustrationContainer = styled.View`
  flex: 1;
  background-color: ${colors.BluePorcelain};
  border-radius: 10px;
`;
const ItemIllustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: contain;
  margin: 10px;
`;
const InformationsAndQuantityContainer = styled.View`
  flex: 2;
`;
const InformationsContainer = styled.View`
  flex-direction: row;
`;
const DescriptionContainer = styled.View`
  padding: 10px;
  flex: 1;
`;
const Brand = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
`;
const Name = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const PriceContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.BlueOxford};
`;
const QuantityContainer = styled.View`
  padding: 10px 0 10px 10px;
  flex-direction: row;
  justify-content: space-between;
`;
const ChangeQuantityContainer = styled.View`
  flex-direction: row;
`;
const ChangeQuantityButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${colors.GreyExtraLight};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
const QuantityValueContainer = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const QuantityValue = styled.Text`
  font-size: 16px;
`;
const RemoveItemContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${colors.BurningOrange};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
