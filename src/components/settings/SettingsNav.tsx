import { cn } from "@/lib/utils";
import Link from "next/link";
interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
const navItems: NavItem[] = [
  { label: "Profile", href: "/settings/profile", active: true },
  { label: "Account", href: "/settings/account" },
  { label: "Notifications", href: "/settings/notifications" },
  { label: "Communities", href: "/settings/communities" },
  { label: "Payment Methods", href: "/settings/payment" },
  { label: "Billing", href: "/settings/billing" },
];
export function SettingsNav() {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
            item.active
              ? "bg-secondary text-secondary-foreground"
              : "text-muted-foreground hover:bg-secondary"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}