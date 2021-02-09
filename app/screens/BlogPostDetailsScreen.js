import React from "react";

// Components
import PostDetailsInformationContainer from "../components/molecules/PostDetailsInformationContainer";
import PostDetailsIllustrationContainer from "../components/molecules/PostDetailsIllustrationContainer";

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
      <PostDetailsIllustrationContainer
        onPress={() => navigation.goBack()}
        category={category}
        illustrationSrc={illustrationSrc}
      />
      <PostDetailsInformationContainer
        title={title}
        publication={publication}
        abstract={abstract}
        text={text}
      />
    </>
  );
}
