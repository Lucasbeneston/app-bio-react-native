import React from "react";
import { ScrollView } from "react-native";

// Component
import CategoryButton from "../atoms/CategoryButton";

export default function CategoryScrollContainer({
  categoriesArray,
  onPressCategory,
}) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categoriesArray.map((category) => (
        <CategoryButton
          key={category}
          onPressCategory={onPressCategory}
          name={category}
        />
      ))}
    </ScrollView>
  );
}
