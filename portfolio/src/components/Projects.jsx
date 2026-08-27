import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import project1 from '../assets/project1.png' 
import project2 from '../assets/project2.png' 
import project3 from '../assets/project3.png' 
import project4 from '../assets/project4.png' 
import project5 from '../assets/project5.png' 
import project6 from '../assets/project6.png' 

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "SaaS", "CRUD"];

  const projectsData = [
    {
      id: "tea-n-toast",
      title: "Tea-n-Toast",
      category: "SaaS",
      subtitle: "Real-Time Communication Platform",
      description: "Tea-N-Toast (TNT) is a real-time communication platform designed to offer instant messaging (WebSocket), media sharing (Cloudinary), and high-quality peer-to-peer voice and video calling (WebRTC). Implemented with JWT Authentication.",
      challenge: "Providing zero-latency audio/video calling and chat sync without a heavy infrastructure load.",
      architecture: "Leveraged WebRTC for direct peer-to-peer media streaming, combined with a custom Node.js/Socket.io signaling server for presence tracking and JWT session validation.",
      contribution: "Designed the WebRTC connection handshake loop, peer negotiation handlers, and unified room-state manager on the backend.",
      image: project6,
      tags: ["Node", "Express", "React", "MongoDB", "WebSocket", "WebRTC"],
      github: "https://github.com/AyushJha2008/Tea-N-Toast.git",
      live: "https://tea-n-toast.vercel.app/",
      accentColor: "border-rust text-rust",
      dossierCode: "AJ_TNT_06",
      featured: true
    },
    {
      id: "featurepulse",
      title: "FeaturePulse",
      category: "SaaS",
      subtitle: "AI-Powered Developer Tool",
      description: "Complete Deployed GitHub App which tells intent vs implementation, Security analysis, summary by reading code on each pull request using webhooks. It has a working subscription model via razorpay. We made this project as a group in a hackathon.",
      challenge: "Handling highly asynchronous GitHub pull request webhooks and managing security analysis of large codebases on the fly.",
      architecture: "Utilized Express.js webhook listening endpoints, integrated Gemini API for intent vs code analysis, and Razorpay subscription routing.",
      contribution: "Authored the webhook dispatching handler, PR diff parser, and implemented Razorpay checkout webhooks for secure subscription flow.",
      image: project5,
      tags: ["Node", "Express", "React", "GitHub App", "WebHooks", "Razorpay"],
      github: "https://github.com/ADFoundryLabs/FeaturePulse.git",
      live: "https://feature-pulse-five.vercel.app/",
      accentColor: "border-rust text-rust",
      dossierCode: "AJ_FP_05",
      featured: true
    },
    {
      id: "map-me",
      title: "Map Me",
      category: "SaaS",
      subtitle: "Indoor Navigation Platform",
      description: "A QR-based indoor navigation web application with an admin panel to generate building layouts with floors, rooms, unique QR codes, room images, and special notes. Enabled visitors to scan QR codes and view their current location.",
      challenge: "Bridging the gap between physical location signage and digital orientation maps in multi-floor layouts.",
      architecture: "Admins build building maps hierarchically (Floors -> Rooms). Custom SVG coordinate generator ties physical QR locations to architectural layout positions.",
      image: project2,
      tags: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/AyushJha2008/Map-Me.git",
      accentColor: "border-blue-500/50 text-blue-400",
      dossierCode: "AJ_MM_02",
      featured: false
    },
    {
      id: "course-scheduler",
      title: "Course Scheduler",
      category: "CRUD",
      subtitle: "Course & Instructor Allocation Platform",
      description: "Platform for educational institutions where admins can add Courses and Instructors, allot Instructors their lectures, preventing collision (same instructor can't be allotted 2 lectures in the same day). Admins can see all allocations.",
      challenge: "Creating conflict-free scheduling grids dynamically for multiple professors across overlapping subjects.",
      architecture: "MERN application that executes transactional query verification before saving scheduler data to database grids.",
      image: project4,
      tags: ["Node", "Express", "React", "MongoDB"],
      github: "https://github.com/AyushJha2008/Course-Scheduler",
      live: "https://course-scheduler-ten.vercel.app/",
      accentColor: "border-amber-500/50 text-amber-400",
      dossierCode: "AJ_CS_04",
      featured: false
    },
    {
      id: "city-centre",
      title: "City Centre",
      category: "SaaS",
      subtitle: "SmartCity Dashboard",
      description: "Dashboard for Smart Cities which contains information about past, current, upcoming - Weather Cast, API index, Traffic Status and any latest Mishaps occurrence (like road jams, accidents, etc.) for public safety purposes.",
      challenge: "Aggregating multi-source API signals (traffic, weather, emergency logs) into a single, cohesive public dashboard.",
      architecture: "Pure HTML/CSS template frontend connected to a Node/Express middleware handler caching external API data queries.",
      image: project1,
      tags: ["HTML", "CSS", "Node", "Express"],
      github: "https://github.com/AyushJha2008/CityCentre.git",
      accentColor: "border-green-500/50 text-green-400",
      dossierCode: "AJ_CC_01",
      featured: false
    },
    {
      id: "job-wallah",
      title: "Job Wallah",
      category: "CRUD",
      subtitle: "Job Application Platform",
      description: "A Fullstack CRUD app for a Job application portal, where companies can post jobs, users can apply with resumes, and admins can shortlist candidates. This project built my foundation in MERN full-stack development.",
      challenge: "Managing candidate state transitions (Applied, Shortlisted, Rejected) alongside secure file resume attachments.",
      architecture: "React frontend calling standard REST endpoints backed by MongoDB document stores and Cloudinary file storage uploads.",
      image: project3,
      tags: ["Node", "Express", "React", "MongoDB"],
      github: "https://github.com/AyushJha2008/Job-Wallah",
      accentColor: "border-red-500/50 text-red-400",
      dossierCode: "AJ_JW_03",
      featured: false
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === activeCategory);

  // Split featured and standard from the current filtered set
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const standardProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative bg-slatebg blueprint-grid-bg border-t border-gray-800">
      
      {/* Schematic border decoration */}
      <div className="absolute top-0 right-10 font-mono text-[9px] text-gray-700 select-none">
        [MODULE: REPOSITORY_PORTFOLIO]
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col justify-between items-center mb-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Featured <span className="text-rust">Projects</span>
            </h2>
            <p className="text-gray-400 font-mono text-xs max-w-md mx-auto">
              [ANALYSIS_OF_BUILDS_AND_SAAS_PROTOTYPES]
            </p>
          </div>

          {/* Filtering tabs with custom blueprint styling */}
          <div className="flex bg-[#0e1116] border border-gray-800 p-1 rounded-sm gap-1 mt-8 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 transition-all ${
                  activeCategory === cat
                    ? "bg-rust text-black font-bold shadow-[2px_2px_0px_#000]"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects List (Full-Width Asymmetrical split blocks) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="bg-[#0e1116] border border-gray-800 p-5 sm:p-8 shadow-[4px_4px_0px_#111827] hover:shadow-[5px_5px_0px_#f26a57] hover:border-rust transition-all duration-300 relative group overflow-hidden"
              >
                <div className="blueprint-scanline"></div>

                {/* Dossier Code Badge */}
                <div className="absolute -top-3 left-4 font-mono text-[9px] bg-[#0e1116] px-2.5 py-0.5 border border-gray-800 text-rust z-10">
                  REF_DOC: {project.dossierCode}
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left block: case study details */}
                  <div className="md:col-span-7 text-left space-y-5">
                    <div>
                      <span className="font-mono text-[10px] text-rust uppercase tracking-wider block mb-1">
                        // {project.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-rust transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architectural Breakdown Panel */}
                    <div className="border-t border-gray-800 pt-4 mt-2 grid grid-cols-1 gap-3.5 font-mono text-[11px]">
                      <div>
                        <span className="text-rust font-bold uppercase block text-[9px]">[CHALLENGE]</span>
                        <span className="text-gray-300">{project.challenge}</span>
                      </div>
                      <div>
                        <span className="text-rust font-bold uppercase block text-[9px]">[ARCH_CHOICE]</span>
                        <span className="text-gray-300">{project.architecture}</span>
                      </div>
                      <div>
                        <span className="text-rust font-bold uppercase block text-[9px]">[MY_CONTRIBUTION]</span>
                        <span className="text-gray-300">{project.contribution}</span>
                      </div>
                    </div>

                    {/* Tags & Action links */}
                    <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 mt-4">
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-[#08090c] border border-gray-800 px-2 py-0.5 text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 font-mono text-xs">
                        <a 
                          href={project.github} 
                          id={`project-${project.id}-code`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                          title="View Source Code"
                        >
                          <i className="fab fa-github text-sm"></i>
                          <span>CODE.SRC</span>
                        </a>
                        
                        {project.live ? (
                          <a 
                            href={project.live} 
                            id={`project-${project.id}-live`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rust hover:underline transition-colors flex items-center gap-1.5 font-bold"
                            title="View Live Site"
                          >
                            <i className="fa-solid fa-globe text-sm"></i>
                            <span>LIVE_DEMO</span>
                          </a>
                        ) : (
                          <span className="text-gray-600 italic">[LOCAL_DEPLOY]</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right block: illustrated image view */}
                  <div className="md:col-span-5 relative flex items-center justify-center">
                    <div className="border border-gray-800 bg-[#08090c] p-2 relative w-full group-hover:border-rust/30 transition-colors">
                      <div className="absolute top-1 right-2 font-mono text-[8px] text-gray-600">FIG_0{idx+1}</div>
                      <img 
                        src={project.image} 
                        className="max-h-56 max-w-full mx-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                        alt={`${project.title} schematic preview`}
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Standard Projects (Asymmetrical Staggered Cards) */}
        {standardProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {standardProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`bg-[#0e1116] border border-gray-800 p-6 shadow-[4px_4px_0px_#111827] hover:shadow-[5px_5px_0px_#f26a57] hover:border-rust transition-all duration-300 text-left space-y-4 group relative overflow-hidden ${
                  idx % 2 === 1 ? "md:translate-y-4" : ""
                }`}
              >
                <div className="blueprint-scanline"></div>

                {/* Dossier Code Badge */}
                <div className="absolute -top-3 left-4 font-mono text-[9px] bg-[#0e1116] px-2 py-0.5 border border-gray-800 text-gray-500 z-10">
                  DOC_ID: {project.dossierCode}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-gray-500 uppercase block">
                    // {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-rust transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Challenge tag block */}
                <div className="border-t border-gray-800/80 pt-3 font-mono text-[10px] space-y-1">
                  <span className="text-rust font-bold uppercase block text-[8px]">[CHALLENGE]</span>
                  <span className="text-gray-400 line-clamp-2">{project.challenge}</span>
                </div>

                {/* Tech chips list */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[9px] pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-[#08090c] border border-gray-800 px-2 py-0.5 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between font-mono text-xs mt-auto">
                  <a 
                    href={project.github} 
                    id={`project-${project.id}-code`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                    title="View Source Code"
                  >
                    <i className="fab fa-github text-sm"></i>
                    <span>CODE_SRC</span>
                  </a>
                  
                  {project.live ? (
                    <a 
                      href={project.live} 
                      id={`project-${project.id}-live`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rust hover:underline transition-colors flex items-center gap-1.5 font-bold"
                      title="View Live Site"
                    >
                      <i className="fa-solid fa-globe text-sm"></i>
                      <span>LIVE_DEMO</span>
                    </a>
                  ) : (
                    <span className="text-[10px] text-gray-600 italic">[LOCAL]</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects