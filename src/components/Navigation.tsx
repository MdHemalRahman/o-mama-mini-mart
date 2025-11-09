import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFaqInView, setIsFaqInView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const faqSection = document.getElementById("faq");
    if (!faqSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFaqInView(entry.isIntersecting);
        });
      },
      { 
        threshold: 0,
        rootMargin: "-80px 0px -85% 0px" // Only detect top portion of FAQ section
      }
    );

    observer.observe(faqSection);
    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "The Experience" },
    { path: "/platform", label: "Technology" },
    { path: "/partnership", label: "Partnership" },
    { path: "/menu", label: "Food & Freshness" },
    { path: "/#faq", label: "FAQ", isAnchor: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor?: boolean) => {
    if (isAnchor && path.includes("#")) {
      e.preventDefault();
      const hash = path.split("#")[1];
      const element = document.getElementById(hash);
      
      if (location.pathname === "/" && element) {
        // Already on home page, just scroll
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Navigate to home page first, then scroll
        window.location.href = path;
      }
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path === "/#faq") {
      return location.pathname === "/" && isFaqInView;
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">O Mama</div>
            <div className="hidden sm:block text-sm text-muted-foreground border-l pl-3 ml-3 border-border">
              Fresh Food · Smart Life
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path, link.isAnchor)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path, link.isAnchor)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request a Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
