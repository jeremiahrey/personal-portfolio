import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Award,
  Briefcase,
  Code2,
  ChevronDown,
} from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Awards",
    "Contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070F2B]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-[#9290C3]">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#9290C3] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-[#9290C3]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 relative">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#535C91] to-[#9290C3] flex items-center justify-center relative overflow-hidden shadow-2xl shadow-[#535C91]/50">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse"></div>
            <Code2
              size={64}
              className="text-white relative z-10"
              strokeWidth={1.5}
            />
          </div>
          {/* Decorative elements around the icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40">
            <div className="absolute top-0 left-0 w-3 h-3 bg-[#9290C3] rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-4 right-0 w-2 h-2 bg-[#535C91] rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-4 w-2 h-2 bg-[#9290C3] rounded-full animate-bounce"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#535C91] via-[#9290C3] to-[#535C91] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Backend Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
          Specializing in Scalable Architectures & API Design
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          BSIT Graduate passionate about building robust server-side
          applications and efficient database schemas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#535C91] to-[#9290C3] hover:from-[#1B1A55] hover:to-[#535C91] text-white rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#535C91]/30 hover:shadow-xl hover:shadow-[#535C91]/50 hover:scale-105">
            <Download size={20} />
            Download Resume
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#535C91] text-[#9290C3] hover:bg-[#535C91]/20 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#9290C3]"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skillGroups = [
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Prisma",
      ],
      highlight: true,
    },
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "HTML", "CSS", "Tailwind"],
      highlight: false,
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Netlify", "Render"],
      highlight: false,
    },
    {
      category: "Design",
      skills: ["Figma"],
      highlight: false,
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#535C91]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#9290C3]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`p-6 rounded-xl transition-all duration-300 relative overflow-hidden ${
                group.highlight
                  ? "bg-gradient-to-br from-[#535C91]/20 to-[#9290C3]/20 border-2 border-[#535C91] shadow-lg shadow-[#535C91]/20"
                  : "bg-[#1B1A55] hover:bg-[#1B1A55]/80 border border-[#070F2B]"
              }`}
            >
              {/* Gradient overlay for highlighted card */}
              {group.highlight && (
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9290C3]/5 to-transparent"></div>
              )}
              <h3
                className={`text-xl font-semibold mb-4 relative z-10 ${
                  group.highlight ? "text-[#9290C3]" : "text-gray-300"
                }`}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                      group.highlight
                        ? "bg-[#535C91]/30 text-[#9290C3] hover:bg-[#535C91]/50"
                        : "bg-[#070F2B] text-gray-300 hover:bg-[#535C91]/20"
                    }`}
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
  );
};

// Experience Component
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[#1B1A55]/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Experience
        </h2>

        <div className="relative border-l-2 border-[#535C91] pl-8 ml-4">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-[#535C91] rounded-full"></div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={20} className="text-[#9290C3]" />
              <span className="text-sm text-gray-400">2024 – Present</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Developer</h3>

            <p className="text-[#9290C3] mb-4">
              ICCT Computer Explorer Society – Antipolo Chapter
            </p>

            <p className="text-gray-400 mb-2 text-sm">
              ICCT Colleges Foundation Inc.
            </p>

            <p className="text-gray-300">
              Active member and developer involved in student organization
              technical projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    { id: 1, tags: ["Node.js", "PostgreSQL", "Express"] },
    { id: 2, tags: ["React", "TypeScript", "Tailwind"] },
    { id: 3, tags: ["Firebase", "Prisma", "MySQL"] },
    { id: 4, tags: ["Node.js", "React", "Render"] },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-[#535C91]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1B1A55] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#070F2B] hover:border-[#535C91] hover:shadow-xl hover:shadow-[#535C91]/20 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#070F2B] via-[#1B1A55] to-[#535C91]/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9290C3]/5 to-transparent group-hover:via-[#9290C3]/10 transition-all duration-300"></div>
                <Code2
                  size={48}
                  className="text-[#535C91] relative z-10 group-hover:text-[#9290C3] transition-colors duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Project {project.id}
                </h3>

                <p className="text-gray-400 mb-4">
                  Description of the project and its key features. This
                  showcases the implementation of various technologies.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#535C91]/20 text-[#9290C3] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-[#9290C3] hover:text-[#535C91] transition-colors">
                    <Github size={18} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-[#9290C3] hover:text-[#535C91] transition-colors">
                    <ExternalLink size={18} />
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Awards Component
const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 bg-[#1B1A55]/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Awards & Achievements
        </h2>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <Award size={32} className="text-yellow-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Champion - Hackathon Challenge
              </h3>

              <p className="text-xl text-gray-300 mb-2">
                Digital Innovations Fueling Sustainable Future
              </p>

              <p className="text-gray-400">ICCT Colleges Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#1B1A55] rounded-xl p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#070F2B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535C91]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-[#070F2B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535C91]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-[#070F2B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535C91]"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-[#535C91] hover:bg-[#1B1A55] text-white rounded-lg transition-colors duration-200">
                Send Message
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#1B1A55] hover:bg-[#1B1A55]/80 rounded-lg transition-colors duration-200"
            >
              <Github size={32} className="text-gray-300" />
              <div>
                <p className="text-white font-semibold">GitHub</p>
                <p className="text-gray-400 text-sm">
                  Check out my repositories
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#1B1A55] hover:bg-[#1B1A55]/80 rounded-lg transition-colors duration-200"
            >
              <Linkedin size={32} className="text-[#9290C3]" />
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-gray-400 text-sm">
                  Let's connect professionally
                </p>
              </div>
            </a>

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 p-4 bg-[#1B1A55] hover:bg-[#1B1A55]/80 rounded-lg transition-colors duration-200"
            >
              <Mail size={32} className="text-[#9290C3]" />
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400 text-sm">your@email.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-[#1B1A55]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Jeremiah Rey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-[#070F2B] min-h-screen text-gray-100">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}
