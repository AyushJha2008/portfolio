import React from 'react'
import { FaReact, FaNodeJs, FaJava, FaCode, FaSitemap, FaNetworkWired, FaLaptop} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiRedis, SiRedux } from "react-icons/si";
import 'devicon/devicon.min.css';

const Skills = () => {
  const flatTech = [
    { icon: <FaReact />, name: "React", color: "text-cyan-400" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-emerald-500" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-400" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiRedis />, name: "Redis", color: "text-red-400" },
    { icon: <FaSitemap />, name: "OOPs", color: "text-blue-500" },
    { icon: <FaCode />, name: "DSA", color: "text-amber-500" },
    { icon: <FaJava />, name: "Java", color: "text-yellow-500" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
    { icon: <FaNetworkWired />, name: "Computer Network", color: "text-gray-400" },
    { icon: <FaLaptop /> , name: "Operating System", color: "text-red-400" },
    { icon: <SiRedux />, name: "Redux", color: "text-blue-500" },
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500", glowClass: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-yellow-500/50" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500", glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500/50" },
        { icon: <FaJava />, name: "Java", color: "text-red-500", glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-500/50" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React", color: "text-cyan-400", glowClass: "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:border-cyan-400/50" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400", glowClass: "hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:border-sky-400/50" },
        { icon: <SiRedux />, name: "Redux", color: "text-blue-500", glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500/50" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-emerald-500", glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-500/50" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-400", glowClass: "hover:shadow-[0_0_20px_rgba(156,163,175,0.25)] hover:border-gray-400/50" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500", glowClass: "hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:border-green-500/50" },
        { icon: <SiRedis />, name: "Redis", color: "text-red-400", glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-400/50" },
      ]
    },
    {
      title: "Core Engineering",
      skills: [
        { icon: <FaSitemap />, name: "OOPs", color: "text-blue-500", glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500/50" },
        { icon: <FaCode />, name: "DSA", color: "text-amber-500", glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-500/50" },
        {icon :<FaNetworkWired />, name: "Computer Network", color: "text-gray-400", glowClass: "hover:shadow-[0_0_20px_rgba(156,163,175,0.25)] hover:border-gray-400/50" },
        {icon :<FaLaptop />, name: "Operating System", color: "text-red-400", glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-400/50" },
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col justify-between items-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Tech <span className="text-gradient">Arsenal</span></h2>
            <p className="text-gray-400 mt-2">Programming Skills & Tools I actively work with</p>
          </div>
        </div>
        
        {/* Infinite Scrolling Marquee */}
        <div className="overflow-hidden w-full py-6 mb-12 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 sm:w-20 before:bg-gradient-to-r before:from-[#030712] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-8 sm:w-20 after:bg-gradient-to-l after:from-[#030712] after:to-transparent">
          <div className="flex w-max animate-scroll">
            {[...flatTech, ...flatTech].map((item, index) => (
              <div key={index} className="flex items-center gap-3.5 mx-8 text-white text-lg glass rounded-xl py-2.5 px-5 border border-white/5">
                <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                <span className='font-semibold tracking-wide text-gray-200 text-sm'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Categorized Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="glass p-5 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-lg font-bold mb-6 text-gray-300 tracking-wider uppercase text-left">{category.title}</h3>
              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`glass p-3 sm:p-4 rounded-xl flex items-center gap-2.5 sm:gap-3 transition-all duration-300 border border-white/5 ${item.glowClass}`}
                  >
                    <span className={`text-2xl sm:text-3xl ${item.color} transition-transform duration-300`}>{item.icon}</span>
                    <span className="font-semibold text-sm text-gray-300 tracking-wide">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills