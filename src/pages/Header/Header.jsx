import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaChevronDown,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showActions, setShowActions] = useState(false);
  const [showFollowSheet, setShowFollowSheet] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Anchor links for one-page navigation
  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", href: "#home" },
    { id: "skills", icon: FaCode, text: "Skills", href: "#skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", href: "#experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", href: "#education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", href: "#projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", href: "#contact" },
  ];

  // Scroll to section and set active link
  const handleNavClick = (id, href) => {
    setActiveLink(id);
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social links for the follow sheet
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

  // Mailto link for Hire Me
  const mailTo = `mailto:mothomotsoanabk@gmail.com?subject=Interested working with you`;

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

      <header className="fixed top-0 left-0 w-full z-50 bg-gray-100/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
        <div className="w-full">
          <div className="p-[2px] animate-gradient-x">
            <nav className="bg-gray-100/90 backdrop-blur-md md:rounded-none px-4 md:px-8 py-2.5 w-full">
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between w-full">
                {/* Logo Left */}
                <a href="#home" className="text-black font-bold text-lg mr-8 whitespace-nowrap">Bokang Mothomotsoana</a>
                
                {/* Nav Links Center */}
                <div className="flex-1 flex justify-center">
                  <div className="flex flex-row items-center gap-4">
                    {navLinks.map(({ id, icon: Icon, text, href }) => (
                      <a
                        key={id}
                        href={href}
                        onClick={e => {
                          e.preventDefault();
                          handleNavClick(id, href);
                        }}
                        className={`px-3 py-2 rounded-full text-sm font-medium
                          transition-all duration-300 flex items-center gap-2
                          hover:bg-white/10 
                          ${
                            activeLink === id
                              ? "bg-white/15 text-blue-900 hover:text-green-500"
                              : "text-gray-900 hover:text-green-500"
                          }
                        `}
                      >
                        <Icon className={`text-base ${activeLink === id ? "scale-110" : ""}`} />
                        <span className="inline">{text}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Actions Dropdown */}
                <div className="relative ml-8">
                  <button
                    className="flex items-center gap-2 px-4 py-1.5 bg-white text-blue-900 font-semibold border border-blue-900 hover:bg-blue-900 hover:text-white transition"
                    onClick={() => setShowActions((v) => !v)}
                  >
                    Explore <FaChevronDown className={`transition-transform ${showActions ? "rotate-180" : ""}`} />
                  </button>
                  {showActions && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 text-blue-900 font-semibold border-b border-gray-100 last:border-b-0"
                        onClick={() => {
                          setShowActions(false);
                          setShowFollowSheet(true);
                        }}
                      >
                        Follow Me
                      </button>
                      <a
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 text-blue-900 font-semibold block"
                        href={mailTo}
                        onClick={() => setShowActions(false)}
                      >
                        Hire Me
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex justify-between items-center md:hidden px-2">
                <a href="#home" className="text-black font-bold">Bokang Mothomotsoana</a>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black p-2"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="flex flex-col gap-2 py-4 w-full">
                  {navLinks.map(({ id, icon: Icon, text, href }) => (
                    <a
                      key={id}
                      href={href}
                      onClick={e => {
                        e.preventDefault();
                        handleNavClick(id, href);
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium
                        transition-all duration-300 flex items-center gap-2
                        hover:bg-white/10 
                        ${
                          activeLink === id
                            ? "bg-white/15 text-blue-900 hover:text-green-500"
                            : "text-gray-900 hover:text-green-500"
                        }
                      `}
                    >
                      <Icon className={`text-base ${activeLink === id ? "scale-110" : ""}`} />
                      <span className="inline">{text}</span>
                    </a>
                  ))}
                  {/* Mobile Actions Dropdown */}
                  <div className="relative">
                    <button
                      className="flex items-center gap-2 w-full px-4 py-1.5 bg-blue-900 text-white font-semibold border border-blue-900 hover:bg-blue-900 hover:text-white transition mt-2"
                      onClick={() => setShowActions((v) => !v)}
                    >
                      Explore  <FaChevronDown className={`transition-transform ${showActions ? "rotate-180" : ""}`} />
                    </button>
                    {showActions && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-blue-50 text-blue-900 font-semibold border-b border-gray-100 last:border-b-0"
                          onClick={() => {
                            setShowActions(false);
                            setShowFollowSheet(true);
                          }}
                        >
                          Follow Me
                        </button>
                        <a
                          className="w-full text-left px-4 py-2 hover:bg-blue-50 text-blue-900 font-semibold block"
                          href={mailTo}
                          onClick={() => setShowActions(false)}
                        >
                          Hire Me
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <style>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            animation: gradient-x 3s linear infinite;
            background-size: 200% 200%;
          }
        `}</style>
      </header>
    </>
  );
}
