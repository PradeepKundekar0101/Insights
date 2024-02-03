import Link from 'next/link'
const Layout = ({
    children, 
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='flex'>
        <div className="sideBar bg-slate-200 shadow-xl dark:bg-black h-screen dark:text-white w-[18%]">
            <ul>
                <li> 
                    <Link href={'/dashboard'}> Sales</Link>
                </li>
                <li> 
                    <Link href={'/dashboard/products'}> Products</Link>
                </li>
                <li> 
                    <Link href={'/dashboard/users'}>Users</Link>
                </li>
            </ul>
        </div>
        {children}
    </div>
  )
}

export default Layout