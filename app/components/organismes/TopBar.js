import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

// Components
import CategoryScrollContainer from "../molecules/CategoryScrollContainer";
import RondedButtonContainer from "../molecules/RondedButtonContainer";
import Menu from "../molecules/Menu";

// Style
const TopBarContainer = styled.View`
  flex-direction: row;
`;

export default function TopBar({
  isShoopingScreen,
  categoriesArray,
  onPressCategory,
}) {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <TopBarContainer>
        <RondedButtonContainer
          isShoopingScreen={isShoopingScreen}
          open={open}
          menuIconName={open ? "close-outline" : "menu-outline"}
          onPressSearch={() => {
            setOpen(!open);
          }}
          onPressMenu={() => {
            setOpen(!open);
          }}
        />
        <CategoryScrollContainer
          categoriesArray={categoriesArray}
          onPressCategory={onPressCategory}
        />
      </TopBarContainer>
      {open ? <Menu arrayCategories={categoriesArray} /> : null}
    </SafeAreaView>
  );
}
