'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
  
const Password = () => {
    const router = useRouter();
    const settingsSection = [
    { title: 'Change Password', route: '/password' },
    { title: 'Delete Account', route: '/' },
  ];
  return (
    <div className='px-3'>
        <div className="space-y-2 text-gray-500">
          {settingsSection.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.route)}
              className="flex justify-between items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <span>{item.title}</span>
              <span><MdKeyboardArrowRight /></span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Password