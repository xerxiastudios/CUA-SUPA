import React from "react";

import { useMedia, XStack, YStack } from "@my/ui";
import { FeedList } from "@my/ui/src/components/FeedList";
import { FollowList } from "@my/ui/src/components/FollowList";
import { GetVerified } from "@my/ui/src/components/GetVerified";
import { SideDrawer } from "@my/ui/src/components/SideDrawer";
import { TrendingList } from "@my/ui/src/components/TrendingList";

export function DashboardScreen() {
  const media = useMedia();
  return (
    <YStack f={1} bg={"rgb(20,20,20)"}>
      <XStack f={1}>
        {media.gtMd && <SideDrawer />}

        <FeedList />
        {media.gtSm && (
          <YStack
            mt={"$4"}
            mb={"$4"}
            mr={media.gtLg ? "$20" : "$10"}
            space={"$5"}
          >
            <GetVerified />
            <TrendingList />
            <FollowList />
          </YStack>
        )}
      </XStack>
    </YStack>
  );
}
