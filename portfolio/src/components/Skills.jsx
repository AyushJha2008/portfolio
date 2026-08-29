import React from 'react'
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiRedis, SiRedux, SiWebrtc } from "react-icons/si";
import { Webhook, Globe, Radio } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      drawerId: "DRAWER_01",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500", note: "Dynamic scripting engine" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500", note: "Static type safety layer" },
        { icon: <FaJava />, name: "Java", color: "text-red-500", note: "Object-oriented systems" },
      ]
    },
    {
      title: "Frontend Blocks",
      drawerId: "DRAWER_02",
      skills: [
        { icon: <FaReact />, name: "React", color: "text-cyan-400", note: "Component UI framework" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400", note: "Utility-first design builder" },
        { icon: <SiRedux />, name: "Redux", color: "text-purple-500", note: "Predictable state machine" },
      ]
    },
    {
      title: "Backend Systems",
      drawerId: "DRAWER_03",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-emerald-500", note: "Event-driven JS runtime" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-400", note: "Minimalist routing layer" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500", note: "NoSQL document database" },
        { icon: <SiRedis />, name: "Redis", color: "text-red-400", note: "High-speed caching & sessions" },
      ]
    },
    {
      title: "Protocols & APIs",
      drawerId: "DRAWER_04",
      skills: [
        { icon: <Globe />, name: "REST APIs", color: "text-indigo-500", note: "HTTP resource contracts" },
        { icon: <Radio />, name: "WebSockets", color: "text-amber-500", note: "Bidirectional sync pipelines" },
        { icon: <SiWebrtc />, name: "WebRTC", color: "text-emerald-500", note: "P2P media streaming channels" },
        { icon: <Webhook />, name: "Webhooks", color: "text-sky-400", note: "Event-triggered callbacks" },
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 relative bg-slatebg blueprint-grid-bg border-t border-gray-800">
      
      {/* Decorative Blueprint Lines */}
      <div className="absolute top-1/4 left-0 w-24 h-[1px] bg-rust/40"></div>
      <div className="absolute top-1/4 left-24 w-[1px] h-12 bg-rust/40"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-2 mb-16">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Tech <span className="text-rust">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs max-w-md mx-auto">
            [CATEGORIZED_SYSTEM_ABILITIES_AND_PROTOCOLS]
          </p>
        </div>

        {/* Structured Categorized Tech Drawers Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className="bg-[#0e1116] border border-gray-800 p-5 sm:p-6 shadow-[4px_4px_0px_#111827] relative group hover:border-rust/60 hover:shadow-[4px_4px_0px_#f26a57] transition-all duration-300 overflow-hidden"
            >
              <div className="blueprint-scanline"></div>

              {/* Drawer Tag Badge */}
              <div className="absolute -top-3 left-4 font-mono text-[9px] bg-[#0e1116] px-2 py-0.5 border border-gray-800 text-rust z-10">
                SYS: {category.drawerId}
              </div>

              {/* Title */}
              <h3 className="font-mono text-xs font-bold mb-6 text-gray-400 tracking-wider uppercase text-left flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[10px] text-gray-600 font-normal">[{category.skills.length}_NODES]</span>
              </h3>

              {/* Skill Node List */}
              <div className="space-y-3 text-left">
                {category.skills.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#08090c] border border-gray-800 hover:border-rust/40 hover:bg-[#0e1116] transition-colors relative group/node"
                  >
                    {/* Left: icon & name */}
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${item.color} group-hover/node:scale-110 transition-transform`}>
                        {item.icon}
                      </span>
                      <span className="font-bold text-sm text-gray-200 uppercase tracking-wide">
                        {item.name}
                      </span>
                    </div>

                    {/* Right: senior engineering note */}
                    <span className="font-mono text-[10px] text-gray-500 sm:text-right">
                      // {item.note}
                    </span>

                    {/* Cosmetic corner marks */}
                    <span className="absolute top-0 right-0 w-1 h-[1px] bg-gray-800 group-hover/node:bg-rust/55"></span>
                    <span className="absolute top-0 right-0 h-1 w-[1px] bg-gray-800 group-hover/node:bg-rust/55"></span>
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
