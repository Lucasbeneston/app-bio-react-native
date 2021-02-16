import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import colors from "../../config/colors";

import { CartContext } from "../../context/CartContext";

// Component
import RondedButton from "../atoms/RondedButton";

export default function RondedButtonContainer({
  isShoopingScreen,
  open,
  onPressMenu,
  onPressSearch,
  menuIconName,
}) {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <ButtonContainer open={open}>
      <RondedButton onPress={onPressMenu} ioniconName={menuIconName} />
      {isShoopingScreen ? (
        <InputSearchContainer>
          <RondedButton
            marginLeft="10px"
            onPress={() => {
              navigation.navigate("ShoppingCartScreen");
            }}
            ioniconName="cart-outline"
          />
          {Object.keys(cartItems).length > 0 ? (
            <CountItemsContainer>
              <CountItemsValue>{cartItems.length}</CountItemsValue>
            </CountItemsContainer>
          ) : null}
        </InputSearchContainer>
      ) : null}
      <RondedButton
        marginLeft="10px"
        onPress={onPressSearch}
        ioniconName="search-outline"
      />
      <InputSearch open={open} placeholder='Rechercher "kombucha"' />
    </ButtonContainer>
  );
}

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

const InputSearchContainer = styled.View``;
const CountItemsContainer = styled.View`
  height: 18px;
  width: 18px;
  border-radius: 10px;
  background-color: ${colors.BurningOrange};
  position: absolute;
  right: -5px;
  align-items: center;
  justify-content: center;
`;
const CountItemsValue = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: white;
`;
