import React from "react";

import { Avatar, Button, XStack, YStack } from "@my/ui";
import { Stack } from "@tamagui/core";
import {
  Album,
  AppWindow,
  Beaker,
  FileAudio,
  FileBarChart,
} from "@tamagui/lucide-icons";

import { AutoSizeArea } from "../atoms/AutoSizeArea";

export function FeedInput() {
  return (
    <YStack mt={"$4"}>
      <>
        <Stack
          style={{ flex: 1, borderBottomWidth: 0.01, borderColor: "gray" }}
        />
        <XStack f={1} space={"$3"} mt={"$4"} mb={"$4"}>
          <Avatar circular size="$3" mt={"$2"} ml={"$4"}>
            <Avatar.Image
              aria-label="Photo"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>

          <YStack f={1}>
            <AutoSizeArea />
            <XStack space={10} mt={28}>
              <FileAudio color={"#1A8CD8"} size={18} />
              <FileBarChart color={"#1A8CD8"} size={18} />
              <Album color={"#1A8CD8"} size={18} />
              <FileBarChart color={"#1A8CD8"} size={18} />
              <AppWindow color={"#1A8CD8"} size={18} />
              <Beaker color={"#1A8CD8"} size={18} />
            </XStack>
          </YStack>
          <YStack mr={"$4"} jc={"flex-end"}>
            <Button
              mt={"$4"}
              bg={"#1A8CD8"}
              color={"white"}
              fontSize={"$3"}
              fontWeight="500"
              size={"$3"}
              br={"$8"}
              w={80}
            >
              Post
            </Button>
          </YStack>
        </XStack>
      </>
    </YStack>
  );
}
