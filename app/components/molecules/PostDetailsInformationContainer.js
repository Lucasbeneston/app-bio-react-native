import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import colors from "../../config/colors";

export default function PostDetailsInformationContainer({
  publication,
  title,
  abstract,
  text,
}) {
  return (
    <ScrollView>
      <Container>
        <Header>
          <PostPublicationDate>Publié le {publication}</PostPublicationDate>
        </Header>
        <PostTitle>{title}</PostTitle>
        <PostAbstract>{abstract}</PostAbstract>
        <PostText>{text}</PostText>
      </Container>
    </ScrollView>
  );
}

// Styles
const Container = styled.View`
  padding: 5% 5% 10%;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
