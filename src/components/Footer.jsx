import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white w-full mt-auto">

      {/* ── Main footer grid ──────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10
                      grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <LocalGroceryStoreIcon sx={{ fontSize: 28, color: "#00A884" }} />
            <span className="text-lg font-extrabold tracking-tight">
              Sethji
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Your neighbourhood general store — delivered fast, priced fair.
          </p>
          {/* Social links */}
          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <TwitterIcon sx={{ fontSize: 20 }} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FacebookIcon sx={{ fontSize: 20 }} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
            Quick Links
          </h3>
          {[
            { label: "Home",       to: "/" },
            { label: "Categories", to: "/categories" },
            { label: "Cart",       to: "/cart" },
            { label: "Profile",    to: "/profile" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm text-gray-300 hover:text-primary
                         transition-colors duration-150 w-fit"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
            Company
          </h3>
          {[
            { label: "About Us",       to: "/about" },
            { label: "Contact Us",     to: "/contact" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms of Use",   to: "/terms" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm text-gray-300 hover:text-primary
                         transition-colors duration-150 w-fit"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
            Contact
          </h3>
          <p className="text-sm text-gray-300">support@sethji.in</p>
          <p className="text-sm text-gray-300">+91 987XXXXXXX</p>
          <p className="text-sm text-gray-300 leading-snug">
            123, Bazaar Street,<br />New Delhi, 110001
          </p>
        </div>

      </div>

      {/* ── Bottom bar ────────────────────────────────── */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3
                        flex flex-col sm:flex-row items-center
                        justify-between gap-1 text-xs text-gray-500">
          <span>© {currentYear} Sethji. All rights reserved.</span>
          <span>Made with ♥ in India</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;