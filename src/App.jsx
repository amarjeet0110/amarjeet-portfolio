import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Download,
  Award,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918210111163";
  };

  const handleEmail = () => {
    window.location.href = "mailto:jiamarjeetji@gmail.com";
  };

  const downloadResume = () => {
  window.open("/Amarjeet Kumar Resume.pdf", "_blank");
};

  const projects = [
    {
      title: "POS System",
      description:
        "Developed a functional Point of Sale system with billing, inventory tracking, and customer management. Integrated graph-based data visualization for sales analysis.",
      tech: ["Python", "MySQL", "Data Visualization"],
    },
    {
      title: "Text Emotion Detection",
      description:
        "Built a text emotion detection model to classify user sentiments like happy, sad, anger, and fear using NLP preprocessing and machine learning techniques.",
      tech: ["Python", "NLP", "Machine Learning"],
    },
    {
      title: "Data Analysis Software",
      description:
        "Developed comprehensive data analysis software with advanced statistical tools, data visualization capabilities, and automated reporting features for business intelligence.",
      tech: ["Python", "Pandas", "Matplotlib", "Power BI"],
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "C++", "C"],
    Database: ["MySQL"],
    "Tools & Technologies": [
      "Power BI",
      "MS Office",
      "HTML",
      "GitHub",
      "IT Essentials",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative overflow-x-hidden">
      {/* Animated Background with Stars, Shooting Stars, Saturn and Sun */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Cosmic Galaxy Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Stars */}
        {[...Array(150)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${
                Math.random() * 5
              }s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: "100px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `shoot ${Math.random() * 3 + 4}s linear infinite`,
              animationDelay: `${i * 2}s`,
              transform: "rotate(-45deg)",
            }}
          />
        ))}

        {/* Sun */}
        <div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 shadow-2xl"
          style={{
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 60px rgba(255, 200, 0, 0.8), 0 0 100px rgba(255, 150, 0, 0.4)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />

        {/* Saturn orbiting around Sun */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "40%",
            animation: "orbit 20s linear infinite",
          }}
        >
          <div
            className="relative"
            style={{
              width: "200px",
              height: "200px",
              animation: "rotate 8s linear infinite",
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {/* Saturn planet */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400"></div>
                {/* Saturn rings */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 border-2 border-amber-300/60 rounded-full"
                  style={{ transform: "translate(-50%, -50%) rotateX(75deg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic nebula effects */}
        <div
          className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "4s" }}
        ></div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
        }
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 shadow-xl border-b border-purple-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AK
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {[
                  "Home",
                  "About",
                  "Projects",
                  "Skills",
                  "Achievements",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-blue-400 transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-4 py-4 space-y-3 border-t border-gray-700">
              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Achievements",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Photo at Top */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/profile.png"
                    alt="Amarjeet Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-60"></div>
              </div>
            </div>

            {/* Name and About Below Photo */}
            <div className="text-center max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Amarjeet Kumar
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                Computer Science Engineering Student
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Data Analytics | Government Engineering College Vaishali
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-10 px-4">
                Passionate about technology, data analysis, and IoT solutions.
                Building innovative projects that bridge the gap between
                theoretical knowledge and real-world applications. Always eager
                to learn and collaborate on exciting tech challenges.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="https://www.linkedin.com/in/amarjeet-kumar-45a4a0234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/amarjeet0110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.instagram.com/_amarjeet__10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://www.youtube.com/@amarjeetkumar-i1l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
                <button
                  onClick={handleEmail}
                  className="p-4 bg-green-600 rounded-full hover:bg-green-700 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </button>
                <button
                  onClick={handleCall}
                  className="p-4 bg-orange-600 rounded-full hover:bg-orange-700 transition-all transform hover:scale-110 shadow-xl"
                  aria-label="Phone"
                >
                  <Phone size={28} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-500/30">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Hello! I'm Amarjeet Kumar, a passionate Computer Science
                Engineering student specializing in IoT from Government
                Engineering College Vaishali. I thrive at the intersection of
                technology and problem-solving, with a keen interest in data
                analysis, smart systems, and practical applications of emerging
                technologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    Education
                  </h3>
                  <p className="text-gray-300 font-semibold">
                    B.Tech in CSE (IoT)
                  </p>
                  <p className="text-gray-400">CGPA: 7.26/10</p>
                  <p className="text-gray-400">2022-2026</p>
                </div>
                <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">
                    Location
                  </h3>
                  <p className="text-gray-300 font-semibold">
                    Patna, Bihar, India
                  </p>
                  <p className="text-gray-400">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/30 hover:border-purple-500"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-sm text-gray-200 border border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-500/30"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold shadow-lg hover:scale-110 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          id="achievements"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-500/30">
              <div className="flex items-center justify-center mb-8">
                <Award size={48} className="text-yellow-400 animate-pulse" />
              </div>
              <div className="space-y-6">
                <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    District-Level Chess Representative (College Champion)
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Won the College Chess Championship and proudly represented the institution at district-level tournaments,
                    demonstrating strategic thinking, competitive excellence, sportsmanship, discipline, and leadership through 
                    consistent performance and dedication.“Secured the College Chess Championship and represented the college at
                    district-level competitions, showcasing analytical skills, tactical expertise, perseverance, discipline, sportsmanship,
                    and the ability to perform under pressure.
                  
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110 flex items-center gap-3 text-lg shadow-2xl"
              >
                <Download size={24} />
               

                Download Resume
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-500/30">
              <p className="text-center text-gray-300 mb-8 text-lg">
                Feel free to reach out for collaborations, projects, or just a
                friendly chat!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-4 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
                >
                  <Phone size={24} />
                  <span className="font-semibold">Call Me</span>
                </button>
                <button
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
                >
                  <Mail size={24} />
                  <span className="font-semibold">Email Me</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 border-t border-purple-500/30 py-8 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/amarjeet-kumar-45a4a0234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/amarjeet0110"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all transform hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/_amarjeet__10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@amarjeetkumar-i1l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-all transform hover:scale-110 shadow-lg"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
          <p className="text-sm">
            &copy; 2024 Amarjeet Kumar. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Made with passion and code ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
