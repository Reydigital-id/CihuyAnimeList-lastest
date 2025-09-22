"use client"

import { FileSearchIcon } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen mx-auto flex justify-center items-center">
           <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex gap-2">
            <FileSearchIcon size={44} className="text-accent"/>
            <h3 className="text-accent text-4xl font-bold">NOT FOUND</h3>
            </div>
            <Link href="/" className="text-primary hover:text-accent underline">Kembali ke halaman utama</Link>
           </div>
        </div>
    )
}

export default NotFound