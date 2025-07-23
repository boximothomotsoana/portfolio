import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/growing.css";
import { FlipWords } from "@/components/ui/flip-words";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";


export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX Designer",
    "Java Developer & Flutter Guru",
    "Learning Dart & Flutter, Laravel & Node.js",
    "Ubuntu & GitHub for DevOps ",
  ];

  const [code] = useState(`

class ProfileCard extends StatelessWidget {
  final Profile profile;

  const ProfileCard({super.key, required this.profile});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(24),
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(profile.name, style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 8),
            Text(profile.title, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 16),
            Text('Skills:', style: Theme.of(context).textTheme.titleSmall),
            Wrap(
              spacing: 8,
              children: profile.skills
                  .map((skill) => Chip(label: Text(skill)))
                  .toList(),
            ),
            const SizedBox(height: 16),
            Text('Years of Experience: profile.yearsOfExperience}'),
            const SizedBox(height: 8),
            Text('Hireable: profile.hireable  "Yes" : "No"}',
                style: TextStyle(
                  color: profile.hireable ? Colors.green : Colors.red,
                  fontWeight: FontWeight.bold,
                )),
          ],
        ),
      ),
    );
  }
}
  `);

  const [showFollowSheet, setShowFollowSheet] = useState(false);

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 w-6 h-6" />,
      url: "https://facebook.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-700 w-6 h-6" />,
      url: "www.linkedin.com/in/bokang-mothomotsoana-7b44b01b7",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 w-6 h-6" />,
      url: "https://github.com/boximothomotsoana",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-red-600 w-6 h-6" />,
      url: "https://www.youtube.com/@LearnTechWithMrB",
    },
  ];

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      {/* Left Sheet for Follow Me */}
      {showFollowSheet && (
        <div className="fixed inset-0 z-[999] flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setShowFollowSheet(false)}
          />
          {/* Sheet */}
          <div className="relative bg-white w-72 max-w-full h-full shadow-2xl p-6 flex flex-col animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setShowFollowSheet(false)}
              aria-label="Close"
            >
              <FaTimes size={22} />
            </button>
            <h3 className="text-xl font-bold mb-6 text-blue-700">Follow Me</h3>
            <div className="flex flex-col gap-5 mt-8">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  {s.icon}
                  <span className="font-medium">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes slideInLeft {
              from { transform: translateX(-100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .animate-slideInLeft {
              animation: slideInLeft 0.3s cubic-bezier(.4,0,.2,1);
            }
          `}</style>
        </div>
      )}

      <main id="home" className="bg-white text-black min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-200/70 backdrop-blur-sm border border-gray-300 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <span className="text-gray-700 text-xs sm:text-sm font-medium">
                  Happy to see you here! hope you enjoy my incentives.
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                  <span className="inline-flex items-center">
                    Hello
                    <span className="wave ml-2 inline-block">👋</span>
                  </span>
                  <span className="relative inline-block">
                    I am
                    <span className="typing-effect gradient-text">
                      {" "}
                      Bokang Sabastian Mothomotsoana
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-100/40 to-teal-100/40 border border-blue-200 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-500 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-700 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                  Flutter Cousin{" "}
                  <span role="img" aria-label="rocket">
                    🛩️
                  </span>{" "}
                  | Laravel brother{" "}
                  <span role="img" aria-label="wrench">
                    🛠️
                  </span>{" "}
                  | Exploring frameworks and Libraries
                  and cooking for my people while refreshing{" "}
                  <span role="img" aria-label="laptop">
                    🖥️
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* Follow Me Button */}
                <button
                  type="button"
                  onClick={() => setShowFollowSheet(true)}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-teal-300 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-white transition-all duration-300 group-hover:bg-gradient-to-r group_hover:from-blue-100 group_hover:to-teal-100">
                    <span className="relative flex items-center justify-center gap-2 text-black font-medium">
                      <span>Follow Me</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </button>

                {/* Get Resume Button */}
                <a
                  href="https://drive.google.com/file/d/18w57wXz992EHlrQ_UVOhZbhwe_-tf3x_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-200 to-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-white border border-gray-300 transition-all duration-300 group-hover:bg-gradient-to-r group_hover:from-gray-200 group_hover:to-gray-100">
                    <span className="relative flex items-center justify-center gap-2 text-gray-800 font-medium group-hover:text-black">
                      <span>Get Resume</span>
                      <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border rounded-2xl border border-gray-200 shadow-lg bg-white h-1/2 flex flex-col">
                <div className="code-window bg-gray-50 rounded-2xl flex flex-col h-full">
                  <div className="window-header flex items-center px-4 py-2 border-b border-gray-200 rounded-t-2xl bg-white">
                    <div className="window-dot bg-green-500 w-3 h-3 rounded-full mr-1"></div>
                    <div className="window-dot bg-red-500 w-3 h-3 rounded-full mr-1"></div>
                    <div className="window-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
                    <span className="ml-3 text-sm text-gray-900 flex items-center gap-2 font-semibold">
                      <i className="fas fa-code"></i>
                      Flutter Developer Sir Bokang Mothomotsoana
                    </span>
                  </div>
                  <pre
                    className="language-javascript rounded-b-2xl bg-white text-black p-4 overflow-y-auto flex-1"
                    style={{ maxHeight: "100vh", backgroundColor: "#f8f9fa" }}
                  >
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            Coding in Progress Be Patient
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
      </main>
    </>
  );
}
