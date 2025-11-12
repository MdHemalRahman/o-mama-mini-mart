import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import paymentImage from "@/assets/payment.png";

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#F0FFF0', color: '#0c0d0c'}}>
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#014721'}}>O Mama</h3>
            <p className="text-sm mb-4 opacity-90">
              Fresh Food · Smart Life
            </p>
            <p className="text-sm opacity-75">
              Smart Freezer Solution in Bangladesh
            </p>

            {/* Social Media Links */}
            <h4 className="font-semibold mt-6 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/solutionhubtechnologies/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/solutionhubtechnologies?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@solutionhubtechnologysohub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.linkedin.com/company/solution-hub-technologie-sohub?originalSubdomain=bd" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/experience" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)}>
                  The Experience
                </Link>
              </li>
              <li>
                <Link to="/platform" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)}>
                  Technology Platform
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)}>
                  Partnership & Terms
                </Link>
              </li>
              <li>
                <Link to="/menu" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)}>
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
                <span>hello@sohub.com.bd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-8 pt-8 text-center">
          <h3 className="font-semibold mb-4">We Accept</h3>
          <img
            src={paymentImage}
            alt="Accepted Payment Methods and Partner Logos"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-4 pb-1 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Solution Hub Technologies (SOHUB). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
