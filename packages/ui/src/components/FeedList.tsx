import React from "react";

import { Paragraph, Stack, useMedia, XStack, YStack } from "@my/ui";

import { FeedInput } from "./FeedInput";
import { FeedItemList } from "./FeedItemList";

export function FeedList() {
  const media = useMedia();
  return (
    <XStack f={1} mr={"$6"}>
      <Stack
        ml={media.gtMd ? "$10" : "$4"}
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
