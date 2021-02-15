import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

// Components
import CategoryScrollContainerShopping from "../molecules/CategoryScrollContainerShopping";
import RondedButtonContainer from "../molecules/RondedButtonContainer";
import MenuShopping from "../molecules/MenuShopping";
import MenuBlog from "../molecules/MenuBlog";
import CategoryScrollContainerBlog from "../molecules/CategoryScrollContainerBlog";

// Style
const TopBarContainer = styled.View`
  flex-direction: row;
`;

export default function TopBar({ isShoopingScreen, arrayCategories }) {
  const [open, setOpen] = useState(false);
  const test = () => {
    if (isShoopingScreen) {
      return true;
    }
    return false;
  };
  console.log(test());

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
        {isShoopingScreen ? (
          <CategoryScrollContainerShopping arrayCategories={arrayCategories} />
        ) : (
          <CategoryScrollContainerBlog arrayCategories={arrayCategories} />
        )}
      </TopBarContainer>
      {open & isShoopingScreen ? (
        <MenuShopping arrayCategories={arrayCategories} />
      ) : open & !isShoopingScreen ? (
        <MenuBlog arrayCategories={arrayCategories} />
      ) : null}
    </SafeAreaView>
  );
}
