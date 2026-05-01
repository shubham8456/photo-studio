const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "center", fontSize: "0.8rem", marginTop: "25px", paddingBottom: "20px" }}>
      <span style={{ marginRight: "10px" }}>© {new Date().getFullYear()} Shubham Rawat</span>
      <nav aria-label="Bottom navigation">
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
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
