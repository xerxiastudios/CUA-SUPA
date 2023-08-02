import React from "react";
import { Pressable } from "react-native";

import { Avatar, Button, Paragraph, XStack, YStack } from "@my/ui";
import {
  Bell,
  Bookmark,
  Home,
  List,
  MessagesSquare,
  Search,
} from "@tamagui/lucide-icons";

const sideDrawerData = [
  {
    title: "Home",
    icon: <Home size={24} color="white" />,
    onClick: () => {
      console.log("Home");
    },
  },
  {
    title: "Explore",
    icon: <Search size={24} color="white" />,
    onClick: () => {},
  },
  {
    title: "Notifications",
    icon: <Bell size={24} color="white" />,
    onClick: () => {},
  },
  {
    title: "Message",
    icon: <MessagesSquare size={24} color="white" />,
    onClick: () => {},
  },
  {
    title: "Lists",
    icon: <List size={24} color="white" />,
    onClick: () => {},
  },
  {
    title: "Bookmarks",
    icon: <Bookmark size={24} color="white" />,
    onClick: () => {},
  },
];

export const SideDrawer = () => {
  return (
    <YStack
      // bg={"#1A8123"}
      w={"$14"}
      ml={"$10"}
      mt={"$10"}
      mb={"$4"}
    >
      <YStack space={4} fg={1}>
        {sideDrawerData.map((item, index) => {
          return (
            <Pressable key={index} onPress={item.onClick}>
              <XStack p={"$2"}>
                {item.icon}
                <Paragraph ml={"$3"} col={"white"} fontSize={"$5"} fow="500">
                  {item.title}
                </Paragraph>
              </XStack>
            </Pressable>
          );
        })}

        <Button
          mt={"$4"}
          bg={"#1A8CD8"}
          color={"white"}
          fontSize={"$5"}
          fontWeight="600"
          br={"$8"}
        >
          Post
        </Button>
      </YStack>

      <Pressable>
        <XStack alignItems="center">
          <Avatar circular size="$3">
            <Avatar.Image
              aria-label="Photo"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack ml={"$2.5"}>
            <Paragraph col={"white"} fontSize={"$4"} fow="600">
              David Jones
            </Paragraph>
            <Paragraph mt={"$-2"} col={"gray"} fontSize={"$3"} fow="500">
              @davidJones
            </Paragraph>
          </YStack>
        </XStack>
      </Pressable>
    </YStack>
  );
};
