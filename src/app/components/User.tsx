"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOutButton } from "./LogOutButton";

export const User: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Popover>
      <PopoverTrigger asChild>
        {session ? (
          <Image
            className="ml-4 cursor-pointer lg:ml-0"
            src="/imgs/profile-pic.png"
            alt="profile picture"
            width={40}
            height={40}
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-fuchsia-500"></div>
        )}
      </PopoverTrigger>
      <PopoverContent className="mb-4 ml-4 w-auto">
        <LogOutButton />
      </PopoverContent>
    </Popover>
  );
};
