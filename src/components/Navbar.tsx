
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NotificationBell from "./NotificationBell";
import LoyaltyTracker from "./LoyaltyTracker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Sun className="w-10 h-10 text-sunflower-500 animate-spin-slow" />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl">
              Sunflower <span className="text-sunflower-500">Cleaning</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-sunflower-600 font-semibold"
                    : "text-gray-700 hover:text-sunflower-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <NotificationBell />
              <LoyaltyTracker />
              <Button asChild>
                <Link to="/booking" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-sunflower-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-4 flex justify-between items-center border-b">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Sun className="w-8 h-8 text-sunflower-500" />
              <span className="font-heading font-bold text-xl">
                Sunflower <span className="text-sunflower-500">Cleaning</span>
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-500 hover:text-sunflower-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-4 rounded-md text-base font-medium border-b",
                  location.pathname === link.path
                    ? "text-sunflower-600 font-semibold border-sunflower-400"
                    : "text-gray-700 hover:text-sunflower-500 border-gray-100"
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 p-3 border-b border-gray-100">
              <NotificationBell />
              <LoyaltyTracker />
            </div>
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link to="/booking" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
