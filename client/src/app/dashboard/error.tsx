"use client"
import Image from 'next/image'
const ErrorBoundary = ({error}:{error:Error}) => {
  return (
    <div className="h-screen flex items-center justify-center flex-col"><h1 className="dark:text-white text-4xl font-bold">{error.message}</h1>
    <img className="h-20 w-20" src="https://myoperator.com/blog/wp-content/uploads/2022/08/boy-1300226_1280.png" alt="" /></div>
  )
}

export default ErrorBoundary