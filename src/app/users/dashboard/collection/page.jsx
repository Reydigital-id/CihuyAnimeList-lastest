import Header from "@/components/Dashboard/Header";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="collectionPage w-full">
      <Header title={"My Collection"}/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="" className="relative border-2 border-accent">
          <Image src="" alt="" className="w-full" width={350} height={350} />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-accent">
          <Image src="" alt="" className="w-full" width={350} height={350} />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-accent">
          <Image src="" alt="" className="w-full" width={350} height={350} />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-accent">
          <Image src="" alt="" className="w-full" width={350} height={350} />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
