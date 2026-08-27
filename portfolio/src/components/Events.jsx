import React, { useState } from "react";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";
import event7 from "../assets/event7.png";
import event8 from "../assets/event8.png";
import event9 from "../assets/event9.png";
import event10 from "../assets/event10.png";
import event11 from "../assets/event11.png";
import event12 from "../assets/event12.png";
import event13 from "../assets/event13.png";

const eventsList = [
  {
    image: event1,
    title: "KnowCode 3.0",
    type: "Hackathon",
    info: "Collaborating at K.J. Somaiya College's 36-hour hackathon",
  },
  {
    image: event2,
    title: "KnowCode 3.0",
    type: "Hackathon",
    info: "Collaborating at K.J. Somaiya College's 36-hour hackathon",
  },
  {
    image: event3,
    title: "KnoCode 3.0",
    type: "Hackathon",
    info: "Qualified for Finals, placing in the top 15 out of 300+ competing teams",
  },
  {
    image: event4,
    title: "MumbaiHacks",
    type: "Hackathon",
    info: "24-Hour Agentic AI Hackathon at NESCO Mumbai",
  },
  {
    image: event5,
    title: "MumbaiHacks",
    type: "Hackathon",
    info: "24-Hour Agentic AI Hackathon at NESCO Mumbai",
  },
  {
    image: event7,
    title: "VS Code Dev Days",
    type: "Meetup",
    info: "Attending the Microsoft VS Code Dev Days event at Microsoft Mumbai",
  },
  {
    image: event8,
    title: "VS Code dev Days",
    type: "Meetup",
    info: "Attending the Microsoft VS Code Dev Days event at Microsoft Mumbai",
  },
  {
    image: event9,
    title: "MongoDB MUG Meetup",
    type: "Meetup",
    info: "MongoDB MUG Meetup hosted at BrowserStack Mumbai office",
  },
  {
    image: event6,
    title: "MongoDB Meetup",
    type: "Meetup",
    info: "MongoDB MUG Meetup hosted at BrowserStack Mumbai office",
  },
  {
    image: event10,
    title: "HackCelestial 2.0",
    type: "Hackathon",
    info: "Competing in the 36-Hour Hackathon at Pillai College of Engineering",
  },
  {
    image: event11,
    title: "Smart India Hackathon",
    type: "Hackathon",
    info: "SIH project nominated for Semi-Finals from our college representation",
  },
  {
    image: event12,
    title: "Coherence 2.0",
    type: "Hackathon",
    info: "24-Hour hackathon at Vidyavardhini College of Engineering, Vasai",
  },
  {
    image: event13,
    title: "Coherence 2.0",
    type: "Hackathon",
    info: "Final sprints and presenting our MERN stack build to the jury",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredEvents = activeTab === "All"
    ? eventsList
    : eventsList.filter(event => event.type === activeTab);

  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

  return (
    <section id="hackathons" className="py-20 bg-slatebg blueprint-grid-bg border-t border-gray-800 relative">
      
      {/* Schematic border decoration */}
      <div className="absolute top-0 left-10 font-mono text-[9px] text-gray-700 select-none">
        [MODULE: SCRAPBOOK_EVENTS]
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col justify-between items-center mb-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Tech <span className="text-rust">Events</span>
            </h2>
            <p className="text-gray-400 font-mono text-xs max-w-md mx-auto">
              [GALLERY_OF_HACKATHONS_AND_DEVELOPER_MEETUPS]
            </p>
          </div>

          {/* Filtering tabs with custom blueprint styling */}
          <div className="flex bg-[#0e1116] border border-gray-800 p-1 rounded-sm gap-1 mt-8 font-mono text-xs">
            {["All", "Hackathon", "Meetup"].map((type) => (
              <button
                key={type}
                id={`events-filter-${type.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(type);
                  setShowAll(false);
                }}
                className={`px-5 py-2 transition-all ${
                  activeTab === type
                    ? "bg-rust text-black font-bold shadow-[2px_2px_0px_#000]"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                {type === "All" ? "ALL" : type.toUpperCase() + "S"}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Asymmetrical rotational Polaroid cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
          {visibleEvents.map((event, index) => {
            // Apply slight rotation to create a organic scrapbook look (respect reduced motion)
            const rotationClass = index % 3 === 0 
              ? "md:-rotate-1" 
              : index % 3 === 1 
                ? "md:rotate-1" 
                : "md:-rotate-0.5";

            return (
              <div 
                key={index} 
                className={`relative bg-[#0e1116] border border-gray-800 p-3.5 pb-6 shadow-[4px_4px_0px_#111827] hover:shadow-[5px_5px_0px_#f26a57] hover:border-rust hover:-translate-y-1 transition-all duration-200 overflow-hidden ${rotationClass} group`}
              >
                <div className="blueprint-scanline"></div>

                {/* Photo Image Frame */}
                <div className="relative aspect-[4/3] bg-[#08090c] border border-gray-800 overflow-hidden mb-4">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                  />
                  
                  {/* Category Stamp Badge */}
                  <span className={`absolute top-2 left-2 z-20 text-[9px] font-mono font-bold px-2 py-0.5 shadow-md ${
                    event.type === "Hackathon" 
                      ? "bg-red-950/80 text-red-400 border border-red-900" 
                      : "bg-blue-950/80 text-blue-400 border border-blue-900"
                  }`}>
                    {event.type.toUpperCase()}
                  </span>
                </div>

                {/* Polaroid caption - styled like handwriting index */}
                <div className="text-left space-y-1.5 font-mono">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight group-hover:text-rust transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] leading-relaxed">
                    {event.info}
                  </p>
                </div>

                {/* Cosmetic stamp grid point */}
                <span className="absolute bottom-1 right-2 font-mono text-[8px] text-gray-700">
                  AJ_DOC_{index+1}
                </span>
              </div>
            );
          })}
        </div>

        {/* Toggle Expand Button */}
        {filteredEvents.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              id="btn-toggle-events-gallery"
              className="px-6 py-3 bg-[#0e1116] border border-gray-800 hover:border-rust hover:bg-gray-900 text-gray-300 hover:text-white font-mono text-xs shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
            >
              {showAll ? "SHOW_LESS.TXT" : `VIEW_ALL_IMAGES.EXE (${filteredEvents.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;

