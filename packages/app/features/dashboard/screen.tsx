import React from "react";

import { XStack, YStack } from "@my/ui";
import { FeedList } from "@my/ui/src/components/FeedList";
import { SideDrawer } from "@my/ui/src/components/SideDrawer";
import { TrendingList } from "@my/ui/src/components/TrendingList";

export function DashboardScreen() {
  return (
    <YStack f={1} bg={"rgb(20,20,20)"}>
      <XStack f={1}>
        {/* <SideDrawer /> */}
        {/* <FeedList /> */}
        <TrendingList />
      </XStack>
    </YStack>
  );
}
