import React from "react";
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
  border-radius: 15px;
  opacity: 0.9;
`;

const ButtonsContainer = styled.SafeAreaView`
  position: absolute;
  right: 5%;
`;

const ScrollSection = styled.ScrollView``;

const InformationContainer = styled.View`
  padding: 5% 5% 10%;
`;

const InformationsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PostCategoryContainer = styled.View`
  align-self: flex-start;
  background-color: ${colors.BlueOxford};
  padding: 5px 20px;
  border-radius: 20px;
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
        </ButtonsContainer>
      </IllustrationContainer>
      <ScrollSection>
        <InformationContainer>
          <InformationsHeader>
            <PostCategoryContainer>
              <PostCategory>{category}</PostCategory>
            </PostCategoryContainer>
            <PostPublicationDate>Publié le {publication}</PostPublicationDate>
          </InformationsHeader>
          <PostTitle>{title}</PostTitle>
          <PostAbstract>{abstract}</PostAbstract>
          <PostAbstract>{text}</PostAbstract>
        </InformationContainer>
      </ScrollSection>
    </>
  );
}
