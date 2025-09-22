import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()
    return (
        <div className="containerDashboard text-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user.name}!</h5>
            <Image src={user.image} alt={user.name} width={250} height={250} className="rounded-full"/>  
            <div className="collection flex flex-wrap gap-4">
                <Link 
                href="/users/dashboard/collection" 
                className="bg-accent text-dark font-bold collectionButton text-xl rounded"
                >
                    My Collection
                </Link>
                <Link 
                href="/users/dashboard/comment" 
                className="bg-accent text-dark font-bold collectionButton text-xl rounded"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page