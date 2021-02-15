import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

// Component
import CategoryButton from "../atoms/CategoryButton";

export default function CategoryScrollContainerBlog({ arrayCategories }) {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {arrayCategories.map((category) => (
        <CategoryButton
          key={category}
          onPressCategory={() =>
            navigation.navigate("BlogPostCategory", {
              selectedCategorie: category,
            })
          }
          name={category}
        />
      ))}
    </ScrollView>
  );
}
