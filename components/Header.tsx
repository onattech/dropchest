import Image from "next/image"
import Link from "next/link"
import React from "react"
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"

function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-fit bg-[#0160FE]">
                    <Image
                        src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                        alt="logo"
                        className="invert"
                        height={50}
                        width={50}
                    />
                </div>
                <h1 className="text-xl font-bold">Dropchest</h1>
            </Link>

            <div className="flex items-center space-x-2 px-5">
                {/* Theme toggler */}

                <UserButton afterSignOutUrl="/" />

                <SignedOut>
                    <SignInButton afterSignInUrl="/dashboard" mode="modal" />
                </SignedOut>
            </div>
        </header>
    )
}

export default Header
