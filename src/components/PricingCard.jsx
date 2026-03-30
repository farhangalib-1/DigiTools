
const PricingCard = (props) => {
  return (
    <div>
    <div className="card max-w-96 bg-gray-100 rounded-2xl shadow-sm">
  <div className={`card-body ${props.tag==='Most Popular' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl'} relative`}>
    {
        props.tag === null || <div className="flex justify-center absolute -top-4 md:left-33 left-23"><span className="badge badge-lg bg-[#FEF3C6] text-[#BB4D00] rounded-full flex j badge-warning border-none">Most Popular</span></div> 
    }
    
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{props.name}</h2>
    </div>
    <div className="">
        <p>{props.description}</p>
    </div>
    <div className="">
        <span className="text-4xl font-bold">${props.price}/<span className={`text-xl text-gray-400 ${props.tag === 'Most Popular' && 'text-white'} font-medium`}>{props.period}</span> </span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
            props.features.map(feature=>{
            return <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
            })
        }
      
    </ul>
    <div className="mt-6">
      <button className={`btn ${props.tag === null ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'b bg-white'} btn-block rounded-full`}>{props.buttonText}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default PricingCard
