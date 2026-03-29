import axios from 'axios'
import './App.css'
import HeroBg from './components/HeroBg'
import Navbar from './components/Navbar'
import Stat from './components/Stat'
import { useEffect, useState } from 'react'
import Products from './components/Products'
import Starter from './components/Starter'
import Pricing from './components/Pricing'
const App = () => {
  const[data, setData] = useState([]);
  const [pricedata, setPriceData] = useState([]);
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
    <Products data={data} />
    <Starter />
    <Pricing pricedata={pricedata} />
    </>
  )
}

export default App
