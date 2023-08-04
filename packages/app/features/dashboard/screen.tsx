import React from "react";

import { TextArea, XStack, YStack } from "@my/ui";
import { FeedList } from "@my/ui/src/components/FeedList";
import { FollowList } from "@my/ui/src/components/FollowList";
import { GetVerified } from "@my/ui/src/components/GetVerified";
import { SideDrawer } from "@my/ui/src/components/SideDrawer";
import { TrendingList } from "@my/ui/src/components/TrendingList";

export function DashboardScreen() {
  return (
    <YStack f={1} bg={"rgb(20,20,20)"}>
      <XStack f={1}>
        <SideDrawer />
        <FeedList />
        <YStack ml={"$6"} mt={"$4"} mb={"$4"} mr={"$10"} space={"$5"}>
          <GetVerified />
          <TrendingList />
          <FollowList />
        </YStack>
      </XStack>
    </YStack>
  );
}
