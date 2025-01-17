import { Bell, Search, LogOut, Moon, Settings, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex bg-gray-50">
          {/* Sidebar */}
          <aside className="w-64 border-r bg-white fixed h-full">
            <div className="p-4">
              <img src="/placeholder.svg" alt="Logo" className="h-8" />
            </div>

            <nav className="mt-4">
              <NavItem
                href="/"
                icon={<Home className="h-4 w-4" />}
                label="Inventory Analysis"
              />
              <NavItem
                href="/demand-forecasts"
                icon="📈"
                label="Demand Forecasts"
              />
              <NavItem
                href="/inventory-optimization"
                icon="📦"
                label="Inventory Optimization"
              />
              <NavItem
                href="/purchase-orders"
                icon="📋"
                label="Purchase Orders"
              />
              <NavItem
                href="/allocation"
                icon="🔄"
                label="Inventory Allocation"
              />
              <NavItem href="/documentation" icon="📚" label="Documentation" />

              <div className="mt-8 px-4 py-2 text-sm text-gray-500">
                ACCOUNT PAGES
              </div>
              <NavItem href="/profile" icon="👤" label="Profile" />
              <NavItem href="/logout" icon="🚪" label="Logout" />
            </nav>

            {/* Help Widget */}
            <div className="absolute bottom-8 left-8 p-4 bg-gray-200 rounded-lg w-48">
              <h4 className="text-sm font-medium mb-2">Need help?</h4>
              <Button variant="secondary" className="w-full text-sm">
                CONTACT SUPPORT
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 ml-64">
            {/* Header */}
            <header className="h-16 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Input placeholder="Type here..." className="w-64" />
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Moon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </header>

            {/* Page Content */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode | string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
    >
      {typeof icon === "string" ? <span>{icon}</span> : icon}
      <span>{label}</span>
    </a>
  );
}
