import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

// Component
import RondedButton from "../../components/atoms/RondedButton";

export default function PostDetailsIllustrationContainer({
  onPress,
  category,
  illustrationSrc,
}) {
  return (
    <Container>
      <PostIllustration source={{ uri: illustrationSrc }} />
      <ButtonsContainer>
        <RondedButton onPress={onPress} ioniconName="close-outline" />
        <ShareLikeContainer>
          <RondedButton
            marginLeft="0px"
            onPress={() => alert("Press share")}
            ioniconName="share-outline"
            color={colors.BlueOxford}
          />
          <RondedButton
            onPress={() => alert("Press like")}
            ioniconName="heart-outline"
          />
        </ShareLikeContainer>
      </ButtonsContainer>
      <PostCategoryContainer>
        <PostCategory>{category}</PostCategory>
      </PostCategoryContainer>
    </Container>
  );
}

// Styles
const Container = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${colors.BlueOxford};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const PostIllustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: cover;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  opacity: 0.9;
`;
const ShareLikeContainer = styled.View`
  flex-direction: row;
  width: 90px;
  justify-content: space-between;
`;
const ButtonsContainer = styled.SafeAreaView`
  position: absolute;
  width: 90%;
  margin: 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;
const PostCategoryContainer = styled.View`
  background-color: ${colors.BlueOxford};
  padding: 5px 20px;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  left: 5%;
`;
const PostCategory = styled.Text`
  font-size: 16px;
  color: ${colors.OffWhite};
  font-weight: 500;
`;
