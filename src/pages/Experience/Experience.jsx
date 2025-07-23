import React from "react";
import { Code2, Cpu, Layers } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* White card with shadow */}
    <div className="relative bg-white rounded-lg p-8 h-full border border-gray-200 shadow-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-10 rounded-full blur-xl group-hover:opacity-30 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-500 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
        <div className="flex justify-between items-center text-gray-600">
          <span className="font-semibold text-blue-500">{company}</span>
          <span className="text-sm font-mono bg-blue-100 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-700 border-l-4 border-blue-200 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Cpu,
      title: "IT Officer",
      company: "Sun Events & Marketing",
      period: "2021 - 2021",
      description:
        "Managed IT infrastructure, supported event tech setups, and introduced digital marketing tools to boost event engagement and streamline operations.",
    },
    {
      icon: Layers,
      title: "Software Engineer",
      company: "OnePower Lesotho",
      period: "2021 - 2022",
      description:
        "Developed and maintained energy management software, optimized solar data analytics, and collaborated with cross-functional teams to deliver impactful solutions for rural electrification.",
    },
    {
      icon: Code2,
      title: "Senior Software Engineer",
      company: "CryptenX Technologies",
      period: "2023 - Present",
      description:
        "Leading a team building secure blockchain applications, architecting scalable fintech platforms, and driving innovation in digital asset management.",
    },
  ];

  return (
    <>
      <div id="experience"  className="min-h-screen bg-white relative overflow-hidden pt-8 pb-8">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-blue-700 text-center">
                My Blue Print 
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide text-center max-w-2xl">
              From event halls to energy grids and fintech innovation, my path is about building, connecting, and making a difference with technology.
            </p>
          </div>
          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
