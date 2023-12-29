import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <main className="">
            <div className="flex flex-col items-center bg-[#1E1919] lg:flex-row dark:bg-slate-800">
                <div className="flex flex-col space-y-5 bg-[#2B2929] p-10 text-white dark:bg-slate-800">
                    <h1 className="text-5xl font-bold">
                        Welcome to Chest. <br />
                        <br />
                        Storing everything for you and your business needs. All in one place
                    </h1>

                    <p className="pb-20">
                        Enhance your personal storage with Chest, offering a simple and efficient way to upload,
                        organize, and access files from anywhere. Securely store important documents and media, and
                        experience the convenience of easy file management and sharing in one centralized solution.
                    </p>

                    <Link href="/dashboard" className="flex w-fit cursor-pointer bg-blue-500 p-5 ">
                        Try it for free!
                        <ArrowRight className="ml-10" />
                    </Link>
                </div>

                <div className="h-full bg-[#1E1919] p-10 dark:bg-slate-800">
                    <video autoPlay loop muted className="rounded-lg">
                        <source
                            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <p className="pt-5 text-center text-xl font-bold">Disclaimer</p>
            <p className="p-2 text-center font-light">
                This video is made for informational and educational purposes only. We do not own or affiliate with
                Dropbox or/and any of its subsidiaries in any form. Copyright Disclaimer under section 107 of the
                Copyright Act 1976, allowance is made for “fair use” of this video for education purposes.
            </p>
        </main>
    )
}
