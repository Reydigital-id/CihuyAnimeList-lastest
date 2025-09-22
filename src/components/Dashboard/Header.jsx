"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";

const Header = ({title}) => {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  }

  return (
    <div className="MyCollection flex justify-between items-center">
      <span className="text-primary cursor-pointer hover:text-accent" onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </span>
      <h3 className="text-2xl text-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
