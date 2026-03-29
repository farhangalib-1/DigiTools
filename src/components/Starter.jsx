const Starter = () => {
  return (
    <div className="bg-gray-100 mt-30 pb-30">
        <h1 className="pt-30 text-5xl font-bold mb-4 text-center">Get Started in 3 Steps</h1>
        <p className="text-gray-500 text-center mb-10">Start using premium digital tools in minutes, not hours.</p>
        <div className="cards grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-7.5">
             <div className="card shadow p-6 text-center bg-white">
                <div className="text flex justify-end"><h1 className="w-fit border px-2 py-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">01</h1></div>
                <div className="flex justify-center mt-7 mb-4">
               <div className="border border-[#e6dbfd] w-fit p-6 rounded-full bg-[#f1ebff]">
                <img className="w-10 h-10" src="../src/assets/user.png" alt="" />
                </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                <p className="text-[#627382] mb-22">Sign up for free in seconds. No credit card <br /> required to get started..</p>
            </div>
            <div className="card shadow p-6 text-center bg-white">
                <div className="text flex justify-end"><h1 className="w-fit border px-2 py-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">02</h1></div>
                <div className="flex justify-center mt-7 mb-4">
               <div className="border border-[#e6dbfd] w-fit p-6 rounded-full bg-[#f1ebff]">
                <img className="w-10 h-10" src="../src/assets/package.png" alt="" />
                </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Choose Products</h1>
                <p className="text-[#627382] mb-22">Browse our catalog and select the tools<br /> that fit your needs.</p>
            </div>
            <div className="card shadow p-6 text-center bg-white">
                <div className="text flex justify-end"><h1 className="w-fit border px-2 py-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">03</h1></div>
                <div className="flex justify-center mt-7 mb-4">
               <div className="border border-[#e6dbfd] w-fit p-6 rounded-full bg-[#f1ebff]">
                <img className="w-10 h-10" src="../src/assets/rocket.png" alt="" />
                </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Start Creating</h1>
                <p className="text-[#627382] mb-22">Download and start using your premium <br /> tools immediately.</p>
            </div>
        </div>
    </div>
  )
}

export default Starter
