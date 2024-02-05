"use client"
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import { ModeToggle } from '../../components/ui/toggle-button';

const Layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
            <div className='flex'>
                <div className='h-screen bg-slate-50 shadow-md dark:bg-[#1a1c24] w-[18vw]'>
                    <Accordion type="single" className='h-full' collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger> <Link href={"/dashboard"}>Dashboard</Link></AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Users</AccordionTrigger>
                            <AccordionContent>
                                <Link href={"/dashboard/users"}>Analytics</Link>
                            </AccordionContent>
                            <AccordionContent>
                                <Link href={"/dashboard/users/tables"}>Tables</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Products</AccordionTrigger>
                            <AccordionContent>
                                <Link href={"/dashboard/products/"}>Analytics</Link>
                            </AccordionContent>
                            <AccordionContent>
                                <Link href={"/dashboard/users/tables"}>Tables</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
 {/* <div className='flex overflow-hidden'>
                <div className='w-1/5 h-full  bg-gray-200 dark:bg-black dark:text-white'>
                   
                </div>
                <div className='overflow-y-scroll'>
                    {children}
                </div>
            </div> */}