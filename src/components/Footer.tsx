
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Sun
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-sunflower-500" />
              <h3 className="text-xl font-heading font-bold">
                Sunflower <span className="text-sunflower-500">Cleaning</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Brightening your world, one clean at a time. We provide eco-friendly cleaning 
              and laundry services to make your space shine.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sunflower-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sunflower-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sunflower-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Laundry Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-sunflower-500 transition-colors">
                  Post-Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-sunflower-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-sunflower-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+256 789 225621</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-sunflower-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">sunflowercleaning@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sunflower Cleaning & Laundry Services. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
