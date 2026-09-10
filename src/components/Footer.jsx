import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--corporate-color)] bg-[var(--corporate-color)] mt-auto">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Copyright */}
        <div className="text-xs !text-white font-medium tracking-wide">
          © 2026 HARUME.
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://x.com/Harulablab"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-white hover:opacity-60 transition-opacity"
            aria-label="Twitter"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/harumememe/"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-white hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/HARULAB"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-white hover:opacity-60 transition-opacity"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
