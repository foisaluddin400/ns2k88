'use client'
import React, { useState } from 'react'

const chatUsers = [
  {
    id: 1,
    name: 'Ann Smith',
    message: 'Lorem ipsum dolor sit amet consectetur...',
    time: '2:34 p.m',
    unread: true,
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 2,
    name: 'Ann Smith',
    message: 'Lorem ipsum dolor sit amet consectetur...',
    time: '2:34 p.m',
    unread: false,
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
]

const messages = [
  { id: 1, text: 'Hello!', sender: 'other' },
  { id: 2, text: 'Hi, how are you?', sender: 'me' },
  { id: 3, text: 'I am good 😊', sender: 'other' },
]

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null)

  // 👉 Chat Message View
  if (activeChat) {
    return (
      <div className="min-h-[92vh] -mb-20 flex flex-col ">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 bg-white shadow-sm">
          <button
            onClick={() => setActiveChat(null)}
            className="text-xl"
          >
            ←
          </button>
          <img
            src={activeChat.avatar}
            className="w-10 h-10 rounded-full"
          />
          <h2 className="font-semibold">{activeChat.name}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                msg.sender === 'me'
                  ? 'bg-[#1CA7A6] text-white ml-auto'
                  : 'bg-white text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-white flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 outline-none"
          />
          <button className="bg-[#1CA7A6] text-white px-5 rounded-full">
            Send
          </button>
        </div>
      </div>
    )
  }

  // 👉 Chat List View
  return (
    <div className=" -mb-20 bg-white px-3">
      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-full px-4 py-2 outline-none"
        />
      </div>

      {/* Chat List */}
      <div>
        {chatUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => setActiveChat(user)}
            className="flex items-center gap-3 px-4 py-4 border-b cursor-pointer hover:bg-gray-50"
          >
            <img
              src={user.avatar}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-1">
                {user.message}
              </p>
            </div>

            <div className="text-right flex flex-col items-end gap-2">
              <span className="text-xs text-gray-400">
                {user.time}
              </span>
              {user.unread && (
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chat
