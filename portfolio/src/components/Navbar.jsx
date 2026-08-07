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


  return (
    <div>
      <nav 
        className="fixed w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-md"
      > 
        <div className="max-w-7xl mx-auto px-6 h-12 md:h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold font-mono tracking-tight flex items-center gap-1 md:gap-2 group" id="nav-brand">
            <span className="text-violet-500 group-hover:translate-x--1 transition-transform">&lt;</span>
            <span className="text-white">Ayush Jha</span>
            <span className="text-violet-500 group-hover:-translate-x-1 transition-transform">/&gt;</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                id={`nav-link-${item.id}`}
                className={`transition-colors relative py-1 ${
                  activeSection === item.id 
                    ? "text-violet-400 font-semibold" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              id="nav-btn-contact-desktop"
              className="px-5 py-2 bg-violet-600/10 border border-violet-500/50 text-violet-300 rounded-lg hover:bg-violet-600 hover:text-white transition-all duration-300 text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Contact
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Mobile Menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
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

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100 py-4 border-b border-white/10" : "max-h-0 opacity-0 py-0 pointer-events-none"
          } bg-[#030712]/95 backdrop-blur-lg px-6 space-y-4`}
        >
          {menuItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              id={`nav-link-mobile-${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block text-base transition-colors ${
                activeSection === item.id 
                  ? "text-violet-400 font-semibold pl-2 border-l-2 border-violet-400" 
                  : "text-gray-400 hover:text-white pl-2"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a 
              href="#contact" 
              id="nav-btn-contact-mobile"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all font-medium py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
