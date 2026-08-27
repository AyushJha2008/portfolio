import React, { useState, useEffect } from 'react'

const menuItems = [
  { id: "about", label: "About" },
  { id: "stack", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "education", label: "Education" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for header height
      
      // Check sections
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      
      // Edge case: scroll to bottom highlights contact
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
          setActiveSection("contact");
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-gray-800 bg-[#08090c]/90 backdrop-blur-md">
      {/* Decorative technical line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-rust via-gray-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        
        {/* Brand signature */}
        <a 
          href="#" 
          className="font-mono text-sm md:text-base tracking-tight flex items-center gap-2 group text-gray-300 hover:text-white" 
          id="nav-brand"
        >
          <span className="text-rust font-bold">&lt;</span>
          <span className="font-bold tracking-widest text-white">AYUSH JHA</span>
          <span className="text-rust font-bold">/&gt;</span>
          <span className="hidden sm:inline-block text-[10px] bg-gray-900 border border-gray-800 text-gray-500 px-2 py-0.5 font-normal rounded-sm ml-1">
            DOSSIER.2.0
          </span>
        </a>
        
        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-2 text-xs font-mono">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                id={`nav-link-${item.id}`}
                className={`px-4 py-2 border blueprint-snap-transition ${
                  isActive 
                    ? "bg-rust text-black border-rust shadow-[2px_2px_0px_#000] font-bold translate-x-[-1px] translate-y-[-1px]" 
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-800 hover:bg-gray-900/50"
                }`}
              >
                {item.label.toUpperCase()}
              </a>
            );
          })}
        </div>

        {/* Contact Action */}
        <div className="hidden md:block font-mono text-xs">
          <a 
            href="#contact" 
            id="nav-btn-contact-desktop"
            className={`px-5 py-2 border blueprint-snap-transition block ${
              activeSection === "contact"
                ? "bg-rust text-black border-rust shadow-[2px_2px_0px_#000] font-bold"
                : "border-rust text-rust hover:bg-rust hover:text-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
            }`}
          >
            CONTACT.EXE
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-toggle"
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1 border border-gray-800 bg-gray-900/50 rounded-sm"
          aria-label="Toggle Mobile Menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4 border-b border-gray-800 bg-[#08090c]/98" : "max-h-0 opacity-0 py-0 pointer-events-none"
        } px-4 space-y-2 font-mono text-xs`}
      >
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              id={`nav-link-mobile-${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block py-2.5 px-4 border ${
                isActive 
                  ? "bg-rust text-black border-rust font-bold shadow-[2px_2px_0px_#000]" 
                  : "text-gray-400 border-transparent hover:text-white hover:bg-gray-900/50"
              }`}
            >
              {item.label.toUpperCase()}
            </a>
          );
        })}
        <div className="pt-2">
          <a 
            href="#contact" 
            id="nav-btn-contact-mobile"
            onClick={() => setIsOpen(false)}
            className={`block text-center py-2.5 border transition-all ${
              activeSection === "contact"
                ? "bg-rust text-black border-rust font-bold"
                : "border-rust text-rust hover:bg-rust hover:text-black font-semibold"
            }`}
          >
            CONTACT.EXE
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

