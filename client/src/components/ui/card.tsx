
const card = ({label,value}:{label:string,value:string}) => {
  return (
    <div className="p-5 bg-slate-100 rounded shadow-md dark:bg-gray-800">
    <div className="text-base text-gray-400 dark:text-gray-300">{label}</div>
    <div className="flex items-center pt-1">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
        
    </div>
</div>
  )
}

export default card