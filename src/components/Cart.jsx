import { ShoppingCart } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({addCartProducts, setAddCartProducts}) => {
  const notify = () => toast.success("Your order is placed successfully");
  const remove = (id) =>{
    const updatedCart = addCartProducts.filter(el => el.id !== id);
    setAddCartProducts(updatedCart);
  }
const deleteData = () =>{
  notify();
  setAddCartProducts([]);
}
  console.log(addCartProducts);
 const totalPrice = addCartProducts.reduce((sum, el) => sum + el.price, 0);
  return (
    <>
    {
      addCartProducts.length === 0 ? <div className="w-10/12 mx-auto border border-gray-300 rounded-lg text-center py-40
    mt-4">
        <div className="flex justify-center text-gray-600 mb-4">
        <ShoppingCart size={100} />
        </div>
      <h1 className="font-semibold text-gray-500">No products are here</h1>
    </div> : <div className=" mt-10 w-10/12 mx-auto border border-gray-300 rounded-lg p-10">
    <h1 className="text-3xl font-semibold">Your cart</h1>
      {
        addCartProducts.map(el=>{
          return <div key={el.id} className="bg-gray-100 mb-6 p-5 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-4">
          <div className="image border border-gray-200 p-4 rounded-full bg-white">
            <img src={el.icon} alt="" />
          </div>
          <div className="">
          <h1 className="text-2xl font-semibold">{el.name}</h1>
          <p className="text-xl text-gray-500">${el.price}</p>
          </div>
          </div>
          <button onClick={()=>remove(el.id)} className="font-semibold text-red-500 cursor-pointer">Remove</button>
          </div>
          
        })
      }
     <div className="price flex justify-between">
      <h1 className="text-xl text-gray-500">total</h1>
      <h1 className="text-2xl font-semibold">${totalPrice}</h1>
     </div>
     <button onClick={deleteData} className="btn w-full mt-3 py-6 rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
      </div>
    }
    </>
  )
}

export default Cart
