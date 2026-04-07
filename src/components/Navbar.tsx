import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Strona główna", path: "/" },
  { label: "Wyjazdy wakacyjne", path: "/wyjazdy-wakacyjne" },
  { label: "Transfery lotniskowe", path: "/transfery-lotniskowe" },
  { label: "Wynajem z kierowcą", path: "/wynajem-z-kierowca" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
          Twój<span className="text-secondary">Transporter</span>.pl
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors font-heading ${
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+48606988383" className="flex items-center gap-2 text-sm font-semibold text-primary font-heading">
            <Phone className="w-4 h-4" />
            606 988 383
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-b border-border pb-4">
          <div className="container flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium font-heading transition-colors ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+48606988383" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary font-heading">
              <Phone className="w-4 h-4" />
              606 988 383
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
