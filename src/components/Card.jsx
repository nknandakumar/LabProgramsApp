import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({program :{id,program_name ,focused_on},subject}) => {
  return (
    <Link to={`/programs/${subject}/${id}`}>
        	<div className="relative group rounded-xl p-[0.9px]  transition-all duration-500 ease-in-out overflow-hidden">
						{/* Gradient layer */}
						<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border bg-gradient-to-r from-[#616C08] via-[#8A3251] to-blue-500 z-0"></div>

						{/* Card content */}
						<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-10 w-full text-start">
                            <span className="font-mono">Program{id}</span>
							<h3 className="font-sans text-[24px] leading-[42px] font-[800]">
								{program_name}
							</h3>
							<p className="mt-6 font-mono text-[18px] leading-[24px] font-[400] text-[#A3B3B3]">
							{focused_on}
							</p>
						</div>
					</div>
    </Link>
  )
}

export default Card