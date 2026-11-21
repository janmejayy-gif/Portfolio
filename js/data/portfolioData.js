// js/data/portfolioData.js - Verified Data Source for Janmejay Tiwari

window.PORTFOLIO_DATA = {
  personal: {
    name: "Janmejay Tiwari",
    brandName: "JANMEJAY",
    role: "Full-Stack Developer",
    supportingIdentity: "AI/ML & Data Science Enthusiast",
    positioning: "Full-Stack Developer | AI/ML & Data Science Enthusiast",
    statusBadge: "Available for Full-Stack & SDE Roles",
    headline: "Architecting Scalable Web Systems & Intelligent Data Solutions",
    conciseIntro: "Hi, I'm Janmejay Tiwari. I build responsive, end-to-end web applications and engineer data-driven solutions using modern full-stack architectures and machine learning.",
    location: "Lucknow, Uttar Pradesh, India",
    email: "janmejaytiwari@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#contact"
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

  about: {
    narrative: [
      "I am a dedicated Full-Stack Developer with a deep interest in software architecture, algorithm design, and applied machine learning. Currently pursuing my Bachelor of Technology in Computer Science & Engineering (Data Science) at Goel Institute of Technology & Management, Lucknow, I focus on transforming complex system requirements into clean, scalable, and responsive digital products.",
      "My engineering philosophy centers around continuous problem solving. Whether designing modular RESTful APIs with Node.js and Java, structuring intuitive client interfaces in React and Tailwind CSS, or extracting actionable patterns using Python and Scikit-learn, I prioritize maintainability, performance, and real-world utility.",
      "I actively explore modern web frameworks, data modeling techniques, and predictive algorithms, constantly expanding my technical breadth to develop tools that create tangible impact across critical domains like agriculture, land administration, and urban logistics."
    ],
    pillars: [
      { title: "Full-Stack Engineering", desc: "End-to-end web architecture from reactive frontend interfaces to resilient backend APIs." },
      { title: "Algorithmic Thinking", desc: "Strong focus on Data Structures & Algorithms, optimal complexity, and clean code." },
      { title: "Data Science & AI", desc: "Data wrangling, statistical analysis, and applied predictive modeling in Python." }
    ]
  },

  skills: {
    frontend: [
      { name: "React", detail: "Component Architecture & Hooks" },
      { name: "JavaScript (ES6+)", detail: "Modern Syntax & Async Flow" },
      { name: "Tailwind CSS", detail: "Responsive & Modern UI" },
      { name: "HTML5", detail: "Semantic Markup & Accessibility" },
      { name: "CSS3", detail: "Flexbox, Grid & Animations" }
    ],
    backend: [
      { name: "Node.js", detail: "Runtime Environment & Event Loop" },
      { name: "Express.js", detail: "Server Routing & Middleware" },
      { name: "Spring Boot", detail: "Java Enterprise Framework" },
      { name: "REST APIs", detail: "API Design, Auth & Integration" }
    ],
    programmingLanguages: [
      { name: "Java", detail: "Core, OOPs, Collections & DSA" },
      { name: "Python", detail: "Data Analysis & Scripting" },
      { name: "JavaScript", detail: "Full-Stack Web Development" },
      { name: "SQL", detail: "Relational Queries & Schemas" }
    ],
    database: [
      { name: "MongoDB", detail: "Document Storage & Mongoose" },
      { name: "MySQL", detail: "Relational Database Management" },
      { name: "SQL", detail: "Schema Design & Indexing" }
    ],
    aiAndDataScience: [
      { name: "Python", detail: "Scientific & Analytical Libraries" },
      { name: "Pandas", detail: "Data Manipulation & Cleaning" },
      { name: "NumPy", detail: "Multidimensional Vector Arrays" },
      { name: "Scikit-learn", detail: "Supervised & Unsupervised ML" },
      { name: "Matplotlib", detail: "Data & Statistical Visualization" }
    ],
    developmentTools: [
      { name: "Git", detail: "Distributed Version Control" },
      { name: "GitHub", detail: "Repository Management & Collaboration" },
      { name: "VS Code", detail: "Primary Integrated Development Environment" },
      { name: "Postman", detail: "API Testing & Endpoint Documentation" }
    ]
  },

  projects: [
    {
      id: "jalrakshak",
      name: "JALRAKSHAK",
      category: "fullstack",
      categoryLabel: "Smart Agriculture & Water Management",
      summary: "Agriculture-focused smart irrigation and water conservation management platform.",
      problemStatement: "Traditional agricultural irrigation results in severe water depletion, unequal distribution across farmland sectors, and crop damage due to the absence of continuous soil telemetry and intelligent scheduling.",
      solution: "Architected an integrated IoT-compatible software platform that ingests real-time soil moisture and environmental metrics, automatically computes precise hydration requirements, and schedules optimal water release to minimize waste and boost crop yield.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Active Prototype",
      verified: true
    },
    {
      id: "agrifair",
      name: "AgriFair",
      category: "fullstack",
      categoryLabel: "36H National Hackathon Winner • Agritech",
      summary: "Consolation Prize Winner at Chandigarh University 36-Hour National Hackathon with Team Algoriders. Built to empower farmers through localized market fair-trade, spatial telemetry, and voice-assisted digital commerce.",
      problemStatement: "Small-scale agricultural producers are constrained by multi-tier middlemen, opaque regional wholesale pricing, complex digital literacy barriers, and fragmented logistics with no localized spatial mapping.",
      solution: "Engineered an end-to-end Agritech platform where I led the responsive frontend development, integrated interactive Geo Maps for farm-to-mandi tracking, engineered a real-time negotiation chat system, and implemented an AI Voice Assistant for hands-free local dialect accessibility.",
      techStack: ["React", "JavaScript", "Geo Maps API", "AI Voice Assistant", "Real-Time Chat", "Node.js", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/janmejayy-gif/Portfolio",
      demoUrl: null,
      status: "Hackathon Winner",
      verified: true
    },
    {
      id: "ladi",
      name: "LADI",
      category: "aiml",
      categoryLabel: "Predictive Analytics & Land Governance",
      summary: "Land acquisition monitoring and risk prediction platform.",
      problemStatement: "Infrastructure and development projects frequently stall because historical land acquisition data, legal disputes, and regulatory compliance risks are siloed and difficult to forecast.",
      solution: "Developed an analytical monitoring engine that evaluates regional land acquisition parameters, cross-references historical dispute datasets, and generates data-backed risk scores to identify delays before capital commitment.",
      techStack: ["Python", "Pandas", "Scikit-learn", "JavaScript", "SQL", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Analytical Model & Prototype",
      verified: true
    },
    {
      id: "wait",
      name: "WAIT",
      category: "fullstack",
      categoryLabel: "Transit Telemetry & Urban Mobility",
      summary: "Public transport bus scheduling and seat availability concept.",
      problemStatement: "Urban commuters face prolonged, unpredictable transit waits and dangerous over-crowding due to lack of real-time passenger occupancy telemetry and dynamic schedule updates.",
      solution: "Designed a lightweight public transport monitoring web interface that provides live route scheduling, dynamic ETA calculations, and transparent seat availability indicators to streamline daily commuter transit.",
      techStack: ["React", "Node.js", "Express", "JavaScript", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com",
      demoUrl: null,
      status: "Concept & Interface",
      verified: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science & Engineering (Data Science)",
      institution: "Goel Institute of Technology & Management, Lucknow",
      location: "Lucknow, Uttar Pradesh",
      duration: "2024 – Present (2028)",
      status: "Pursuing Undergraduate",
      details: "Core focus on Data Structures & Algorithms, Java OOP, Full-Stack Web Systems, Database Management Systems, and Machine Learning foundations."
    },
    {
      degree: "Class 12th (Higher Secondary Certificate)",
      branch: "Science Stream",
      institution: "Reckon Public Academy, Mumbai",
      location: "Mumbai, Maharashtra",
      duration: "2024",
      status: "Completed",
      details: "Senior secondary education with focus on Physics, Chemistry, Mathematics, and Computer Science fundamentals."
    },
    {
      degree: "Class 10th (Secondary School Certificate)",
      branch: "General Sciences & Mathematics",
      institution: "St. Aloysius High School, Mumbai",
      location: "Mumbai, Maharashtra",
      duration: "2022",
      status: "Completed",
      details: "Secondary school education establishing foundational analytical mathematics and core academic sciences."
    }
  ],

  experienceAndAchievements: [
    {
      title: "Consolation Winner — 36-Hour National Hackathon",
      organization: "Chandigarh University • Team Algoriders",
      type: "National Hackathon",
      period: "2024",
      description: "Bagged the Consolation Award at the intensive 36-Hour National Hackathon held at Chandigarh University competing as Team Algoriders. Developed AgriFair, architecting the complete frontend system, integrating interactive Geo Maps, building a real-time buyer-seller chat system, and integrating an AI voice assistant."
    },
    {
      title: "Ambassador",
      organization: "Career Catalyst Club",
      type: "Leadership & Community",
      period: "2024 – Present",
      description: "Serving as Student Ambassador at Career Catalyst Club, actively driving campus engagement, technical workshops, industry mentorship outreach, and peer learning initiatives for aspiring engineers."
    }
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github", label: "Visit GitHub Profile" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", label: "Connect on LinkedIn" },
    { name: "Email", url: "mailto:janmejaytiwari@gmail.com", icon: "mail", label: "Send Email" }
  ]
};
