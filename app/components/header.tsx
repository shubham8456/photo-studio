import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 w-full sticky top-0 z-50 bg-[#E0E5EC] dark:bg-slate-900 border-none shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] dark:shadow-none">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-slate-800 dark:text-white uppercase font-sans tracking-widest"
        >
          Photo.Studio
        </Link>
      </div>
    </header>
  );
};

export default Header;
