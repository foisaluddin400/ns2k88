"use client";

import Link from "next/link";

import { Navigate } from "@/components/Navigate";
import NotificationIcon from "./NotificationIcon";

const chatUsers = [
  {
    id: 1,
    name: "Ann Smith",
    message: "Lorem ipsum dolor sit amet consectetur...",
    time: "2:34 p.m",
    unread: true,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 3,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 4,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 5,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 6,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 7,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
   {
    id: 8,
    name: "John Doe",
    message: "Hey! Are you available?",
    time: "1:10 p.m",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

const ChatPage = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="flex -mt-[70px] justify-between items-center">
        <Navigate />

        <div className="border w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <Link href="/notification">
            <NotificationIcon />
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border bg-transparent rounded-full px-4 py-2 outline-none"
        />
      </div>

      {/* Chat List */}
      <div>
        {chatUsers.map((user) => (
          <Link
            key={user.id}
            href={`/chat/${user.id}`}
            className="block"
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b cursor-pointer hover:bg-gray-50">
              <img
                src={user.avatar}
                className="w-12 h-12 rounded-2xl"
                alt={user.name}
              />

              <div className="flex-1">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {user.message}
                </p>
              </div>

              <div className="text-right flex flex-col items-end gap-2">
                <span className="text-xs text-gray-400">{user.time}</span>
                {user.unread && (
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
