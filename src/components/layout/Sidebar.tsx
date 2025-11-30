import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  History,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/context/AuthContext";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function SidebarContent() {
  const { t, language, setLanguage } = useLanguage();
  const { logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "dashboard", path: "/" },
    { icon: FileText, label: "documents", path: "/documents" },
    { icon: History, label: "transactions", path: "/transactions" },
    { icon: Settings, label: "settings", path: "/settings" },
  ];

  return (
  return (
    <div className="flex h-full flex-col bg-card text-foreground">
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-xl font-bold text-primary">Nagarik</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {t(item.label)}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-border p-4">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-muted p-1">
          <button
            onClick={() => setLanguage("en")}
            className={cn(
              "flex-1 rounded-md py-1.5 text-xs font-medium transition-all",
              language === "en"
                ? "bg-background text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("np")}
            className={cn(
              "flex-1 rounded-md py-1.5 text-xs font-medium transition-all",
              language === "np"
                ? "bg-background text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            नेपाली
          </button>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
          onClick={logout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          {t("logout")}
        </Button>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="hidden h-screen w-64 border-r border-border lg:block">
      <SidebarContent />
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
