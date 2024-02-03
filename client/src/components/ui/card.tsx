
const card = ({label,value}:{label:string,value:string}) => {
  return (
    <div className="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
    <div className="text-base text-gray-400 dark:text-gray-300">{label}</div>
    <div className="flex items-center pt-1">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
        <span className="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>1.8%</span>
        </span>
    </div>
</div>
  )
}

export default card