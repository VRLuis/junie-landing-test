import Logo from "@/components/atoms/Logo";
import NavItem from "@/components/molecules/NavItem";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950">
      <nav className="max-w-4xl mx-auto flex h-14 items-center justify-between px-8">
        <a href="/" className="text-white">
          <Logo className="h-7 w-auto" />
        </a>
        <div className="flex items-center gap-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>
      </nav>
    </header>
  );
}
