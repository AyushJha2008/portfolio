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
      highlights: ["Ongoing Studies", "SEMESTER_GPA: 9.0+ equivalent"],
      status: "CURRENTLY_ACTIVE"
    },
    {
      institution: "B.N.N College of Arts, Commerce and Science, Bhiwandi",
      degree: "Higher Secondary Certificate (HSC) - Science stream (PCMB)",
      period: "Apr 2021 - Apr 2023",
      logo: edu2,
      details: "Completed Higher Secondary education with Science stream, building a strong foundation in Mathematics, Physics, and analytical logic.",
      highlights: ["Grade: 60.30%", "MHT-CET: 80 percentile", "JEE Main: 72 percentile"],
      status: "COMPLETED"
    },
    {
      institution: "Sister Nivedita English Medium High School, Thane",
      degree: "Secondary School Certificate (SSC) - Tenth Grade",
      period: "Apr 2020 - Apr 2021",
      logo: edu3,
      details: "Finished standard secondary school curriculum with distinction and solid marks.",
      highlights: ["Grade: 73.60%"],
      status: "COMPLETED"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slatebg blueprint-grid-bg border-t border-gray-800 relative">
      
      {/* Decorative Blueprint Label */}
      <div className="absolute top-0 right-10 font-mono text-[9px] text-gray-700 select-none">
        [MODULE: SCHEMATIC_TIMELINE]
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-2 mb-20">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            My <span className="text-rust">Education</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs max-w-md mx-auto">
            [HISTORICAL_ACADEMIC_ROUTE_MAP]
          </p>
        </div>

        {/* Timeline container with technical outline track */}
        <div className="relative max-w-3xl mx-auto before:absolute before:top-2 before:bottom-2 before:left-4 md:before:left-8 before:w-[3px] before:bg-gray-800 before:border-l before:border-dashed before:border-rust/40">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 pb-12 last:pb-0 group">
              
              {/* Milestone Indicator Node */}
              <div className="absolute left-[9px] md:left-[25px] top-2.5 w-[16px] h-[16px] bg-slatebg border-2 border-gray-700 z-10 group-hover:border-rust group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-gray-700 group-hover:bg-rust"></span>
              </div>

              {/* Timeline Card */}
              <div className="bg-[#0e1116] border border-gray-800 p-5 md:p-8 shadow-[4px_4px_0px_#111827] hover:shadow-[5px_5px_0px_#f26a57] hover:border-rust transition-all duration-300 relative group overflow-hidden">
                <div className="blueprint-scanline"></div>
                
                {/* Dossier ID watermark */}
                <span className="absolute bottom-1 right-2 font-mono text-[8px] text-gray-700">
                  EDU_DOC_0{idx+1}
                </span>

                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  
                  {/* Institutional Seal Frame */}
                  <div className="p-1.5 bg-white border border-gray-800 flex items-center justify-center shrink-0 shadow-sm w-16 h-16">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details block */}
                  <div className="flex-grow text-left space-y-3">
                    
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-rust transition-colors leading-snug">
                        {edu.institution}
                      </h3>
                      <span className="text-[10px] font-mono bg-[#08090c] border border-gray-800 px-3 py-1 text-gray-400 font-medium">
                        [{edu.period.toUpperCase()}]
                      </span>
                    </div>

                    {/* Degree */}
                    <h4 className="text-xs font-mono text-rust uppercase tracking-wider">
                      // {edu.degree}
                    </h4>

                    {/* Status Badge */}
                    {edu.status && (
                      <div>
                        <span className={`inline-block text-[9px] font-mono px-2 py-0.5 border ${
                          edu.status === "CURRENTLY_ACTIVE"
                            ? "bg-emerald-950/80 text-emerald-400 border-emerald-900"
                            : "bg-gray-900 text-gray-500 border-gray-800"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    )}

                    {/* Paragraph */}
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                      {edu.details}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-2.5 font-mono text-[9px] pt-1">
                      {edu.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="bg-[#08090c] border border-gray-800 px-2 py-0.5 text-gray-300"
                        >
                          {highlight.toUpperCase()}
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

