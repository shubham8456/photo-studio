import Link from "next/link"
import { Gajraj_One } from "next/font/google";

const gajrajOne = Gajraj_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
});

const Header = () => {
  return (
    <header className="text-center px-8 py-4 w-full sticky top-0 z-50 bg-[#E0E5EC] border-none shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]">
      <Link
        href="/"
        className={`text-2xl font-black text-slate-800 uppercase ${gajrajOne.className}`}
      >
        रावत HILLBORN
      </Link>
    </header>
  );
};

export default Header;
