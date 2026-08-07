import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import project1 from '../assets/project1.png' //smartciyt
import project2 from '../assets/project2.png' //mapme
import project3 from '../assets/project3.png' //job wallah
import project4 from '../assets/project4.png' //course scheduller 
import project5 from '../assets/project5.png' //featurepulse
import project6 from '../assets/project6.png' //tea n toast

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-space-black">
        <div className="container mx-auto px-6">
            <div className="flex flex-col justify-between items-center mb-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 mt-2">A selection of my recent projects which Iam working on.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">

                {/* <!-- Project 1 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project6} className="content-fit" alt="feature pulse img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-violet-400 mb-2">FullStack SaaS Product</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">Tea-n-Toast</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tea-N-Toast (TNT) is a real-time communication platform designed to offer instant messaging (WebSocket), media sharing (Cloudinary), and high-quality peer-to-peer voice and video calling (WebRTC). Implemented with JWT Authentication.
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">React</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">MongoDB</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Socket.IO</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">WebRTC</span>

                            </div>
                            <a href="https://github.com/AyushJha2008/Tea-N-Toast.git" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 mr-1" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://tea-n-toast.vercel.app/" className="text-gray-400 hover:text-cyan transition-colors transform hover:scale-110" title="Live Site">
                                <i className="fa-solid fa-globe text-xl"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* <!-- Project 1 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project5} className="content-fit" alt="feature pulse img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-violet-400 mb-2">FullStack SaaS Product</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">FeaturePulse</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Complete Deployed GiHub App which tells intent vs implementation, Security analysis, summary by reading code on each pull request using webhooks. It have working subscription model via razorpay. We made this project as group in hackathon
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">React</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">GitHub App</span>

                            </div>
                            <a href="https://github.com/ADFoundryLabs/FeaturePulse.git" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 mr-1" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://feature-pulse-five.vercel.app/" className="text-gray-400 hover:text-cyan transition-colors transform hover:scale-110" title="Live Site">
                                <i className="fa-solid fa-globe text-xl"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* <!-- Project 2 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project2} alt="Map me img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-blue-400 mb-2">FullStack Builing Navigation</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">Map Me</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            A QR-based indoor navigation web application with admin panel to generate building layouts with floors, rooms, unique QR codes, room images, and special notes. Enabled visitors to scan QR codes and view their current location and info about rooms.
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">React</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">MongoDB</span>


                            </div>
                            <a href="https://github.com/AyushJha2008/Map-Me.git" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 3 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project1} alt="smartcity img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-green-400 mb-2">FullStack SmartCity Dashboard</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">City Centre</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Dashboard for Smart Cities which contains information about past, current, upcoming - Weather Cast, API index, Traffic Status and any latest Mishaps occurence (like road jams, accidents, etc.) for public safety purpose
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">HTML</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">CSS</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                            </div>
                            <a href="https://github.com/AyushJha2008/CityCentre.git" target="_blank" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 4 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project4} className="content-fit" alt="feature pulse img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-yellow-500 mb-2">FullStack CRUD Application</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">Course Scheduler</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Platform for education institutions where admin can add Courses and Instructors. allot Instructor their lectures, Instructor cannot be alloted 2 lectures in same day to avoid collision. admin can see all alloted lectures and thier instructor
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">React</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">MongoDB</span>

                            </div>
                            <a href="https://github.com/AyushJha2008/Course-Scheduler" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 mr-1" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://course-scheduler-ten.vercel.app/" className="text-gray-400 hover:text-cyan transition-colors transform hover:scale-110" title="Live Site">
                                <i className="fa-solid fa-globe text-xl"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* <!-- Project 5 --> */}
                <div className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={project3} className="content-fit" alt="feature pulse img"/>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-xs font-mono text-red-500 mb-2">FullStack CRUD Application</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-300 transition-colors">Job Wallah</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            A Fullstack CRUD app of Job application portal, where Companies can post Jobs, Users can apply with thier Resume and Admin can shortlist candidates for recruitment. it build my foundation in MERN full stack project
                        </p>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Node</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Express</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">React</span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">MongoDB</span>

                            </div>
                            <a href="https://github.com/AyushJha2008/Job-Wallah" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" title="View Code">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                         
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Projects