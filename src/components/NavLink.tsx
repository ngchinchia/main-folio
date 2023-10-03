type NavProps = {
  className?: string;
};

export default function NavLink({ className }: NavProps) {
  return (
    <nav className={className}>
      <a href="/" className="navLink">
        <span className="text-[#4831d4] text-sm">01-</span>Home
      </a>
      <a href="#about" className="navLink">
        <span className="text-[#4831d4] text-sm">02-</span>About
      </a>
      <a href="#experience" className="navLink">
        <span className="text-[#4831d4] text-sm">03-</span>Work
      </a>
      <a href="#projects" className="navLink">
        <span className="text-[#4831d4] text-sm">04-</span>Projects
      </a>
      <a href="#contact" className="navLink">
        <span className="text-[#4831d4] text-sm">05-</span>Contact
      </a>
    </nav>
  );
}
