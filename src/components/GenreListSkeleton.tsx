import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY={1}>
      <HStack>
        <Skeleton boxSize={8} borderRadius={8}></Skeleton>
        <SkeletonText width={40} height={12}></SkeletonText>
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
