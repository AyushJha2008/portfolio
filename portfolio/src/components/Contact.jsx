import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="glass rounded-2xl p-10 text-center border border-violet-500/20 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                <h2 className="text-3xl font-bold mb-6">Ready to <span className="text-violet-400">Collaborate?</span></h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    I'm actively looking for internships opportunities.
                </p>
                <a href="mailto:ayushsjha2008@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-violet-400 hover:scale-105 transition-all duration-300">
                    <i className="fas fa-paper-plane"></i> Send Email
                </a>

                <div className="mt-12 flex justify-center gap-8 text-2xl text-gray-500">
                    <a href="https://github.com/AyushJha2008" className="hover:text-white transition-colors transform hover:-translate-y-1"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ayush-jha200805/" className="hover:text-blue-400 transition-colors transform hover:-translate-y-1"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="text-center mt-12 text-sm text-gray-600">
                &copy; 2026 Ayush Jha All rights are reserved. 
            </div>
        </div>
    </section>

  )
}

export default Contact