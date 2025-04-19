
import React from "react";
//import { Code , PlayIcon , FileQuestionIcon } from "lucide-react";

const TabButton = ({ name, activeTab, conditionValue , setActiveTab }) => {
/**
  const icons =()=>{
    switch(conditionValue){
        case "code":
            return <Code />
        case "preview":
            return <PlayIcon/>
        case "explain":
            return <FileQuestionIcon/>
       }
 }
 console.log(icons())
 */
	return (
		<button
			className={` program-details-btn font-mono text-lg ${
				activeTab === String(conditionValue)
					? "bg-[#1E1E1E] text-white  cursor-no-drop"
					: "text-gray-400 hover:text-white cursor-pointer  "
			}`}
			onClick={() => setActiveTab(String(conditionValue))}
		>

	   	{ name}
		</button>
	);
};

export default TabButton;