import { drizzle } from "@my/db";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

import type { User } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your user/db

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type IUserProps = {
  user: User | null;
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createContextInner = async ({ user }: IUserProps) => {
  return {
    user,
    drizzle,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  // Create authenticated Supabase Client.
  const supabaseServerClient = createPagesServerClient({ req, res });

  async function getUser() {
    // get userId from request
    const {
      data: { user },
    } = await supabaseServerClient.auth.getUser();

    return user;
  }

  const user = await getUser();

  return await createContextInner({ user });
};

export type Context = inferAsyncReturnType<typeof createContext>;
