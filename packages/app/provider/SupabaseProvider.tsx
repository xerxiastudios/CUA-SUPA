import { supabase } from "app/utils/supabase";

import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
