import React from 'react'

import usdc from '../assets/icons/usdc.png'
import cusd from '../assets/icons/cusd.png'
import usdt from '../assets/icons/usdt.png'

export const SocialProof: React.FC = () => (
  <div className="w-max mx-auto flex items-center bg-white shadow-md rounded-full px-1 py-0.5 mt-4 sm:mt-3">
    <div className="flex -space-x-2">
      <img
        src={cusd}
        alt="User 1"
        className="w-1.5 h-1.5 rounded-full border-2 bg-[#222] border-white"
      />
      <img
        src={usdc}
        alt="User 2"
        className="w-1.5 h-1.5 ml-1.5 rounded-full border-2 bg-[#222] border-white"
      />
      <img
        src={usdt}
        alt="User 3"
        className="w-1.5 h-1.5 ml-1.5 rounded-full border-2 bg-[#222] border-white"
      />
    </div>

    <span className="ml-0 sm:ml-0.5 text-xs font-medium whitespace-nowrap">
      Unlock your stablecoins with Pepper
    </span>
  </div>
)
