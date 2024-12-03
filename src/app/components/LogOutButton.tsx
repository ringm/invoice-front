"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const LogOutButton: React.FC = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" }); // Redirect to login after logout
  };
  return (
    <Button variant="ghost" onClick={handleLogout}>
      Sign out
    </Button>
  );
};
