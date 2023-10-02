type NavProps = {
  className?: string;
};

export default function NavLink({ className }: NavProps) {
  return (
    <nav className={className}>
      <a href="/" className="navLink">
        Home
      </a>
      <a href="#about" className="navLink">
        About
      </a>
      <a href="#experience" className="navLink">
        Work
      </a>
      <a href="#projects" className="navLink">
        Projects
      </a>
      <a href="#contact" className="navLink">
        Contact
      </a>
    </nav>
  );
}
