import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllPrograms } from '../data/programs'
import {Link} from "react-router-dom" ;
import Card from '../components/Card'
const ProgramListPage = () => {
    const { subject = "" } = useParams();
    const programs = getAllPrograms(subject);
    console.log(programs);  
    const subjectTitle = subject === "cma" ? "CMA Programs" : "Python Programs";

  const subjectDescription = subject === "cma" 
    ? "HTML, CSS, and JavaScript examples with interactive demos" 
    : "Python programming examples from basic to advanced concepts";
  return (
    <div className='mx-[112px]   h-screen flex flex-col gap-10 items-start justify-start'>
         <Link to={`/subjects`} ><button className=" mt-8 cursor-pointer font-mono bg-amber-50 text-black px-4 py-2 rounded-md ">Back</button></Link>
        <h2 className='text-center font-sans text-4xl font-bold mt-4'>{subjectTitle}</h2>
        <p className='text-center'>{subjectDescription}</p>
        <div className='grid grid-cols-3 gap-4'>
            {programs.map((program) => (
               <Card key={program.id} program={program} subject={subject} />    
            ))}
        </div>
    </div>
  )
}

export default ProgramListPage