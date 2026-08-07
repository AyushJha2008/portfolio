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
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col justify-between items-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Tech <span className="text-gradient">Events</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Hackathons and Meetups I've attended to learn and grow
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-xl gap-2 mt-8">
            {["All", "Hackathon", "Meetup"].map((type) => (
              <button
                key={type}
                id={`events-filter-${type.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(type);
                  setShowAll(false);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === type
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {type === "All" ? "All Events" : type + "s"}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEvents.map((event, index) => (
            <div 
              key={index} 
              className="relative group h-56 overflow-hidden rounded-2xl glass border border-white/5 shadow-lg hover:border-violet-500/30 transition-all duration-300"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Type Badge */}
              <span className={`absolute top-4 left-4 z-20 text-xs px-2.5 py-1 rounded-md font-semibold ${
                event.type === "Hackathon" 
                  ? "bg-red-500/20 text-red-300 border border-red-500/30" 
                  : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
              }`}>
                {event.type}
              </span>

              {/* Hover overlay with detail content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-bold mb-1 tracking-wide">{event.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{event.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Expand Button */}
        {filteredEvents.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              id="btn-toggle-events-gallery"
              className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-violet-500/40 text-gray-300 hover:text-white rounded-xl transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-violet-600/10"
            >
              {showAll ? "Show Less" : `View All (${filteredEvents.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
