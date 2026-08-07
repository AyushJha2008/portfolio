import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="fixed w-full z-50 transition-all duration-300 bg-space-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <a href="#" className="text-xl font-bold font-mono tracking-tight flex items-center gap-2">
                    <span className="text-violet-500">&lt;</span>
                    <span className="text-white">Ayush Jha</span>
                    <span className="text-violet-500">/&gt;</span>
                </a>
                
                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#stack" className="hover:text-white transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#hackathons" className="hover:text-white transition-colors">Hackathons</a>
                    <a href="#education" className="hover:text-white transition-colors">Education</a>
                </div>

                <a href="#contact" className="px-4 py-2 bg-violet-600/10 border border-violet-500/50 text-violet-300 rounded hover:bg-violet-600 hover:text-white transition-all text-sm font-medium">
                    Contact
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

