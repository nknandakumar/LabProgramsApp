import React from 'react'
import { Link } from 'react-router-dom'

const Subjects = () => {
    const subjects = [
        {
            name: "Computer MultiMedia Animation (CMA)",
            description: "HTML CSS JavaScript",
            path: "/programs/cma"
        },
        {
            name:"Python",
            description:"Python is a programming language that lets you work quickly and integrate systems more effectively.",
            path: "/programs/python"
        },
    ]
  return (
<div className="">

<div className="mx-[112px]   h-screen flex flex-col gap-10 items-center justify-center">
<Link to="/">  <button className='bg-gradient-to-r from-[#616C08] via-[#8A3251] to-blue-500 text-white font-bold text-start py-2 px-4 rounded'>Back</button>  </Link>
    <h1 className='text-center font-sans text-4xl font-bold'>Subjects</h1>
    <p className='text-center font-mono text-lg font-normal'>Select programming subjects below to explore the available lab programs and start learning.</p>
      <div className='grid grid-cols-3 gap-10 items-center justify-center '  >
      {subjects.map((subject,index) => (
        <Link key={index} to={subject.path}  >
        <div  className="relative group rounded-xl p-[0.9px]  transition-all duration-500 ease-in-out overflow-hidden">
					{/* Gradient layer */}
					<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border bg-gradient-to-r from-[#616C08] via-[#8A3251] to-blue-500 z-0"></div>

					{/* Card content */}
					<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-10 w-full text-start">
						<h3 className="font-sans text-[36px] leading-[42px] font-[800]">
					      {subject.name}
						</h3>
						<p className="mt-6 font-mono text-[18px] leading-[24px] font-[400] text-[#A3B3B3]">
						{subject.description}
						</p>
					</div>
				</div>

        </Link>

      ))}
    </div>
  </div>
</div>
  )
}

export default Subjects