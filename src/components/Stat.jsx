const Stat = () => {
  return (
    <div className="mt-9 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
        <div className=" w-10/12 mx-auto grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-3 justify-between py-15 px-10">
            <div className="">
                <h1 className="text-[60px] font-bold text text-center">50K+</h1>
                <p className="text-center text-gray-300">Active Users</p>
            </div>
            <div className="md:border-l-2 md:border-gray-300 md:border-r-2 ">
                <h1 className="text-[60px] font-bold text-center">200+</h1>
                <p className="text-center text-gray-300">Premium Tools</p>
            </div>
            <div className="">
                <h1 className="text-[60px] font-bold text-center">4.9</h1>
                <p className="text-center text-gray-300">Rating</p>
            </div>
            </div>
    </div>
  )
}

export default Stat
