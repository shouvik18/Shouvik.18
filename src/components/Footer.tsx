function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="creator">&copy; {currentYear} Shouvik Pal</p>
    </footer>
  );
}

export default Footer;
