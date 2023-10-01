type NavProps = {
  className?: string;
};

export default function NavLink({ className }: NavProps) {
  return (
    <nav className={className}>
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Work</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
