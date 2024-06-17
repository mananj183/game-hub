import { Badge } from "@chakra-ui/react";
import React from "react";

type Props = {
  score: number;
};
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge paddingX={2} colorScheme={color} fontSize={13}>
      {score}
    </Badge>
  );
};

export default CriticScore;
