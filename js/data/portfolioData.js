// js/data/portfolioData.js - Verified Data Source for Janmejay Tiwari

window.PORTFOLIO_DATA = {
  personal: {
    name: "Janmejay Tiwari",
    brandName: "JANMEJAY",
    title: "Full-Stack Developer",
    positioning: "Full-Stack Developer | AI/ML & Data Science Enthusiast",
    statusBadge: "Available for Full-Stack & SDE Roles",
    location: "Lucknow, Uttar Pradesh, India",
    email: "janmejaytiwari@gmail.com", // Professional placeholder / contact email
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#contact", // Connect to contact / downloadable asset
    shortBio: "Passionate Full-Stack Developer and Computer Science undergraduate specializing in Data Science. Skilled in building resilient, scalable web applications and exploring data-driven machine learning solutions to solve practical, real-world problems."
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  education: {
    institution: "Goel Institute of Technology & Management, Lucknow",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering (Data Science)",
    status: "Third-Year Undergraduate",
    duration: "2022 – 2026",
    focus: "Data Structures & Algorithms, Full-Stack Web Development, Machine Learning, Database Management Systems"
  },

  skills: {
    frontend: [
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" }
    ],
    backend: [
      { name: "Java", level: "Core & Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Node.js", level: "Proficient" },
      { name: "REST APIs", level: "Proficient" }
    ],
    aiMlDataScience: [
      { name: "Python", level: "Proficient" },
      { name: "Pandas", level: "Data Processing" },
      { name: "NumPy", level: "Numerical Analysis" },
      { name: "Scikit-learn", level: "Model Development" },
      { name: "Matplotlib", level: "Visualization" }
    ],
    database: [
      { name: "MongoDB", level: "NoSQL" },
      { name: "MySQL", level: "RDBMS" },
      { name: "SQL", level: "Query Optimization" }
    ],
    tools: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration" },
      { name: "VS Code", level: "Primary IDE" },
      { name: "Postman", level: "API Testing" }
    ]
  },

  projects: [
    {
      id: "jalrakshak",
      name: "JALRAKSHAK",
      category: "fullstack",
      categoryLabel: "Smart Agriculture & IoT",
      summary: "Agriculture-focused smart irrigation and water management platform.",
      problemStatement: "Traditional irrigation causes acute water wastage, soil over-saturation, and uneven crop yield due to lack of localized soil moisture data and automated scheduling.",
      solutionOverview: "Engineered an intelligent water distribution architecture that monitors moisture parameters, calculates optimal crop water requirement, and enables automated conservation scheduling.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "IoT Sensors", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: null, // Marked unavailable honestly, no fake link
      status: "Active Development",
      featured: true
    },
    {
      id: "agrifair",
      name: "AgriFair",
      category: "fullstack",
      categoryLabel: "Agritech Marketplace",
      summary: "Agriculture-focused digital platform connecting producers directly with markets.",
      problemStatement: "Smallholder farmers face fragmented supply chains, lack of fair market pricing transparency, and heavy intermediary commissions.",
      solutionOverview: "Developed a comprehensive digital marketplace facilitating direct farmer-to-consumer transactions, transparent crop listing, and real-time agricultural price tracking.",
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Prototype Ready",
      featured: true
    },
    {
      id: "ladi",
      name: "LADI",
      category: "aiml",
      categoryLabel: "Land Monitoring & Predictive Analytics",
      summary: "Land acquisition monitoring and risk prediction platform.",
      problemStatement: "Land acquisition processes suffer from opaque dispute histories, developmental compliance bottlenecks, and unpredictable financial/legal delays.",
      solutionOverview: "Built a predictive data-driven platform that aggregates geospatial land records and uses analytical models to quantify acquisition risk factors and timeline projections.",
      technologies: ["Python", "Pandas", "Scikit-learn", "JavaScript", "REST APIs", "SQL"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Research & Prototype",
      featured: true
    },
    {
      id: "wait",
      name: "WAIT",
      category: "fullstack",
      categoryLabel: "Transit & Urban Mobility",
      summary: "Public transport bus scheduling and seat availability concept.",
      problemStatement: "Daily public transit commuters endure long unpredictable waiting times and overcrowded buses due to absent real-time telemetry and capacity metrics.",
      solutionOverview: "Designed an interactive urban mobility platform offering real-time transit bus tracking, anticipated arrival estimates, and live passenger occupancy previews.",
      technologies: ["JavaScript", "React", "Node.js", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Concept & Interface",
      featured: true
    }
  ],

  experience: [
    {
      title: "Technical Hackathons & Innovation Contests",
      organization: "National & Institutional Hackathons",
      type: "Hackathon Competitions",
      period: "2023 – Present",
      description: "Collaborated in high-intensity developer teams to ideate and prototype software solutions in agritech (Jalrakshak, AgriFair) and urban logistics within 24-48 hour sprints."
    },
    {
      title: "Full-Stack Development & Project Engineering",
      organization: "Independent & Academic Initiatives",
      type: "Technical Projects",
      period: "2023 – Present",
      description: "Architected end-to-end full-stack web applications with React, Node.js, and Java backend architectures; implemented REST APIs and integrated relational/NoSQL databases."
    },
    {
      title: "Technical Lead & Campus Coding Initiatives",
      organization: "Goel Institute of Technology & Management",
      type: "Leadership & Community",
      period: "2023 – Present",
      description: "Active contributor to campus technical peer groups, participating in coding challenges, competitive programming in Java, and collaborative data science discussions."
    }
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github", label: "Visit GitHub Profile" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", label: "Connect on LinkedIn" },
    { name: "Email", url: "mailto:janmejaytiwari@gmail.com", icon: "mail", label: "Send an Email", action: "copy" }
  ]
};
