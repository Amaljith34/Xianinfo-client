import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Power and <span className="text-yellow-400">Success</span>
                <br />
                <span className="text-yellow-400">Inspired</span> Life
              </h1>
              
              <div className="space-y-4  text-xl">
                <p>
                  Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful.
                </p>
                <p>
                  Thank you for choosing us as your gateway to a secure life.
                </p>
                <p>
                  Let's travel together, have a better tomorrow.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-[#003B5C] text-white rounded hover:bg-[#002241] transition-colors" onClick={()=>navigate('/payment')}>
                  Online Courses
                </button>
                <button className="px-8 py-3 border-2 border-black  rounded hover:bg-gray-50 transition-colors"  onClick={()=>navigate('/login')}>
                  Videos
                </button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={`src/assets/img1.jpeg`}
                alt="People collaborating"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

