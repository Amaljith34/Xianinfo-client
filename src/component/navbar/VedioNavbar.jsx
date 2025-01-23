import { useNavigate } from "react-router-dom";

export default function VedioNavbar () {
    const navigate = useNavigate();

  return (
    <nav className="bg-[#004275] flex justify-between items-center py-4 px-8">
      <div className="text-white text-2xl font-serif">
        <span className="text-yellow-400">PAS</span>IL
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-white text-[#004275] font-medium px-4 py-2 rounded-md hover:bg-gray-200">
          My videos
        </button>

        <button className="text-white border border-white font-medium px-4 py-2 rounded-md hover:bg-[#005a99]">
          Add Video
        </button>

        <button className="bg-yellow-400 text-[#004275] font-medium px-4 py-2 rounded-md hover:bg-yellow-500" onClick={()=>navigate('/')}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

