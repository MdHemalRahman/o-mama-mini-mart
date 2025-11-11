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
    
    const faqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFaqInView(entry.isIntersecting);
        });
      },
      { 
        threshold: 0,
        rootMargin: "-80px 0px -85% 0px"
      }
    );

    if (faqSection) faqObserver.observe(faqSection);
    
    return () => {
      faqObserver.disconnect();
    };
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "The Experience" },
    { path: "/platform", label: "Platform" },
    { path: "/partnership", label: "Partnership" },
    { path: "/menu", label: "Food & Freshness" },
    { path: "/#faq", label: "FAQ", isAnchor: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor?: boolean) => {
    if (isAnchor && path.includes("#")) {
      e.preventDefault();
      const [pathname, hash] = path.split("#");
      
      if (location.pathname === pathname || (pathname === "" && location.pathname === "/")) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = path;
      }
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/#faq") {
      return location.pathname === "/" && isFaqInView;
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between pb-2" style={{ height: '60px' }}>
          <Link to="/" className="flex items-center space-x-3" onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>
            <div className="text-3xl font-bold text-primary">O Mama</div>
          </Link>

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
            <Button asChild className="ml-4" style={{backgroundColor: '#F0FFF0', color: '#0c0d0c'}}>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
              <Button asChild className="mt-4" style={{backgroundColor: '#F0FFF0', color: '#0c0d0c'}}>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
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