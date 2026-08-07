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
      image: project6,
      tags: ["Node", "Express", "React", "MongoDB", "Socket.IO", "WebRTC"],
      github: "https://github.com/AyushJha2008/Tea-N-Toast.git",
      live: "https://tea-n-toast.vercel.app/",
      glowClass: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-violet-500/40",
      accentColor: "text-violet-400"
    },
    {
      id: "featurepulse",
      title: "FeaturePulse",
      category: "SaaS",
      subtitle: "AI-Powered Developer Tool",
      description: "Complete Deployed GitHub App which tells intent vs implementation, Security analysis, summary by reading code on each pull request using webhooks. It has a working subscription model via razorpay. We made this project as a group in a hackathon.",
      image: project5,
      tags: ["Node", "Express", "React", "GitHub App", "Razorpay"],
      github: "https://github.com/ADFoundryLabs/FeaturePulse.git",
      live: "https://feature-pulse-five.vercel.app/",
      glowClass: "hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-violet-500/40",
      accentColor: "text-violet-400"
    },
    {
      id: "map-me",
      title: "Map Me",
      category: "SaaS",
      subtitle: "Indoor Navigation Platform",
      description: "A QR-based indoor navigation web application with an admin panel to generate building layouts with floors, rooms, unique QR codes, room images, and special notes. Enabled visitors to scan QR codes and view their current location.",
      image: project2,
      tags: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/AyushJha2008/Map-Me.git",
      glowClass: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40",
      accentColor: "text-blue-400"
    },
    {
      id: "city-centre",
      title: "City Centre",
      category: "SaaS",
      subtitle: "SmartCity Dashboard",
      description: "Dashboard for Smart Cities which contains information about past, current, upcoming - Weather Cast, API index, Traffic Status and any latest Mishaps occurrence (like road jams, accidents, etc.) for public safety purposes.",
      image: project1,
      tags: ["HTML", "CSS", "Node", "Express"],
      github: "https://github.com/AyushJha2008/CityCentre.git",
      glowClass: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:border-green-500/40",
      accentColor: "text-green-400"
    },
    {
      id: "course-scheduler",
      title: "Course Scheduler",
      category: "CRUD",
      subtitle: "Course & Instructor Allocation Platform",
      description: "Platform for educational institutions where admins can add Courses and Instructors, allot Instructors their lectures, preventing collision (same instructor can't be allotted 2 lectures in the same day). Admins can see all allocations.",
      image: project4,
      tags: ["Node", "Express", "React", "MongoDB"],
      github: "https://github.com/AyushJha2008/Course-Scheduler",
      live: "https://course-scheduler-ten.vercel.app/",
      glowClass: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/40",
      accentColor: "text-amber-400"
    },
    {
      id: "job-wallah",
      title: "Job Wallah",
      category: "CRUD",
      subtitle: "Job Application Platform",
      description: "A Fullstack CRUD app for a Job application portal, where companies can post jobs, users can apply with resumes, and admins can shortlist candidates. This project built my foundation in MERN full-stack development.",
      image: project3,
      tags: ["Node", "Express", "React", "MongoDB"],
      github: "https://github.com/AyushJha2008/Job-Wallah",
      glowClass: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:border-red-500/40",
      accentColor: "text-red-400"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background glowing blur */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col justify-between items-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 mt-2">A selection of my recent works and SaaS prototypes</p>
          </div>

          {/* Project Filtering Tabs */}
          <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-xl gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`glass rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col border border-white/5 ${project.glowClass}`}
            >
              {/* Card Header Media */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={project.image} 
                    className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-102 transition-transform duration-500" 
                    alt={`${project.title} screenshot`}
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className={`text-xs font-mono mb-2 ${project.accentColor} font-semibold uppercase tracking-wider`}>
                  {project.subtitle}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Card Footer tags & links */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a 
                      href={project.github} 
                      id={`project-${project.id}-code`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
                      title="View Source Code"
                    >
                      <i className="fab fa-github text-lg"></i>
                      <span>Source</span>
                    </a>
                    
                    {project.live ? (
                      <a 
                        href={project.live} 
                        id={`project-${project.id}-live`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-1.5 text-sm"
                        title="View Live Site"
                      >
                        <i className="fa-solid fa-globe text-lg"></i>
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 italic">Local App</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects