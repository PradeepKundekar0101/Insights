
import { MdAttachMoney } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiBabyFill } from "react-icons/pi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbCategoryFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

import { NumberTransition } from "./numberTransition";

const getLogo=(type:string)=>{
  switch (type) {
    case "money":
      return <MdAttachMoney />
    case "order":
      return <FaCartShopping/>
    case "conversion":
      return <RiLoopLeftFill />
    case "user":
      return <FaUser/>

    case "age":
      return <PiBabyFill/>

    case "product":
      return <HiMiniDevicePhoneMobile />
     
    case "category":
        return <TbCategoryFilled />

    case "rating":
      return <FaStar/>
    default:
      break;
  }
  return <></>
}
const card = ({label,value,type,symbol}:{label:string,value:number,symbol?:string,type?:string}) => {
  return (
    <div className="p-5 bg-slate-100 rounded shadow-md dark:bg-[#1a1c24]">
    <div className="text-base text-gray-400 dark:text-gray-300">{label}</div>
    <div className="flex items-center justify-between pt-1">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">  <NumberTransition end={value} duration={3} /> {symbol}</div>
       {type && <span className="text-4xl dark:text-white bg-slate-300 dark:bg-slate-800 rounded-full p-3">{getLogo(type)}</span>}
    </div>
</div>
  )
}

export default card