import { Play } from "lucide-react"

const HeroBg = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between mt-13 items-center">
        <div className="leftContents space-y-4">
            <div className="ping bg-[#E1E7FF] w-fit py-2 px-4 rounded-full flex items-center gap-2">
      <div class="inline-grid *:[grid-area:1/1]">
  <div class="status status-primary animate-ping"></div>
  <div class="status status-primary"></div>
      </div> <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">New: AI-Powered Tools Available</a>
             </div>
             <h1 className="text-[72px] leading-20.5 font-bold">Supercharge Your <br /> Digital Workflow</h1>
             <p className="text-[18px] leading-7 text-gray-400">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
             <div className="flex gap-4">
             <div>
             <button className="border rounded-full p-3 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Products</button>
             </div>
             <div>
                 <button className="btn bg-transparent flex gap-1 border border-[#4F39F6] rounded-full p-3 hover:bg-[#4F39F6] hover:text-white "> <Play className="text-[#4F39F6] hover:text-white" />  Watch Demo</button>
             </div>
             </div>
        </div>
        <div className="rightContent">
                <img src="../src/assets/banner.png" alt="" className="h-fit" />
        </div>
    </div>
  )
}

export default HeroBg
