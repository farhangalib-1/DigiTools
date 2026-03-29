import axios from 'axios'
import './App.css'
import HeroBg from './components/HeroBg'
import Navbar from './components/Navbar'
import Stat from './components/Stat'
import { useEffect, useState } from 'react'
import Products from './components/Products'
const App = () => {
  const[data, setData] = useState([]);
  const ProductsData = async () =>{
      const res = await axios.get("/Product.json")
      setData(res.data);
      
  }
  useEffect(()=>{
    ProductsData();
  }, [])

  
  return (
    <>
    <Navbar />
    <HeroBg />
    <Stat />
    <Products data={data} />
    </>
  )
}

export default App
