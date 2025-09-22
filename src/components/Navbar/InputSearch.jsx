"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter()
  
  const handleSearch = (e) => {
    const keyword = searchRef.current.value

    if(!keyword || keyword.trim() === "") return

    if (event.key === "Enter" || event.type === "click") {
      e.preventDefault()
      router.push(`/search/${keyword}`)
    } 
  }

  return (
    <div className="relative">
      <input
        placeholder="Cari anime..."
        className="w-full font-normal rounded"
        ref={searchRef}
        onKeyDown={handleSearch}    
      />
      <button className="absolute top-1 end-2 cursor-pointer" onClick={handleSearch}>
        <MagnifyingGlass size={24} id="btnSearch" className="hover: white ease-in-out 0.5s"/>
      </button>
    </div>
  );
};

export default InputSearch;
