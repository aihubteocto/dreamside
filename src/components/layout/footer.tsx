import { Button } from "../ui/button";

export function Footer() {
  const navItems = ["Sign Up"];

  return (
    <nav className=" border-border border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold text-white">Dreamside</div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <p key={item} className="text-muted-foreground text-black hover:text-foreground">
              {item}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}