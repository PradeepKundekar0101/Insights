
import Link from 'next/link';

import { ModeToggle } from '../../components/ui/toggle-button';

const Layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
            <div className='flex'>
                <div className='h-screen bg-slate-50 shadow-md dark:bg-[#1a1c24] w-[18vw] flex flex-col'>
                    <h1 className='logo'>INSIGHTS</h1>
                    <div className='links-container flex flex-col items-start pl-4 my-4'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-blue-500 cursor-pointer py-2 rounded-lg px-2 text-lg' ><Link className='w-full' href="/dashboard">Dashboard</Link></li>
                            <li className='w-full hover:bg-blue-500 cursor-pointer py-2 rounded-lg px-2 text-lg'><Link className='w-full' href="/dashboard/products">Products</Link></li>
                            <li className='w-full hover:bg-blue-500 cursor-pointer py-2 rounded-lg px-2 text-lg'><Link className='w-full' href="/dashboard/users">Users</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full max-h-screen overflow-y-auto'>
                    <nav className='bg-slate-100 shadow-md dark:bg-[#1a1c24] fixed top-0 w-[83.7vw] flex justify-end z-[1000] text-white p-2'>
                        <ModeToggle/>
                    </nav>
                    <div>
                        {children}
                    </div>
                </div>
        </div>
    );
};

export default Layout;
