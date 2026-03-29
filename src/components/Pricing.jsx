import PricingCard from "./PricingCard"

const Pricing = ({pricedata}) => {
  return (
    <div>
    <div className="text-center mt-30 ">
      <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
      <p className="text-[#627382] mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="allPricingCard w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        pricedata.map((el, idx)=><PricingCard name={el.name} description={el.description} price={el.price} period={el.period} features={el.features} tag={el.tag} buttonText={el.buttonText}/>)
      }
      
      </div>
    </div>
  )
}

export default Pricing
