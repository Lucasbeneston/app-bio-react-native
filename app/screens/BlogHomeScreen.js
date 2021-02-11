import React from "react";
import styled from "styled-components/native";

// Data
import blogPosts from "../data/blogPosts";
import blogCategories from "../data/blogCategories";

// Components
import TopBar from "../components/organismes/TopBar";
import BlogPost from "../components/organismes/BlogPost";

// Styles
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;
const ScrollViewItems = styled.ScrollView`
  margin-top: 2.5%;
  padding: 2.5% 5%;
`;

export default function BlogHomeScreen({ navigation }) {
  return (
    <Container>
      <TopBar
        onPressSearch={() => alert("Press Search")}
        categoriesArray={blogCategories}
        onPressCategory={() => alert("Press category")}
      />
      <ScrollViewItems>
        {blogPosts
          .map((post) => (
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
          .slice(0, 6)}
      </ScrollViewItems>
    </Container>
  );
}
