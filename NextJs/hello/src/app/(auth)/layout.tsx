// () is called Route Groups, and it is used to logically GROUP our 
// routes and project files
// WITHOUT AFFECTING THE PATH STRCUTURE
//      this feature is KIND OF similar to private folder, named with, _ prefix


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css'
import { useState } from "react";
const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    // Templates : If we rename this file to template.tsx then whenever we click on any link the state
    // will not be preserved. This whole component will get remounted.
    const [input, setInput] = useState('');

    return (
        <div>
            <div>
                <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)} 
                    placeholder="enter something"
                    style={{border: "1px solid black"}}
                />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                        className={isActive ? "font-bold mr-4": "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}