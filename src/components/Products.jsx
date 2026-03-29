import { useState } from "react"
import Card from "./Card";

const Products = ({data}) => {
    const[active, setActive] = useState("Products");
  return (
    <div>
        <div className="TextContents w-10/12 mx-auto mt-30 text-center">
            <h1 className="text-6xl font-bold mb-4">Premium Digital Tools</h1>
            <p className="leading-5 text-[#627382] mb-4">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className="border border-gray-300 rounded-full w-fit inline pl-1 pr-1 py-3 space-x-4">
            <button onClick={()=>{setActive("Products")}} className={`text-[16px] 
                ${active==='Products'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl':"text-black bg-transparent" } px-5 py-2 rounded-full font-semibold   cursor-pointer`}>Products</button>
            <button onClick={()=>{setActive("Cart")}} className={`text-[16px]  ${active==='Cart'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl':"text-black bg-transparent" } px-5 py-2 rounded-full font-semibold cursor-pointer`}>Cart</button>
            </div>
        </div>
        <div className="All Products grid grid-cols-3 w-fit mx-auto gap-10 items-center mt-4">
            {
                data.map(el=><Card  />)
            }
        </div>
    </div>
  )
}

export default Products
