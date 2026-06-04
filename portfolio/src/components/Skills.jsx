import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaCubes, FaSitemap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import 'devicon/devicon.min.css';

const Skills = () => {
    const tech = [
    { icon: <FaReact />, name: "React", color: "text-cyan-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: <SiVercel />, name: "Deployment", color: "text-white" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-700" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
    { icon: <TbApi />, name: "REST API", color: "text-cyan-500" },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
    { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
    { icon: <FaGithub />, name: "GitHub", color: "text-purple-500" },
    { icon: <FaSitemap />, name: "OOPs", color: "text-blue-500" },
    { icon: <FaCode/>, name: "DSA", color: "text-orange-500"}
    ];
  return (
    <section id="stack" className="py-20 relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col justify-between items-center mb-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Tech <span className="text-gradient">Arsenal</span></h2>
                    <p className="text-gray-400 mt-2">Programming Skills I've been working on since last 1 year</p>
                </div>
            </div>
            
            <div className="overflow-hidden w-full py-10">
                <div className="flex w-max animate-scroll">
                    {[...tech, ...tech].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mx-10 text-white text-lg glass rounded-lg py-2 px-4">
                            <span className={`text-3xl font-extrabold ${item.color}`}>{item.icon}</span>
                            <span className='font-medium p-2 text-blue-'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...tech].map((item, index) => (
                    <div key={index} className="glass p-4 rounded-xl hover:bg-white/5 transition duration-300 group text-center border-t border-transparent hover:border-violet-500/50 flex flex-col items-center justify-center to-current gap-2">
                        <span className={`text-3xl font-extrabold ${item.color}`}>{item.icon}</span>
                        <span className='font-bold text-lg'>{item.name}</span>
                    </div>
                ))}
                 
            </div>
        </div>
    </section>
  )
}

export default Skills