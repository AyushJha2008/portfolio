import React from "react";
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

const events = [
  {
    image: event1,
    info: "36-Hour KnowCode 3.0 Hackathon at K.J. Somaiaya College",
  },
  {
    image: event2,
    info: "36-Hour KnowCode 3.0 Hackathon at K.J. Somaiaya College",
  },
  {
    image: event3,
    info: "Qualified for Finals,out of 300 teams we reached top 15",
  },
  {
    image: event4,
    info: "24-Hour Agentic AI Hackathon MumbaiHacks at NESCO",
  },
  {
    image: event5,
    info: "24-Hour Agentic AI Hackathon MumbaiHacks at NESCO",
  },
  {
    image: event6,
    info: "Tech Meetup - MongoDB MUG Meetup at BrowserStack Mumbai",
  },
  {
    image: event7,
    info: "Tech Meetup - VS Code Dev days at Microsoft Mumbai",
  },
  {
    image: event8,
    info: "Tech Meetup - VS Code Dev days at Microsoft Mumbai",
  },
  {
    image: event9,
    info: "Tech Meetup - MongoDB MUG Meetup at BrowserStack Mumbai",
  },
  {
    image: event10,
    info: "36-Hour Hackathon HackCelestial 2.0 at Pillai College of Engg, Navi Mumbai",
  },
  {
    image: event11,
    info: "My SIH team nominated for Semi Finals from our College",
  },
  {
    image: event12,
    info: "24-Hour Hackathon Coherence 2.0 at Vidyavardhini College of Engg, Vasai",
  },
  {
    image: event13,
    info: "24-Hour Hackathon Coherence 2.0 at Vidyavardhini College of Engg, Vasai",
  },
];

const Events = () => {
  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between items-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Tech <span className="text-gradient">Events</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Hackathons and Tech-Meetups I've attended which helped me to grow
            </p>
          </div>
        </div>

        <div className="overflow-hidden w-full py-10">
          <div className="flex w-max gap-6 animate-[scroll_30s_linear_infinite]  hover:[animation-play-state:paused]">
            {/* {[...events, ...events].map((img, index) => (
                        <img 
                        key={index} src={img} 
                        className="w-80 h-52 object-cover rounded-2xl flex-shrink-0"
                        />
                    ))} */}

            {[...events, ...events].map((event, index) => (
              <div key={index} className="relative group w-56 h-36 md:w-80 md:h-52 flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl glass glass-hover">
                <img src={event.image} alt="" className="w-full h-full object-cover"/>
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/60
                 opacity-0 group-hover:opacity-100
                 transition-all duration-300
                 flex items-center justify-center p-3 md:p-4"
                >
                  <p className="text-white text-center text-xs md:text-sm font-medium leading-snug">{event.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
