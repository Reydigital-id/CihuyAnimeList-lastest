"use client"

import { FileSearchIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen mx-auto flex justify-center items-center">
           <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex gap-2">
            <FileSearchIcon size={44} className="text-accent"/>
            <h3 className="text-accent text-4xl font-bold">NOT FOUND</h3>
            </div>
            <a onClick={() => router.back()} className="text-primary hover:text-accent underline cursor-pointer">Kembali ke halaman sebelumnya</a>
           </div>
        </div>
    )
}

export default NotFound