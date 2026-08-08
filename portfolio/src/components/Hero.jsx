import React, { useState, useEffect } from 'react'
import myself from '../assets/myself1.png'

const roles = ["SaaS Developer","Problem Solver", "C.E. Undergrad."];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeRole = roles[currentRoleIndex];
    let timer;

    const handleTyping = () => {
      if (isDeleting) {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        } else {
          setCurrentText(activeRole.substring(0, currentText.length - 1));
          setTypingSpeed(45);
        }
      } else {
        if (currentText === activeRole) {
          setIsDeleting(true);
          setTypingSpeed(100);
        } else {
          setCurrentText(activeRole.substring(0, currentText.length + 1));
          setTypingSpeed(100);
        }
      }
    };

    const speed = !isDeleting && currentText === activeRole ? 1500 : typingSpeed;
    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div>
      <section id="about" className="min-h-screen flex items-center justify-center relative pt-24 pb-16 overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className='mt-4'>
            <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-violet-300 mb-6 backdrop-blur-md">
              <span className="text-xs text-gray-400 font-medium">Connect:</span>
              <a 
                href="https://github.com/AyushJha2008" 
                id="hero-link-github"
                className="hover:text-white transition-colors transform hover:scale-115"
                title="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-jha200805/" 
                id="hero-link-linkedin"
                className="hover:text-blue-400 transition-colors transform hover:scale-115"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6">
              FullStack & <br />
              <span className="text-gradient min-h-[1.1em] inline-block">
                {currentText}
                <span className="animate-[pulse_1s_infinite] text-violet-400 ml-0.5 font-light">|</span>
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Bitten by a radioactive bug, now I debug for a living. Just your friendly neighborhood developer - if your site’s guilty of an unsatisfied customer, Better Call Me!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1aXAS7ZBgTv5oo59pE-Ijio98vT4QMLJ_/view?usp=sharing" 
                id="hero-btn-resume"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transform hover:-translate-y-0.5 text-center"
              >
                Check Resume
              </a>
              <a 
                href="https://github.com/AyushJha2008" 
                id="hero-btn-github"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 hover:border-violet-500/50 text-gray-300 hover:text-white hover:bg-white/10 font-medium rounded-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
              >
                <i className="fab fa-github"></i> My GitHub
              </a>
            </div>
          </div>

          {/* myphoto */}
          <div className="relative animate-float flex justify-center items-center">
            {/* Glowing ring decoration behind image */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="relative p-2.5 glass rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src={myself} 
                className='object-cover rounded-xl shadow-inner max-h-[300px] sm:max-h-[380px] md:max-h-[440px] w-full max-w-xs sm:max-w-none h-auto' 
                alt="Ayush Jha Profile" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero