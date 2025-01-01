import { Button } from "../ui/button";

export function Navbar() {
  const navItems = ["Sign Up"];

  return (
    <nav className=" border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold text-white">Dreamside</div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button key={item} variant="outline" className="text-muted-foreground bg-primary text-md font-semibold text-black hover:text-foreground">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}