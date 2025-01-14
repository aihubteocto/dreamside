import { Sidebar } from "@/components/layout/Sidebar";
import "@/styles/globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-secondary font-outfit">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-white">
        {children}
      </main>
    </div>
  );
}