import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import {
  HashtagIcon,
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";

export const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex  flex-col p-2 xl:items-start fixed h-full">
      {/* Logo */}
      <div className=" hover:scale-125 p-0 xl:p-1">
        <Image
          src={
            "https://as2.ftcdn.net/v2/jpg/02/14/20/11/1000_F_214201107_dneiBCFGKayS9T52kcCVt1Epv2jD6aJa.jpg"
          }
          width={"100"}
          height={"100"}
          alt=""
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start ">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        {/* <SidebarMenuItem text="Explore" Icon={HashtagIcon} /> */}
        {session && (
          <>
            <SidebarMenuItem text="Notification" Icon={BellIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="List" Icon={ClipboardIcon} />
            {/* <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} /> */}
          </>
        )}
      </div>
      {/* Button */}

      {session ? (
        <>
          <button className="bg-black text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline">
            Journal
          </button>

          {/* Users */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
            <img
              src={
                session
                  ? session.user.image
                  : "https://as2.ftcdn.net/v2/jpg/02/14/20/11/1000_F_214201107_dneiBCFGKayS9T52kcCVt1Epv2jD6aJa.jpg"
              }
              alt="user-image"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">{session.user.email}</p>
            </div>

            <Dropdown />
          </div>
        </>
      ) : (
        <button
          className="bg-black text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline"
          onClick={signIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
};
