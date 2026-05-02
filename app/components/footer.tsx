const Footer = () => {
  return (
    <footer className="flex justify-center text-sm mt-[25px] pb-[20px]">
      <span className="mr-[10px]">© {new Date().getFullYear()} Shubham Rawat</span>
      <nav aria-label="Bottom navigation">
        <ul className="flex list-none gap-[10px]">
          <span>|</span>
          <li className="hover:text-gray-500"><a href="https://www.instagram.com/rawat_hillborn/" target="_blank" rel="noreferrer">Instagram</a></li>
          <span>|</span>
          <li className="hover:text-gray-500"><a href="https://www.linkedin.com/in/rawat-shubham" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <span>|</span>
          <li className="hover:text-gray-500"><a href="mailto:shubham8456@gmail.com">e-mail</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
