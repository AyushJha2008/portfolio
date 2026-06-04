import React from "react";
import edu1 from "../assets/edu1.jpeg";
import edu2 from "../assets/edu2.jpeg";
import edu3 from "../assets/edu3.jpg";

const Education = () => {
  return (
      <section id="education" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* <!-- Heading --> */}
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-gradient">Education</span>
          </h2>

          {/* <!-- Card 1 - Engineering --> */}
          <div className="mb-8">
            <div className="glass glass-hover rounded-2xl p-6 md:p-8 hover:cyan-400/60 transition">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src={edu1}
                  alt="college"
                  className="w-14 h-14 rounded-lg bg-white p-1 object-contain"
                />

                {/* <!-- Content --> */}
                <div>
                    <h3 className="text-xl font-bold text-whote">
                      Universal College Of Engineering, Vasai
                    </h3>

                    <p className="text-gray-300 mt-1">
                      Bachelor in Engineering - B.E. in Computer Science &
                      Engineering
                    </p>
                  

                  <p className="text-sm text-gray-400 mt-1">Aug 2023 - July 2027</p>

                  <p className="text-cyan-400 text-sm mt-2">Ongoing</p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    I am currently pursuing a Bachelor's degree in Computer
                    Science and Engineering. Completed 6 semesters with
                    coursework in Data Structures & Algorithms, OOPs, DBMS,
                    Operating Systems, and Computer Networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 - HSC --> */}
          <div>
            <div className="glass glass-hover rounded-2xl p-6 md:p-8  transition">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* <!-- Logo --> */}
                <img
                  src={edu2}
                  alt="college"
                  className="w-14 h-14 rounded-lg bg-white p-1 object-contain"
                />

                {/* <!-- Content --> */}
                <div>
                  <h3 className="text-xl font-bold text-whote">
                    B.N.N College of Arts, Commerce and Science, Bhiwandi
                  </h3>

                  <p className="text-gray-300 mt-1">HSC (XII), Science (PCMB)</p>

                  <p className="text-sm text-gray-400 mt-1">Apr 2021 - Apr 2023</p>

                  <p className="mt-3 text-gray-300">
                    <span className="font-medium">MHT-CET:</span> 80%ile
                    &nbsp;&nbsp;
                    <span className="font-medium">JEE:</span> 72%ile
                  </p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Completed Higher Secondary education with Science stream,
                    building a strong foundation in Mathematics and Physics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 - SSC --> */}
          <div className="mb-8 mt-8">
            <div className="glass glass-hover rounded-2xl p-6 md:p-8 hover:cyan-400/60 transition">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src={edu3}
                  alt="college"
                  className="w-14 h-14 rounded-lg bg-white p-1 object-contain"
                />

                {/* <!-- Content --> */}
                <div>
                  <h3 className="text-xl font-bold text-whote">
                    Sister Nivedita English Medium High School, Thane
                  </h3>

                  <p className="text-gray-300 mt-1">SSC (X)</p>

                  <p className="text-sm text-gray-400 mt-1">Apr 2020 - Apr 2021</p>

                  <p className="text-md mt-2">
                    {" "}
                    <span className="font-medium">Grade: </span>73.60%
                  </p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    I Completed my className 10 studies from Sister Nivedita English
                    medium of High School.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Education;
