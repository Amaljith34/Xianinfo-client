import { Facebook, Instagram, Linkedin, WebcamIcon as Skype } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#003B5C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div  className=" font-bold text-2xl" onClick={() => navigate("/")}
          >
           <span className="text-[#00294D] bg-yellow-400">NEXIUS</span>  <span className=" text-yellow-400 border border-yellow-400 border-x-0 ">VENTURES</span> 
          <div> <span className="text-xs mt-1 bg-white text-[#003B5C] ">POWER AND SUCCESS INSPIRE LIFE</span></div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700]">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700]">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700]">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700]">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 mb-4">
          <a href="#" className="p-2 border border-white rounded hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-2 border border-white rounded hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 border border-white rounded hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 border border-white rounded hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
            <Skype size={20} />
          </a>
        </div>

        <div className="text-center pt-4 mt-4 border-t border-gray-600">
          <p className="text-gray-300">Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

