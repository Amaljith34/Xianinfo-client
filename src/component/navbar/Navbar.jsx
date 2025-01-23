import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();

    return (
      <nav className="bg-[#003B5C] px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div  className=" font-bold text-2xl" onClick={() => navigate("/")}
          >
           <span className="text-[#00294D] bg-yellow-400">NEXIUS</span>  <span className=" text-yellow-400 border border-yellow-400 border-x-0 ">VENTURES</span> 
           <div className="text-xs mt-1 bg-white text-[#003B5C] flex justify-center">POWER AND SUCCESS INSPIRE LIFE</div>
          </div>
          <div className="flex gap-4">
            
            <button className="px-7 py-1 bg-white text-[#003B5C] rounded  "         onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button className="px-6  border border-white text-white rounded hover:bg-[#002241] transition-colors"         onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    )
  }
  
  