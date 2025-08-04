import React from 'react'

import avatar2 from '../assets/icons/bolt.webp'
import avatar1 from '../assets/icons/disk.webp'
import avatar3 from '../assets/icons/lock.webp'

export const SocialProof: React.FC = () => (
  <div className="w-max mx-auto flex items-center bg-white shadow-md rounded-full px-1 py-0.5 mt-4 sm:mt-3">
    <div className="flex -space-x-2">
      <img
        src={avatar1}
        alt="User 1"
        className="w-1.5 h-1.5 rounded-full border-2 bg-[#333] border-white"
      />
      <img
        src={avatar2}
        alt="User 2"
        className="w-1.5 h-1.5 ml-1.5 rounded-full border-2 bg-[#333] border-white"
      />
      <img
        src={avatar3}
        alt="User 3"
        className="w-1.5 h-1.5 ml-1.5 rounded-full border-2 bg-[#333] border-white"
      />
    </div>

    <span className="ml-0 sm:ml-0.5 text-xs font-medium whitespace-nowrap">
      Join 2M+ wallets sending with Pepper
    </span>
  </div>
)
