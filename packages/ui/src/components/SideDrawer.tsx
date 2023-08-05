import React from "react";
import { Pressable } from "react-native";
import { useRouter } from "solito/router";

import {
  Avatar,
  Button,
  Circle,
  Paragraph,
  Stack,
  useMedia,
  XStack,
  YStack,
} from "@my/ui";
import {
  Bell,
  Bookmark,
  Home,
  Leaf,
  List,
  MessagesSquare,
  Search,
  Twitter,
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
    icon: <Bell size={24} strokeWidth={3} color="white" />,
    onClick: () => {},
  },
  {
    title: "Message",
    icon: <MessagesSquare size={24} strokeWidth={3} color="white" />,
    onClick: () => {},
  },
  {
    title: "Lists",
    icon: <List size={24} strokeWidth={3} color="white" />,
    onClick: () => {},
  },
  {
    title: "Bookmarks",
    icon: <Bookmark size={24} strokeWidth={3} color="white" />,
    onClick: () => {},
  },
];

export const SideDrawer = () => {
  const { push } = useRouter();

  const goToProfile = () => {
    push("/profile");
  };

  const media = useMedia();
  return (
    <YStack
      w={"$14"}
      ml={media.gtLg ? "$20" : media.gtMd ? "$13" : "$10"}
      mb={"$4"}
    >
      <YStack space={12} fg={1}>
        <Pressable>
          <Stack mt={"$4"} mb={"$4"}>
            <Twitter size={32} strokeWidth={3} color="white" />
          </Stack>
        </Pressable>
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

      <Pressable onPress={goToProfile}>
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

export const SideDrawerSm = () => {
  const media = useMedia();
  return (
    <YStack
      ml={media.gtLg ? "$20" : media.gtMd ? "$13" : media.gtXs ? "$10" : "$4"}
      mb={"$4"}
    >
      <YStack space={12} fg={1} ai={"center"}>
        <Pressable>
          <Stack mt={"$4"} mb={"$4"}>
            <Twitter size={32} strokeWidth={3} color="white" />
          </Stack>
        </Pressable>
        {sideDrawerData.map((item, index) => {
          return (
            <Pressable key={index} onPress={item.onClick}>
              <XStack p={"$2"}>{item.icon}</XStack>
            </Pressable>
          );
        })}

        <Pressable>
          <Circle bg={"#1A8CD8"} size={50} mt={"$4"}>
            <Leaf size={24} color="white" />
          </Circle>
        </Pressable>
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
        </XStack>
      </Pressable>
    </YStack>
  );
};
