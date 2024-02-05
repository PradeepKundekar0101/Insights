"use client"
import { MdAttachMoney } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import CountUp from 'react-countup';

const getLogo=(type:string)=>{
  switch (type) {
    case "money":
      return <MdAttachMoney />
    case "order":
      return <FaCartShopping/>
    case "conversion":
      return <RiLoopLeftFill />
    default:
      break;
  }
  return <></>
}
const card = ({label,value,type,symbol}:{label:string,value:number,symbol?:string,type?:"money"|"order"|"conversion"}) => {
  return (
    <div className="p-5 bg-slate-100 rounded shadow-md dark:bg-[#1a1c24]">
    <div className="text-base text-gray-400 dark:text-gray-300">{label}</div>
    <div className="flex items-center justify-between pt-1">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100"><CountUp duration={2} end={value} /> {symbol}</div>
       {type && <span className="text-4xl dark:text-white bg-slate-800 rounded-full p-3">{getLogo(type)}</span>}
    </div>
</div>
  )
}

export default card