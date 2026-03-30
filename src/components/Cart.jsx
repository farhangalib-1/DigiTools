import { ShoppingCart } from "lucide-react"

const Cart = ({addCartProducts}) => {
  console.log(addCartProducts);
  
  return (
    <div className="w-10/12 mx-auto border border-gray-300 rounded-lg text-center py-40
    mt-4">
        <div className="flex justify-center text-gray-600 mb-4">
        <ShoppingCart size={100} />
        </div>
      <h1 className="font-semibold text-gray-500">No products are here</h1>
    </div>
  )
}

export default Cart
