import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">O Mama</h3>
            <p className="text-sm mb-4 opacity-90">
              Fresh Food · Smart Life
            </p>
            <p className="text-sm opacity-75">
              Bangladesh's First Smart Freezer Solution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/experience" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">
                  The Experience
                </Link>
              </li>
              <li>
                <Link to="/platform" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">
                  Technology Platform
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">
                  Partnership Terms
                </Link>
              </li>
              <li>
                <Link to="/menu" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">
                  Food & Freshness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2 opacity-75">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Flat #C2, House #29, Kaderabad, Katasur,<br />
                  Mohammadpur, Dhaka-1207
                </span>
              </div>
              <div className="flex items-center space-x-2 opacity-75">
                <Mail size={16} className="flex-shrink-0" />
                <span>www.sohub.com.bd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Solution Hub Technologies (SOHUB). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
