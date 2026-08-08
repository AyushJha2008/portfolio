import React from "react";
import edu1 from "../assets/edu1.jpeg";
import edu2 from "../assets/edu2.jpeg";
import edu3 from "../assets/edu3.jpg";

const Education = () => {
  const educationData = [
    {
      institution: "Universal College Of Engineering and Technology, Vasai",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      period: "Aug 2023 - July 2027",
      logo: edu1,
      details: "Completed 6 semesters with coursework covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
      highlights: ["ongoing"]
    },
    {
      institution: "B.N.N College of Arts, Commerce and Science, Bhiwandi",
      degree: "Higher Secondary Certificate (HSC) - Science stream (PCMB)",
      period: "Apr 2021 - Apr 2023",
      logo: edu2,
      details: "Completed Higher Secondary education with Science stream, building a strong foundation in Mathematics, Physics, and analytical logic.",
      highlights: ["Grade: 60.30%", "MHT-CET: 80 percentile", "JEE Main: 72 percentile"]
    },
    {
      institution: "Sister Nivedita English Medium High School, Thane",
      degree: "Secondary School Certificate (SSC) - Tenth Grade",
      period: "Apr 2020 - Apr 2021",
      logo: edu3,
      details: "Finished standard secondary school curriculum with distinction and solid marks.",
      highlights: ["Grade: 73.60%"]
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          My <span className="text-gradient">Education</span>
        </h2>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto before:absolute before:top-2 before:bottom-2 before:left-4 md:before:left-8 before:w-[2px] before:bg-gradient-to-b before:from-violet-500 before:via-indigo-500 before:to-gray-800">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 pb-8 md:pb-12 last:pb-0 group">
              {/* Timeline Dot with pulse effect */}
              <div className="absolute left-[9px] md:left-[25px] top-1.5 w-[14px] h-[14px] rounded-full bg-violet-600 border-4 border-[#030712] z-10 group-hover:scale-120 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                {edu.status && (
                  <span className="absolute -inset-1.5 rounded-full border border-violet-400 animate-ping opacity-75"></span>
                )}
              </div>

              {/* Timeline Card */}
              <div className="glass rounded-2xl p-5 md:p-8 border border-white/5 hover:border-violet-500/30 transition-all duration-300 shadow-lg relative group">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  {/* Logo container */}
                  <div className="p-1.5 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Description Details */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-violet-300 transition-colors text-left">
                        {edu.institution}
                      </h3>
                      <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400 font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-violet-400 mb-4 text-left">
                      {edu.degree}
                    </h4>

                    {edu.status && (
                      <div className="text-left mb-4">
                        <span className="inline-block text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-md font-bold">
                          {edu.status}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 text-left">
                      {edu.details}
                    </p>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-gray-300 font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
