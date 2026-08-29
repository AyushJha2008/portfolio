import React, { useState } from 'react'
import myself from '../assets/myself1.png'
import resumePdf from '../public/Ayush_Resume.pdf'

const Hero = () => {
  const [isSchematicActive, setIsSchematicActive] = useState(false);

  return (
    <section 
      id="about" 
      className={`min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
        isSchematicActive 
          ? "bg-[#0b0d13] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" 
          : "bg-slatebg blueprint-grid-bg"
      }`}
    >
      {/* Schematic border indicators */}
      {isSchematicActive && (
        <div className="absolute inset-0 pointer-events-none border-4 border-dashed border-rust/30 m-4 z-40">
          <div className="absolute top-2 left-2 text-[10px] font-mono text-rust bg-black/80 px-2 py-0.5 border border-rust/40">
            BOUNDING_BOX: [0, 0, 100vw, 100vh]
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-rust bg-black/80 px-2 py-0.5 border border-rust/40">
            SYSTEM_STATUS: DEBUG_GRID_ON
          </div>
        </div>
      )}

      {/* Blueprint header label decoration */}
      <div className="absolute top-20 right-6 font-mono text-[10px] text-gray-600 hidden md:block">
        REF_DOC: AJ_BIO_01 // SEC: OVERVIEW
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Dossier Text Content (7 cols on large screens) */}
          <div className="md:col-span-7 text-left space-y-8 relative">
            
            {/* Quick Info Block */}
              <div className="inline-flex w-fit items-center gap-3.5 px-4 py-3 border border-gray-800 bg-[#0e1116] text-gray-400 font-mono text-xs self-start">
                <p className="text-[10px] text-gray-500 uppercase">SYS_LINKS:</p>
                <a 
                  href="https://www.linkedin.com/in/ayush-jha200805/" 
                  id="hero-link-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin text-base"></i>
                </a>
                <p className="w-1.5 h-1.5 bg-gray-700 rounded-full"></p>
                <a 
                  href="https://github.com/AyushJha2008" 
                  id="hero-link-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors"
                  title="GitHub Profile"
                >
                  <i className="fab fa-github text-base"></i>
                </a>
              </div>

            {/* Asymmetrical bold headline */}
            <div className="space-y-2 relative">
              {isSchematicActive && (
                <div className="absolute -top-4 -left-2 text-[9px] font-mono text-rust/60">
                  &lt;h1 class="text-5xl font-extrabold"&gt;
                </div>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
                SaaS & <br />
                <span className="text-rust underline decoration-double decoration-gray-700 underline-offset-8">
                  FullStack_Dev
                </span>
              </h1>
            </div>

            {/* Custom Roles list - instead of simple typing carousel */}
            <div className="flex flex-wrap gap-2.5 font-mono text-[10px]">
              <span className="bg-[#111319] border border-gray-800 text-gray-300 px-3 py-1 relative">
                [SAAS_DEVELOPER]
                {isSchematicActive && <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-rust"></span>}
              </span>
              <span className="bg-[#111319] border border-gray-800 text-gray-300 px-3 py-1 relative">
                [PROBLEM_SOLVER]
                {isSchematicActive && <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-rust"></span>}
              </span>
              <span className="bg-[#111319] border border-gray-800 text-gray-300 px-3 py-1 relative font-semibold text-rust/95">
                [C.E._UNDERGRAD]
                {isSchematicActive && <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-rust"></span>}
              </span>
            </div>

            {/* Personal bio block styled like technical blockquote */}
            <div className="relative p-5 bg-[#0e1116] border-l-4 border-rust shadow-[3px_3px_0px_#111827] space-y-2">
              {isSchematicActive && (
                <div className="absolute -top-3 -right-2 text-[9px] font-mono text-rust/50 bg-[#0e1116] px-1">
                  DIM: 480px x auto
                </div>
              )}
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                [BACKGROUND_TELEMETRY]
              </div>
              <p className="text-gray-300 text-base md:text-md leading-relaxed font-sans">
                Bitten by a radioactive bug, now I debug for a living. Just your friendly neighborhood developer - if your site’s guilty of an unsatisfied customer, <span className="font-semibold text-white">Better Call Me!</span>
              </p>
            </div>

            {/* Asymmetrical social connectors */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              
              {/* Core blueprint action buttons */}
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <a 
                  href={resumePdf} 
                  id="hero-btn-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-rust text-black border border-black hover:bg-transparent hover:text-rust hover:border-rust transition-all font-bold shadow-[4px_4px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] text-center"
                >
                  RESUME.PDF
                </a>
                <a 
                  href="https://github.com/AyushJha2008" 
                  id="hero-btn-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#0e1116] border border-gray-800 text-gray-300 hover:text-white hover:border-rust hover:bg-gray-900 transition-all font-semibold shadow-[4px_4px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] text-center flex items-center justify-center gap-2"
                >
                  <i className="fab fa-github"></i> GITHUB_CORE
                </a>
              </div>

            </div>

          </div>
          
          {/* Right Column: Handcrafted 2D Profile Dossier (5 cols on large screens) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            
            {/* Blueprint illustrated frame */}
            <div className="relative p-6 bg-[#0e1116] border-2 border-gray-800 w-full max-w-sm shadow-[6px_6px_0px_#111827] group hover:shadow-[6px_6px_0px_#f26a57] hover:border-rust transition-all duration-300">
              
              <div className="blueprint-scanline"></div>

              {/* Schematic corners */}
              <div className="absolute top-1.5 left-1.5 font-mono text-[9px] text-gray-600">+ X:01</div>
              <div className="absolute top-1.5 right-1.5 font-mono text-[9px] text-gray-600">Y:01 +</div>
              <div className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-gray-600">+ Z:00</div>
              <div className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-gray-600">SCALE:1.0 +</div>

              {/* Graphic container with coordinate grid lines */}
              <div className="relative border border-gray-800 bg-[#08090c] overflow-hidden p-2 group-hover:border-rust/40 transition-colors">
                
                {/* Continuous scanning bar line */}
                <div className="absolute left-0 w-full h-[2px] bg-rust/35 z-10 animate-[blueprint-scan_4s_linear_infinite] pointer-events-none"></div>
                
                <img 
                  src={myself} 
                  className="w-full h-auto object-cover border border-gray-800 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-300"
                  alt="Ayush Jha Blueprint Shot" 
                />

                {/* Layered schematic outline line */}
                {isSchematicActive && (
                  <div className="absolute inset-2 pointer-events-none border border-rust/40 animate-pulse flex items-center justify-center">
                    <span className="text-[10px] font-mono text-rust bg-black/80 px-2 py-0.5 border border-rust/30">
                      IMG_NODE: ACTIVE_VIEW
                    </span>
                  </div>
                )}
              </div>

              {/* 2D Vector Pointer annotations (rendered via inline SVGs to match the 2D layout) */}
              <div className="mt-4 border-t border-gray-800 pt-3 flex items-center justify-between font-mono text-[10px] text-gray-500">
                <span>FILE: PHOTO_SPECS.PNG</span>
                <span>RES: 1200 x 1200 px</span>
              </div>

              {/* Annotation Overlay Lines when schematic mode is activated */}
              {isSchematicActive && (
                <div className="absolute -left-12 top-12 pointer-events-none hidden lg:block w-12 h-16 border-r border-b border-rust/70 border-dashed animate-pulse">
                  <span className="absolute -top-3 left-0 text-[8px] font-mono text-rust uppercase">
                    LOC: THANE_IN
                  </span>
                </div>
              )}
              {isSchematicActive && (
                <div className="absolute -right-12 bottom-20 pointer-events-none hidden lg:block w-12 h-12 border-l border-t border-rust/70 border-dashed animate-pulse">
                  <span className="absolute -bottom-3 right-0 text-[8px] font-mono text-rust uppercase">
                    FRAME_V2.0
                  </span>
                </div>
              )}

            </div>

            {/* The Radioactive Bug Diagnostic trigger block */}
            <div className="mt-8 w-full max-w-sm">
              <button 
                onClick={() => setIsSchematicActive(!isSchematicActive)}
                className={`w-full py-2.5 px-4 font-mono text-xs border flex items-center justify-between transition-all relative overflow-hidden group ${
                  isSchematicActive 
                    ? "bg-rust text-black border-rust shadow-[2px_2px_0px_#000] font-bold" 
                    : "bg-[#0e1116] border-gray-800 text-gray-400 hover:text-white hover:border-rust hover:bg-gray-900 shadow-[3px_3px_0px_#111]"
                }`}
              >
                <div className="blueprint-scanline"></div>
                <span className="flex items-center gap-2 relative z-10">
                  {/* Insect SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 8h-2.12c-.17-.43-.37-.83-.61-1.21l1.5-1.5c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.63 1.63c-.87-.33-1.81-.51-2.73-.51s-1.86.18-2.73.51L7.77 3.88c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.5 1.5c-.24.38-.44.78-.61 1.21H5c-.55 0-1 .45-1 1s.45 1 1 1h1.12c-.07.33-.12.66-.12 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.12c.17.43.37.83.61 1.21l-1.5 1.5c-.39.39-.39 1.02 0 1.41.2.2.45.3.71.3s.51-.1.71-.3l1.63-1.63c.87.33 1.81.51 2.73.51s1.86-.18 2.73-.51l1.63 1.63c.2.2.45.3.71.3s.51-.1.71-.3c.39-.39.39-1.02 0-1.41l-1.5-1.5c.24-.38.44-.78.61-1.21H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.12v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-7 11c-2.76 0-5-2.24-5-5v-4c0-2.76 2.24-5 5-5s5 2.24 5 5v4c0 2.76-2.24 5-5 5z"/>
                  </svg>
                  <span>{isSchematicActive ? "DIAGNOSTIC: SCHEMA_ON" : "DIAGNOSTIC: ACTIVATE_SCHEMATIC"}</span>
                </span>
                <span className="relative z-10">{isSchematicActive ? "[RUNNING]" : "[IDLE]"}</span>
              </button>
              
              {/* Small helper text */}
              <div className="mt-2 text-left font-mono text-[9px] text-gray-600">
                * Click indicator to reveal architectural bounding layouts and measurement lines.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
