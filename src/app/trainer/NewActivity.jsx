import Svg from '@/components/HomePage/Svg';
import TrainChatIcon from '@/components/trainerIcon/TrainChatIcon';
import { CalenderIcon } from '@/constant/svg.icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NewActivity = () => {
    const coaches = [
  {
    id: 1,
    name: "Ann Smith",
    age: 26,
    specialties: ["Yoga", "Stretching"],
    location: "Purchased 5x SesioSession  ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Purchased 5x SesioSession ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Purchased 5x SesioSession ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
 
  // Add more or set to [] to see empty state
];
  return (
    <>
      {/* Main Page Content */}
      <div className="  mt-7 ">
      <div className='flex items-center gap-1'>
          <h1 className=" font-semibold  italic">
          New activity 
        </h1>
       <p className='bg-[#2C2F32] text-bold text-white rounded-full w-[20px] h-[20px] flex justify-center items-center text-sm'>2</p>
      </div>
        {/* Coaches List */}
        <div className="space-y-3 mt-2">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className=" bg-white mb-2 rounded-3xl  border  hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex gap-5 items-center p-3">
                <div className="flex w-full items-center  gap-4">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      width={50}
                      height={50}
                      className="rounded-2xl object-cover "
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-[14px] font-bold text-gray-900 flex items-center gap-2">
                          {coach.name}
                         
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1 text-sm">
                      <div className="">
                        <div className="text-gray-500 flex text-[12px] items-center gap-2">
                         
                          {coach.location}
                        </div>
                       
                      </div>
                      <div className="flex items-center gap-3"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[100px] flex justify-end">
                  <div>
                    <Link href={'/chat'}><div className="flex justify-end">
                      <TrainChatIcon></TrainChatIcon>
                    </div></Link>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NewActivity