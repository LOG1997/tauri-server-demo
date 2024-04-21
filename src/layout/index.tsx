import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import {
    TooltipProvider,
} from "@/components/ui/tooltip"
import NavBar from './Header/NavBar'
export default function Layout() {
    return (
        <div className='flex w-full h-full'>
            <Toaster />
            <div className='w-20'>
                <TooltipProvider>
                    <NavBar></NavBar>
                </TooltipProvider>
            </div>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    );
}