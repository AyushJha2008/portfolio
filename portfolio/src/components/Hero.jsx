import React from 'react'
import myself from '../assets/myself1.png'


const Hero = () => {
  return (
    <div>
        <section id="about" className="min-h-screen flex items-center justify-center relative pt-16">
        {/* <!-- Decorative Gradients --> */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className='mt-4'>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-violet-300 mb-4">
                    <a href="https://github.com/AyushJha2008" className="hover:text-white transition-colors transform hover:-translate-y-1"><i className="fab fa-github text-2xl"></i></a>
                    <a href="https://www.linkedin.com/in/ayush-jha200805/" className="hover:text-blue-400 transition-colors transform hover:-translate-y-1"><i className="fab fa-linkedin text-2xl"></i></a>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    FullStack & <br />
                    <span className="text-gradient">SaaS Dev</span>
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                    Bitten by a radioactive bug, now I debug for a living. Just your friendly neighborhood developer - if your site’s guilty of unsatisfied customer, Better Call Me!
                </p>

                <div className="flex gap-4">
                    <a href="https://drive.google.com/file/d/1aXAS7ZBgTv5oo59pE-Ijio98vT4QMLJ_/view?usp=sharing" className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                        Check Resume
                    </a>
                    <a href="https://github.com/AyushJha2008" className="px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all">
                        My GitHub
                    </a>
                </div>
            </div>

            {/* myphoto */}
            <div className=" md:flex-row relative animate-float">
                <img src={myself} className='object-cover rounded-2xl shadow-2xl h-100 w-max' alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero