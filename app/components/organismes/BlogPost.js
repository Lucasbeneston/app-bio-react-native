import React from "react";
import styled from "styled-components/native";
import colors from "../../config/colors";

// Styles
const Post = styled.View`
  margin-bottom: 5%;
`;

const IllustrationContainer = styled.View`
  height: 150px;
  background-color: ${colors.BlueOxford};
  border-radius: 15px;
`;
const PostIllustration = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: cover;
  border-radius: 15px;
  opacity: 0.9;
`;

const PostCategoryContainer = styled.View`
  position: absolute;
  background-color: ${colors.BlueKazidomi};
  padding: 5px 20px;
  border-radius: 20px;
  right: 10px;
  top: 10px;
`;
const PostCategory = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 500;
`;

const InformationContainer = styled.View`
  padding: 10px;
`;
const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const PostAbstract = styled.Text`
  margin-top: 5px;
  color: ${colors.GreyDark};
`;
const PostPublicationDate = styled.Text`
  margin-top: 10px;
  color: ${colors.GreyLight};
`;

export default function BlogPost({
  category,
  illustrationSrc,
  title,
  abstract,
  publication,
}) {
  return (
    <Post>
      <IllustrationContainer>
        <PostIllustration source={{ uri: illustrationSrc }} />
        <PostCategoryContainer>
          <PostCategory>{category}</PostCategory>
        </PostCategoryContainer>
      </IllustrationContainer>
      <InformationContainer>
        <PostTitle>{title}</PostTitle>
        <PostAbstract numberOfLines={4}>{abstract}</PostAbstract>
        <PostPublicationDate>{publication}</PostPublicationDate>
      </InformationContainer>
    </Post>
  );
}
