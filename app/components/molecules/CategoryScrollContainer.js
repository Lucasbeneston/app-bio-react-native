import React from "react";
import styled from "styled-components/native";

// Data
import blogCategories from "../../data/blogCategories";

// Component
import CategoryButton from "../atoms/CategoryButton";

// Style
const ScrollContainer = styled.ScrollView``;

export default function CategoryScrollContainer() {
  return (
    <ScrollContainer horizontal={true} showsHorizontalScrollIndicator={false}>
      {blogCategories.map((category) => (
        <CategoryButton key={category} name={category} />
      ))}
    </ScrollContainer>
  );
}
