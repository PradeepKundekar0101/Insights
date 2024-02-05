"use client"
const ErrorBoundary = ({error}:{error:Error}) => {
  return (
    <div className="h-screen flex items-end justify-center"><h1 className="dark:text-white text-2xl">{error.message}</h1></div>
  )
}

export default ErrorBoundary