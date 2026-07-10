import Subscribe from "./Subscribe";

const Footer = () => {
  const navLinks = [
    "Support Center",
    "Invoicing",
    "Contract",
    "Careers",
    "Blog",
    "FAQ,s",
  ];

  return (
    <>
      <Subscribe />
      <footer className="w-full border-t border-gray-100 bg-white">
        {/* Top row: logo + nav */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          {/* Logo */}
          <span className="text-lg font-bold tracking-widest text-gray-900 uppercase">
            FASCO
          </span>

          {/* Navigation links */}
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Bottom row: copyright */}
        <div className="py-4 text-center text-xs text-gray-400">
          Copyright © 2022 Xpro . All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
export default Footer;
