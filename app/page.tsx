"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, FolderGit2, Download, Smartphone, ShoppingCart } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const portfolio = {
    name: "Fahmi N M",
    username: "kemoderate",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer specializing in mobile and web applications. Building scalable solutions with React Native, Node.js, Express, and modern database technologies including MongoDB and PostgreSQL.",
    location: "Bandung, Indonesia",
    email: "fahminomana@gmail.com",
    github: "https://github.com/kemoderate",
    linkedin: "https://www.linkedin.com/in/fahminaufalmaulana95/",

    skills: {
      languages: ["JavaScript", "Python", "SQL", "HTML/CSS"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
      databases: ["PostgreSQL", "SQLite", "MongoDB", "JSON Database"],
      frontend: ["React Native", "React", "EJS", "Responsive Design"],
      tools: ["Git", "GitHub", "VS Code", "npm", "Expo"]
    },

    projects: [
      {
        title: "Phonebook App",
        description: "Full-stack contact management application with React Native mobile interface and Express backend. Features CRUD operations, image upload with avatar management, real-time search, sorting, and pagination. Built with MongoDB for scalable data storage.",
        tech: ["React Native", "MongoDB", "Express", "Node.js", "Expo"],
        github: "https://github.com/kemoderate/PHONEBOOK",
        demo: null,
        featured: true,
        icon: "smartphone",
        images: [

          "/images/pos-app/login.png",
          "/images/pos-app/AddCustomers.png",
          "/images/pos-app/AddPurchases.png",
          "/images/pos-app/Customer.png",
          "/images/pos-app/dashboard.png",
          "/images/pos-app/dashboard2.png",
          "/images/pos-app/AddSales.png",
          "/images/pos-app/Users.png",
        ],
      },
      {
        title: "POS Application",
        description: "Point of Sale system built with Express.js backend featuring inventory management, transaction processing, and sales reporting. Implements RESTful API architecture with PostgreSQL database for robust data handling.",
        tech: ["Express.js", "PostgreSQL", "Node.js", "EJS", "RESTful API"],
        github: "https://github.com/kemoderate/pos-app",
        demo: null,
        featured: true,
        icon: "cart"
      },
      {
        title: "BREADpostgre",
        description: "Full-stack CRUD application with PostgreSQL database integration. Features complete Browse, Read, Edit, Add, and Delete operations with server-side rendering using EJS templates.",
        tech: ["Node.js", "PostgreSQL", "EJS", "Express"],
        github: "https://github.com/kemoderate/BREADpostgre",
        demo: null,
        featured: false
      },
      {
        title: "BREADSQLITE",
        description: "CRUD web application built with SQLite database. Lightweight and efficient data management system with full BREAD operations and clean EJS templating.",
        tech: ["Node.js", "SQLite", "EJS", "Express"],
        github: "https://github.com/kemoderate/BREADSQLITE",
        demo: null,
        featured: false
      },
      {
        title: "BREAD-JSON",
        description: "JSON-based CRUD application demonstrating data persistence with JSON files. Complete implementation of Browse, Read, Edit, Add, Delete operations with EJS views.",
        tech: ["Node.js", "JSON", "EJS", "Express"],
        github: "https://github.com/kemoderate/BREAD-JSON",
        demo: null,
        featured: false
      },
      {
        title: "Rubicamp",
        description: "JavaScript training project showcasing various programming concepts and implementations. Contains multiple exercises and practical applications.",
        tech: ["JavaScript", "Node.js"],
        github: "https://github.com/kemoderate/rubicamp",
        demo: null,
        featured: false
      }
    ],

    experience: [
      {
        role: "Full Stack Developer",
        company: "Freelance / Personal Projects",
        period: "2023 - Present",
        description: "Developing full-stack web and mobile applications with focus on scalable architecture. Specialized in React Native mobile development, Node.js backends with Express, and multi-database implementations (MongoDB, PostgreSQL, SQLite). Built production-ready applications including contact management systems and POS solutions."
      }
    ]
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case 'smartphone':
        return <Smartphone size={64} className="opacity-50" />;
      case 'cart':
        return <ShoppingCart size={64} className="opacity-50" />;
      default:
        return <Code size={64} className="opacity-50" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">

      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolio.name}
          </h1>

          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${activeSection === section
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-700"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>


      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-6xl font-bold">
            F
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {portfolio.name}
          </h2>
          <p className="text-2xl md:text-3xl text-blue-300 mb-2">{portfolio.title}</p>
          <p className="text-lg text-gray-400 mb-6">📍 {portfolio.location}</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{portfolio.bio}</p>

          <div className="flex gap-4 justify-center mb-8">
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Github size={24} />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${portfolio.email}`}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 text-blue-400">Who I Am</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm a Full Stack Developer based in Bandung, Indonesia, specializing in building modern
                mobile and web applications. With expertise in React Native for mobile development and
                Node.js/Express for backend systems, I create scalable solutions across multiple platforms.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 text-blue-400">What I Do</h4>
              <p className="text-gray-300 leading-relaxed">
                I develop full-stack applications from mobile apps to web services, with strong focus on
                clean architecture and efficient data management. My work includes contact management systems,
                POS applications, and various CRUD implementations using MongoDB, PostgreSQL, and other databases.
              </p>
            </div>
          </div>

          <h4 className="text-2xl font-bold mb-6 text-center">Technical Skills</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolio.skills).map(([category, skills]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h5 className="text-lg font-bold mb-3 capitalize text-cyan-400">{category}</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30"
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


      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h3>
          <p className="text-center text-gray-400 mb-12">
            Check out my work on{' '}
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300">
              GitHub @{portfolio.username}
            </a>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.projects.filter(p => p.featured).map((project, index) => {
              const currentIdx = currentImageIndex[index] || 0;
              const hasMultipleImages = project.images && project.images.length > 1;

              return (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
                >
                  {project.images && project.images.length > 0 ? (
                    <div className="relative h-64 overflow-hidden bg-slate-900 group">
                      <img
                        src={project.images[currentIdx]}
                        alt={`${project.title} - Screenshot ${currentIdx + 1}`}
                        className="w-full h-full object-contain transition-all duration-300"
                      />

                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={() => prevImage(index, project.images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => nextImage(index, project.images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            →
                          </button>

                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {currentIdx + 1} / {project.images.length}
                          </div>

                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIdx }))}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  imgIdx === currentIdx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-40 flex items-center justify-center">
                      {getProjectIcon(project.icon || 'code')}
                    </div>
                  )}
                  
                  {/* 👇 BAGIAN INI YANG HILANG - CONTENT CARD */}
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-3 text-blue-300">{project.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

                 {/* 👇 VIEW ALL PROJECTS BUTTON - DI LUAR GRID */}
          <div className="mt-12 text-center">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <FolderGit2 size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h3>
          
          {portfolio.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-300">{exp.role}</h4>
                  <p className="text-gray-400 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

          <section className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </a>
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors font-semibold"
                >
                  <Github size={20} />
                  <span>View GitHub</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                  <Mail className="mx-auto mb-3 text-blue-400" size={32} />
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="text-gray-400 text-sm break-all">{portfolio.email}</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                  <Github className="mx-auto mb-3 text-blue-400" size={32} />
                  <h4 className="font-bold mb-2">GitHub</h4>
                  <p className="text-gray-400 text-sm">@{portfolio.username}</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                  <Linkedin className="mx-auto mb-3 text-blue-400" size={32} />
                  <h4 className="font-bold mb-2">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">Connect with me @{portfolio.linkedin}</p>
                </div>
              </div>
            </div>
          </section>


          <footer className="py-8 px-4 border-t border-blue-500/20 bg-slate-900">
            <div className="max-w-6xl mx-auto text-center text-gray-400">
              <p>© 2026 {portfolio.name}. Built with React and deployed on Vercel.</p>
              <p className="text-sm mt-2">Made with ❤️ in {portfolio.location}</p>
            </div>
          </footer>
        </div>
        );
}