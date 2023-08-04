import React from "react";
import { Pressable } from "react-native";

import { Avatar, Paragraph, Stack, XStack, YStack } from "@my/ui";
import {
  BarChart,
  Heart,
  MessageSquare,
  Repeat,
  Upload,
} from "@tamagui/lucide-icons";

export function FeedItemList() {
  return (
    <YStack f={1}>
      <Stack
        style={{ borderBottomWidth: 0.01, borderColor: "gray" }}
        marginVertical={"$3"}
      />
      <XStack mr={"$4"}>
        <Avatar circular size="$3" mt={"$2"} ml={"$4"}>
          <Avatar.Image
            aria-label="Photo"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <YStack ml={12} f={1}>
          <XStack>
            <Paragraph color={"white"} fow={"700"}>
              Evan Bacon
            </Paragraph>
            <Paragraph color={"gray"} ml={8}>
              @Baconbrix
            </Paragraph>
            <Paragraph color={"gray"} ml={8}>
              . Jul 31
            </Paragraph>
          </XStack>
          <Paragraph color={"white"} fow={"500"}>
            Expo Router is built on top of React Navigation
          </Paragraph>
          <XStack mt={8} jc={"space-between"}>
            <XStack ai={"center"}>
              <Pressable>
                <MessageSquare color={"gray"} size={18} />
              </Pressable>
              <Paragraph ml={8} color={"gray"}>
                90
              </Paragraph>
            </XStack>

            <XStack ai={"center"}>
              <Pressable>
                <Repeat color={"gray"} size={18} />
              </Pressable>
              <Paragraph ml={8} color={"gray"}>
                345
              </Paragraph>
            </XStack>

            <XStack ai={"center"}>
              <Pressable>
                <Heart color={"gray"} size={18} />
              </Pressable>
              <Paragraph ml={8} color={"gray"}>
                67
              </Paragraph>
            </XStack>

            <XStack ai={"center"}>
              <Pressable>
                <BarChart color={"gray"} size={18} />
              </Pressable>
              <Paragraph ml={8} color={"gray"}>
                3421
              </Paragraph>
            </XStack>

            <XStack ai={"center"}>
              <Upload color={"gray"} size={18} />
            </XStack>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
}
