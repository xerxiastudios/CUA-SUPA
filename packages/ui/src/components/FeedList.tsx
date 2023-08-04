import React from "react";

import { Paragraph, Stack, XStack, YStack } from "@my/ui";

import { FeedInput } from "./FeedInput";
import { FeedItemList } from "./FeedItemList";

export function FeedList() {
  return (
    <XStack f={1}>
      <Stack
        ml={"$10"}
        style={{ borderRightWidth: 0.01, borderColor: "gray" }}
      />
      <YStack f={1}>
        <Paragraph ml={"$4"} mt={"$4"} col={"white"} fontSize={"$5"} fow="600">
          Home
        </Paragraph>
        <FeedInput />
        <FeedItemList />
        <FeedItemList />
        <FeedItemList />
        <FeedItemList />
        <FeedItemList />
        <FeedItemList />
      </YStack>
      <Stack style={{ borderRightWidth: 0.01, borderColor: "gray" }} />
    </XStack>
  );
}
