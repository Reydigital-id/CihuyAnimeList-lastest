import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="judulPopuler flex justify-between items-center">
      <h1 className="text-3xl text-white font-medium">{title}</h1>
      {
        linkHref && linkTitle 
        ?
       <Link
        href={linkHref}
        className="md:text-xl text-sm underline text-primary hover:text-accent transition-all"
        >
        {linkTitle}
        </Link>
       :null
      }


    </div>
  );
};

export default Header;
