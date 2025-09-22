import Link from "next/link";
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="navbar flex md:flex-row flex-col justify-between md:items-center gap-2">
        <Link href="/" className="font-bold text-2xl">
          CihuyAnimeList
        </Link>
        <InputSearch/>
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;
