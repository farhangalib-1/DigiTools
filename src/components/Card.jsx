const Card = (props) => {
  return (
   <div className="card max-w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex justify-end">
    <span className="badge badge-lg rounded-full badge-warning">{props.tag}</span>
    </div>
    <div className="border-2 border-gray-300 p-3 overflow-hidden rounded-full w-fit">
        <img src={props.icon} alt="" />
    </div>
    <div className="flex justify-between">
      <h2 className="text-xl font-medium">{props.name}</h2>
    </div>
    <div>
        <p className="text-gray-500">{props.description}</p>
    </div>
    <span className="text-2xl font-semibold">${props.price}/<span className="text-lg text-gray-500"> {props.period} </span></span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
            props.features.map(el=>{
            return  <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="text-sm text-gray-500">{el}</span>
      </li>
            })
        }
      
      
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card
