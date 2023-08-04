import React from "react";

import { Paragraph, YStack } from "@my/ui";

import { FeedInput } from "./FeedInput";
import { FeedItemList } from "./FeedItemList";

export function FeedList() {
  return (
    <YStack f={1}>
      <Paragraph ml={"$4"} mt={"$4"} col={"white"} fontSize={"$5"} fow="600">
        Home
      </Paragraph>
      {/* <FeedInput /> */}
      <FeedItemList />
    </YStack>
  );
}
