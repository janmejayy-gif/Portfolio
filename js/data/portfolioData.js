// js/data/portfolioData.js - Verified Data Source for Janmejay Tiwari

window.PORTFOLIO_DATA = {
  personal: {
    name: "Janmejay Tiwari",
    brandName: "JANMEJAY",
    role: "Full-Stack MERN Developer",
    supportingIdentity: "AI/ML & Data Science Enthusiast",
    positioning: "Full-Stack MERN Developer | AI/ML & Data Science Enthusiast",
    statusBadge: "Available for Full-Stack & SDE Roles",
    headline: "Building Modern Web Applications with MERN Stack & AI",
    conciseIntro: "I build scalable, responsive web applications using MongoDB, Express.js, React.js and Node.js, while exploring AI/ML and data-driven technologies to solve real-world problems.",
    location: "Lucknow, Uttar Pradesh, India",
    email: "janam3152@gmail.com",
    github: "https://github.com/janmejayy-gif",
    linkedin: "https://www.linkedin.com/in/janmejay-tiwari-yogi-445a70396",
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
      "I am a passionate Full-Stack MERN Developer and Computer Science & Engineering (Data Science) undergraduate at Goel Institute of Technology & Management, Lucknow. I specialize in turning complex product requirements into scalable, responsive, and reliable digital systems.",
      "My core engineering stack is rooted in MongoDB, Express.js, React.js, and Node.js (MERN), backed by robust RESTful APIs, clean modular component architecture with Tailwind CSS, and Java. I emphasize performance, seamless user experience, and secure database modeling.",
      "Blending modern full-stack development with AI/ML, Python data exploration, and rigorous Data Structures & Algorithms (DSA), I build technology solutions for practical real-world impact — from smart agricultural marketplaces (AgriFair) to digital land administration systems (LADI)."
    ],
    pillars: [
      { title: "MERN Stack Architecture", desc: "End-to-end full-stack web applications with React.js, Node.js, Express.js, and MongoDB." },
      { title: "Applied AI & Data Science", desc: "Machine learning exploration, statistical analysis, and data-driven insights using Python." },
      { title: "DSA & Problem Solving", desc: "Rigorous algorithmic thinking, clean code design, and scalable system architecture." }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", detail: "Hooks, Context & Component Lifecycle" },
      { name: "JavaScript (ES6+)", detail: "Async/Await, Promises & Modern Syntax" },
      { name: "Tailwind CSS", detail: "Utility-First, Responsive & Modern UI" },
      { name: "HTML5 & CSS3", detail: "Semantic Web, Flexbox & CSS Grid" }
    ],
    backend: [
      { name: "Node.js", detail: "Event-Driven Server Runtime & Event Loop" },
      { name: "Express.js", detail: "REST APIs, Routing, CORS & Middleware" },
      { name: "RESTful APIs", detail: "JWT Auth, Endpoint Design & Integration" },
      { name: "Spring Boot", detail: "Java Enterprise Backend Services" }
    ],
    database: [
      { name: "MongoDB", detail: "NoSQL Document Storage & Aggregation" },
      { name: "Mongoose ODM", detail: "Schema Modeling, Validation & Hooks" },
      { name: "MySQL / SQL", detail: "Relational Queries & Normalized Schemas" }
    ],
    programmingLanguages: [
      { name: "Java", detail: "Core OOPs, Collections & DSA" },
      { name: "JavaScript", detail: "Full-Stack MERN Web Development" },
      { name: "Python", detail: "Data Analytics, Scripting & Machine Learning" },
      { name: "DSA", detail: "Problem Solving, Time & Space Optimization" }
    ],
    aiAndDataScience: [
      { name: "Scikit-learn", detail: "Supervised/Unsupervised ML Modeling" },
      { name: "Pandas & NumPy", detail: "Data Wrangling & Vector Computations" },
      { name: "Matplotlib & Seaborn", detail: "Statistical & Data Visualization" },
      { name: "Exploratory Data Analysis", detail: "Feature Engineering & Data Insights" }
    ],
    developmentTools: [
      { name: "Git & GitHub", detail: "Distributed Version Control & Collaboration" },
      { name: "Postman", detail: "API Testing, Mocking & Documentation" },
      { name: "VS Code", detail: "Primary Code Editor & Debugging" },
      { name: "npm Ecosystem", detail: "Package Management & Build Toolchains" }
    ]
  },

  projects: [
    {
      id: "agrifair",
      name: "AgriFair",
      category: "fullstack",
      categoryLabel: "36H National Hackathon Winner • Agritech",
      summary: "Consolation Prize Winner at Chandigarh University 36-Hour National Hackathon with Team Algoriders. Built to empower farmers through localized market fair-trade, spatial telemetry, and voice-assisted digital commerce.",
      problemStatement: "Small-scale agricultural producers are constrained by multi-tier middlemen, opaque regional wholesale pricing, complex digital literacy barriers, and fragmented logistics with no localized spatial mapping.",
      solution: "Engineered an end-to-end Agritech platform where I led the responsive frontend development, integrated interactive Geo Maps for farm-to-mandi tracking, engineered a real-time negotiation chat system, and implemented an AI Voice Assistant for hands-free local dialect accessibility.",
      techStack: ["React", "JavaScript", "Geo Maps API", "AI Voice Assistant", "Real-Time Chat", "Node.js", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/Erkarancoder/AgriFair",
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
      githubUrl: "https://github.com/janmejayy-gif/SIH26016",
      status: "Analytical Model & Prototype",
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
      title: "Consolation Winner — Zinnovatio 4.0 (36-Hour National Hackathon)",
      organization: "Chandigarh University • Team Algoriders",
      type: "National Hackathon",
      period: "2024",
      description: "Bagged the Consolation Award at the intensive 36-Hour National Hackathon (Zinnovatio 4.0) held at Chandigarh University competing as Team Algoriders. Developed AgriFair, architecting the complete frontend system, integrating interactive Geo Maps, building a real-time buyer-seller chat system, and integrating an AI voice assistant.",
      photos: [
        { src: "assets/hackathon/zinnovatio-solo.jpg", label: "Event Badge" },
        { src: "assets/hackathon/zinnovatio-team.jpg", label: "Team Algoriders" },
        { src: "assets/hackathon/zinnovatio-certificate.jpg", label: "Official Certificate" },
        { src: "assets/hackathon/zinnovatio-venue.jpg", label: "Campus Arena" }
      ]
    },
    {
      title: "Hackathon Participant — HackWithHyderabad 3.0",
      organization: "Microsoft Office, Hyderabad • Hack With India × Devnovate",
      type: "Technology Hackathon",
      period: "2026",
      description: "Participated in HackWithHyderabad 3.0, an intensive 8-hour technology hackathon organized by Hack With India × Devnovate, held on-site at the Microsoft Office, Hyderabad.",
      certificate: "assets/certificates/hackwithhyderabad-certificate.jpg"
    },
    {
      title: "Ambassador",
      organization: "Career Catalyst Club",
      type: "Leadership & Community",
      period: "2024 – Present",
      description: "Serving as Student Ambassador at Career Catalyst Club, actively driving campus engagement, technical workshops, industry mentorship outreach, and peer learning initiatives for aspiring engineers."
    },
    {
      title: "Hackathon Participant — CODE RUSH 2.0",
      organization: "BBD University (BBDNIIT) • Team JAKY",
      type: "Inter-College Hackathon",
      period: "2023",
      description: "Participated in CODE RUSH 2.0 at BBD University (BBDNIIT) with Team JAKY. Built an AI Interviewer prototype, engineering role-specific prompt templates and an adaptive difficulty algorithm that dynamically adjusts interview questions based on candidate performance.",
      certificate: "assets/certificates/coderush2-certificate.jpg"
    }
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/janmejayy-gif", icon: "github", label: "Visit GitHub Profile" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/janmejay-tiwari-yogi-445a70396", icon: "linkedin", label: "Connect on LinkedIn" },
    { name: "Email", url: "mailto:janam3152@gmail.com", icon: "mail", label: "Send Email" }
  ]
};
