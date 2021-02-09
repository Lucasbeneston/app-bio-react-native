import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";

// Component
import RondedButton from "../components/atoms/RondedButton";

// Style

const IllustrationContainer = styled.View`
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

const InformationContainer = styled.View`
  padding: 5% 5% 10%;
`;

const InformationsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-size: 14px;
  color: white;
  font-weight: 500;
`;
const PostPublicationDate = styled.Text`
  color: ${colors.GreyLight};
`;
const PostTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`;

const PostAbstract = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-style: italic;
  line-height: 25px;
`;

const PostText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  line-height: 25px;
`;

export default function PostScreen({ route, navigation }) {
  const {
    category,
    illustrationSrc,
    title,
    publication,
    abstract,
    text,
  } = route.params;
  return (
    <>
      <IllustrationContainer>
        <PostIllustration source={{ uri: illustrationSrc }} />
        <ButtonsContainer>
          <RondedButton
            onPress={() => navigation.goBack()}
            ioniconName="close-outline"
          />
          <ShareLikeContainer>
            <RondedButton
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
      </IllustrationContainer>
      <ScrollView>
        <InformationContainer>
          <InformationsHeader>
            <PostPublicationDate>Publié le {publication}</PostPublicationDate>
          </InformationsHeader>
          <PostTitle>{title}</PostTitle>
          <PostAbstract>{abstract}</PostAbstract>
          <PostText>{text}</PostText>
        </InformationContainer>
      </ScrollView>
    </>
  );
}
