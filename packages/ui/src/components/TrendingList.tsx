import React from "react";

import { Paragraph, XStack, YStack } from "@my/ui";
import { MoreHorizontal } from "@tamagui/lucide-icons";

export function TrendingList() {
  return (
    <YStack p={16} bg={"#16181c"} br={"$6"}>
      <Paragraph color={"white"} fow="800" fontSize={"$5"}>
        What's happening
      </Paragraph>

      <YStack mt={"$5"} space={"$2"}>
        {trendingData.map((item, index) => {
          return <TrendingListItem item={item} key={index} />;
        })}
      </YStack>
    </YStack>
  );
}

const trendingData = [
  {
    trendingName: "Trending",
    name: "Gurgaon",
    description: "23.2 K Tweets",
  },
  {
    trendingName: "Trending in India",
    name: "#JaipurExpressTerrorAttack",
    description: "78K Tweets",
  },
  {
    trendingName: "Trending in India",
    name: "#Gurugram",
    description: "Trending with #Sohna",
  },
  {
    trendingName: "Entertainment - Trending",
    name: "#OMG2",
    description: "Trending with #PankajTripathi",
  },
  {
    trendingName: "FIFA World Cup - Trending",
    name: "Portugal vs USA",
    description: "",
  },
];

const TrendingListItem = ({ item }) => {
  return (
    <YStack>
      <XStack ai={"center"} jc={"space-between"}>
        <Paragraph color={"gray"} fow="400" fontSize={13}>
          {item.trendingName}
        </Paragraph>
        <MoreHorizontal color={"gray"} size={18} />
      </XStack>

      <Paragraph color={"white"} fow="700" mt={"$-1.5"}>
        {item.name}
      </Paragraph>
      <Paragraph color={"gray"} fow="400" fontSize={13} mt={"$-1.5"}>
        {item.description}
      </Paragraph>
    </YStack>
  );
};
