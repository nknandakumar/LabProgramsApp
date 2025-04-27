
import { Link } from "react-router-dom";

const Card = ({ program: { id, program_name }, subject }) => {

  return (
    <Link to={`/programs/${subject}/${id}`}>
      <div className="relative group rounded-xl p-[0.9px] transition-all duration-500 ease-in-out overflow-hidden">
        {/* Gradient layer */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border hero bg-[url('/hero-Img.webp')] z-0"></div>

        {/* Card content */}
        <div className="relative z-10 space-y-4 bg-[#0C0C0C] rounded-xl p-4 sm:p-6 md:p-10 w-full text-start">
          <span className="font-mono text-xs sm:text-sm">{  id>8 ? `Part B Program ${id-8}` : `Program ${id}`}</span>
          <h3
            className={`font-sans mt-2 text-sm sm:text-xl md:text-xl hover:underline leading-tight sm:leading-normal md:leading-[22px] line-clamp-3 font-[800] group-hover:underline`}
          >
            {program_name}
          </h3>
         
        </div>
      </div>
    </Link>
  );
};

export default Card;
