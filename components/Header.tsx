import Image from "next/image"
import Link from "next/link"
import React from "react"
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import { ThemeToggler } from "./ThemeToggler"
import { PackageOpen } from "lucide-react"

function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-fit bg-[#0160FE]">
                    <PackageOpen className="p-2" color="#fff" strokeWidth={1.5} height={50} width={50} />
                </div>
                <h1 className="text-xl font-bold">Chest</h1>
            </Link>

            <div className="flex items-center space-x-2 px-5">
                {/* Theme toggler */}
                <ThemeToggler />

                <UserButton afterSignOutUrl="/" />

                <SignedOut>
                    <SignInButton afterSignInUrl="/dashboard" mode="modal" />
                </SignedOut>
            </div>
        </header>
    )
}

export default Header
