import React from "react";
import styled from "styled-components/native";

// Data
import blogPosts from "../data/blogPosts";

// Components
import TopBar from "../components/organismes/TopBar";
import BlogPost from "../components/organismes/BlogPost";

// Style
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

const ScrollViewItems = styled.ScrollView`
  margin-top: 5%;
  padding: 0 5%;
`;

export default function BlogScreen() {
  return (
    <Container>
      <TopBar />
      <ScrollViewItems>
        {blogPosts.map((post) => (
          <BlogPost
            category={post.category}
            illustrationSrc={post.illustrationSrc}
            title={post.title}
            abstract={post.abstract}
            publication={post.publication}
          />
        ))}
      </ScrollViewItems>
    </Container>
  );
}
