import axios from 'axios'
import './App.css'
import HeroBg from './components/HeroBg'
import Navbar from './components/Navbar'
import Stat from './components/Stat'
import { useEffect, useState } from 'react'
import Products from './components/Products'
import Starter from './components/Starter'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Lastfooter from './components/Lastfooter.jsx'
 import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const[data, setData] = useState([]);
  const [pricedata, setPriceData] = useState([]);
  const[addCartProducts, setAddCartProducts] = useState([]);
  const ProductsData = async () =>{
      const res = await axios.get("/Product.json")
      setData(res.data);  
  }
   const priceData = async () =>{
      const res = await axios.get("/Price.json")
      setPriceData(res.data);  
  }
  
  useEffect(()=>{
    ProductsData();
    priceData()
  }, [])

  
  
  return (
    <>
    <Navbar />
    <HeroBg />
    <Stat />
    <Products data={data} addCartProducts={addCartProducts} setAddCartProducts={setAddCartProducts}  />
    <Starter />
    <Pricing pricedata={pricedata} />
    <ToastContainer autoClose={3000} />
    <Footer />
    <Lastfooter />
    </>
  )
}

export default App
