import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";

// Data
import blogPosts from "../data/blogPosts";

// Components
import RondedButton from "../components/atoms/RondedButton";
import BlogPost from "../components/organismes/BlogPost";
import EmptySectionSVG from "../components/atoms/EmptySectionSVG";

export default function BlogPostCategory({ route, navigation }) {
  const { selectedCategorie } = route.params;
  const filterArrayByCategory = blogPosts.filter(
    (item) => item.category === selectedCategorie
  );

  return (
    <SafeAreaView>
      <Header>
        <RondedButton
          ioniconName="chevron-back-outline"
          onPress={() => navigation.goBack()}
        />
        <CategoryTitleContainer>
          <CategoryTitle>{selectedCategorie}</CategoryTitle>
        </CategoryTitleContainer>
      </Header>
      <ScrollView>
        <PostsContainer>
          {filterArrayByCategory.length === 0 ? (
            <EmptySectionAlert>
              <EmptySectionSVG />
              <EmptySectionAlertOops>
                Oups ! Cette section est vide
              </EmptySectionAlertOops>
              <EmptySectionAlertInformations>
                Nous allons prochainement écrire de nouveaux articles sur ce
                thème.
              </EmptySectionAlertInformations>
            </EmptySectionAlert>
          ) : (
            filterArrayByCategory.map((post) => (
              <BlogPost
                onPress={() =>
                  navigation.navigate("BlogPostDetailsScreen", {
                    category: post.category,
                    illustrationSrc: post.illustrationSrc,
                    title: post.title,
                    publication: post.publication,
                    abstract: post.abstract,
                    text: post.text,
                  })
                }
                key={post.title}
                category={post.category}
                illustrationSrc={post.illustrationSrc}
                title={post.title}
                abstract={post.abstract}
                publication={post.publication}
              />
            ))
          )}
        </PostsContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5% 10px;
`;
const CategoryTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: -40px;
`;
const PostsContainer = styled.View`
  flex-wrap: wrap;
  padding: 10px 5% 5%;
  flex-direction: row;
`;
const EmptySectionAlert = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const EmptySectionAlertOops = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;
const EmptySectionAlertInformations = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;
