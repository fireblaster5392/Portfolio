const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 200, suffix: "K+", label: "Lines of Code" },
  { value: 6, suffix: "+", label: "Deployed Projects" },
  { value: 150, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 100, suffix: "%", label: "Passion for Innovation" },
];

const logoIconsList = [
  {
    iconClass: "devicon-amazonwebservices-plain-wordmark",
  },
  {
    iconClass: "devicon-angular-plain",
  },
  {
    iconClass: "devicon-azure-plain-wordmark",
  },
  {
    iconClass: "devicon-azuresqldatabase-plain",
  },
  {
    iconClass: "devicon-cplusplus-plain",
  },
  {
    iconClass: "devicon-dbeaver-plain",
  },
  {
    iconClass: "devicon-express-original-wordmark",
  },
  {
    iconClass: "devicon-github-original-wordmark",
  },
  {
    iconClass: "devicon-git-plain-wordmark",
  },
  {
    iconClass: "devicon-html5-plain-wordmark",
  },
  {
    iconClass: "devicon-javascript-plain",
  },
  {
    iconClass: "devicon-java-plain-wordmark",
  },
  {
    iconClass: "devicon-linkedin-plain-wordmark",
  },
  {
    iconClass: "devicon-mongodb-plain-wordmark",
  },
  {
    iconClass: "devicon-nextjs-original-wordmark",
  },
  {
    iconClass: "devicon-numpy-plain-wordmark",
  },
  {
    iconClass: "devicon-python-plain-wordmark",
  },
  {
    iconClass: "devicon-pytorch-plain-wordmark",
  },
  {
    iconClass: "devicon-r-plain",
  },
  {
    iconClass: "devicon-react-original-wordmark",
  },
  {
    iconClass: "devicon-scikitlearn-plain",
  },
  {
    iconClass: "devicon-slack-plain-wordmark",
  },
  {
    iconClass: "devicon-sqldeveloper-plain",
  },
  {
    iconClass: "devicon-typescript-plain",
  },
  {
    iconClass: "devicon-vscode-plain-wordmark",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Building complete web applications with modern technologies like React, Node.js, and cloud platforms.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI & Machine Learning",
    desc: "Developing intelligent solutions using Python, Scikit-Learn, and advanced algorithms for predictive analytics.",
  },
  {
    imgPath: "/images/time.png",
    title: "Cloud & DevOps",
    desc: "Deploying scalable applications on AWS, Azure with efficient CI/CD pipelines and infrastructure management.",
  },
];

const projects = [
  {
    title: "WildPulse",
    description: "An interactive platform to monitor endangered species affected by climate change, enabling public engagement through virtual animal 'adoption', camera access, and donation features to support ongoing research.",
    image: "/images/Wildpulse.png",
    tags: ["YOLOv8", "Google APIs", "Angular", "PrimeNg", "PrimeFlex"],
    liveUrl: "https://github.com/arjitchitkara/CALGARYHACKS",
    githubUrl: "https://github.com/fireblaster5392"
  },
  {
    title: "VistaShare",
    description: "A dynamic web application enabling hikers and urban explorers to discover and share hidden locations, enhancing community engagement through detailed user-generated content and interactive group discussions.",
    image: "/images/VistaShare.png",
    tags: ["React", "Google Maps API", "PrimeReact", "Express", "Node.js", "MySQL"],
    liveUrl: "https://github.com/fireblaster5392",
    githubUrl: "https://github.com/fireblaster5392"
  },
  {
    title: "Real-time Chat App",
    description: "A real-time chat application that enables instant messaging between users with features like user authentication, real-time message updates, and responsive design for seamless communication across devices.",
    image: "/images/chatapp.png",
    tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://github.com/fireblaster5392",
    githubUrl: "https://github.com/fireblaster5392"
  },
  {
    title: "Stock Predictor",
    description: "This project showcases my ability to develop predictive models for financial markets. Using Python, Pandas, and Scikit-Learn, I created a stock predictor that forecasts market trends with over 80% accuracy, providing valuable insights for investors.",
    image: "/images/stock.png",
    tags: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    liveUrl: "https://github.com/fireblaster5392",
    githubUrl: "https://github.com/fireblaster5392"
  }
]

const techStackImgs = [
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Cloud Engineer",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Data Analyst",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud Engineer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Data Analyst",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Dcluttr is a privately held data-infrastructure and analytics startup founded in 2024, positioning itself as an AI Copilot for growth marketing by consolidating all of a brand's sales-channel data into a single platform. It leverages AI-driven actionable insights—such as anomaly detection, multi-touch attribution models, ad-level profitability metrics and custom reporting—to help teams detect opportunities and issues in real time and make data-driven decisions at scale.",
    imgPath: "/images/dcluttr.png",
    logoPath: "/images/logos/python.svg",
    title: "Data Analyst Intern",
    company: "Dcluttr AI",
    date: "May 2025 - August 2025",
    location: "Delhi, India",
    responsibilities: [
      "Through developing and optimizing 10 ClickHouse materialized views ingesting 50 million+ daily records, reduced average query time from 2s to 250ms—enabling real-time analytics on 8,000 SKUs.",
      "Through fine-tuning LLaMA models on 60,000 labeled product-location pairs, automated keyword classification with 95% precision, cutting manual tagging workload by 80%.",
    ],
  },
  {
    review: "Supercrew is a tech-first D2C growth studio partnering with an exclusive club of brands to deliver tailored paid ads, social-media & design, SEO, media production, and software development solutions for sustainable scale.",
    imgPath: "/images/supercrew.png",
    logoPath: "/images/logos/react.png",
    title: "Software Developer Intern",
    company: "Superlytics Technologies",
    date: "May 2024 - August 2024",
    location: "India",
    responsibilities: [
      "Worked on React.js for the front-end development of the customer-side analytics dashboard for 50+ consumer brands",
      "Improved stock availability by 65% across 2000 pin codes for partner brands",
      "Developed APIs on Node.js for the authentication service to ensure smooth access management flow for 200+ stakeholders",
      "Built an in-depth understanding of various Software Development Life Cycles while working under software developers from Walmart and Microsoft",
    ],
  },
  {
    review: "For my growth in quantitative analysis, I proactively secured a remote mentorship with a HFT quantitative researcher—immersing myself in market-making, statistical and latency arbitrage strategies, and sub-microsecond system architecture—and was guided step-by-step to develop and backtest Python trading algorithms on tick-level data.",
    imgPath: "/images/quant1.jpg",
    logoPath: "/images/logos/python.svg",
    title: "Quantitative Trading Trainee",
    company: "Growth Experience",
    date: "Summer 2025",
    location: "Remote",
    responsibilities: [
      "Through shadowing a quant researcher at a leading HFT firm, learned and mastered core algorithmic strategies—market-making, statistical arbitrage, and latency arbitrage—and learned the architecture of sub-microsecond order-execution systems.",
      "Through developing and backtesting Python algorithms on 1 million+ tick-level simulated records, optimized execution logic to under 100 μs latency and improved signal detection accuracy by 15%.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Curiosity & Academics",
    mentions: "@passion",
    review:
      "I've always been driven by curiosity. After my first semester at the University of Calgary, I discovered a profound fascination with statistics—so much so that I formally added it as my minor alongside my Computer Science major. Diving into probability, data modeling, and analytics opened a new world for me, and I've been chasing its insights ever since.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Community Impact",
    mentions: "@community",
    review:
      "Community matters deeply to me. Back in high school, I co-founded GreenDream NGO with friends and teachers to pioneer better waste-collection methods and organize coastal clean-ups. Seeing our neighborhoods transform through hands-on action showed me the impact even small teams can make.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Leadership Journey",
    mentions: "@leadership",
    review:
      "Leadership excites and challenges me. At DPSI Ghana, I first served as Deputy Head Boy—then went on to become Secretary of the DPSI Care Foundation. Those roles taught me how to rally peers, coordinate projects under pressure, and turn bold ideas into real-world results.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Space & Innovation",
    mentions: "@innovation",
    review:
      "Space has been my lifelong passion. Ever since I can remember, I've been sketching star charts and hypothesizing about time travel—drafting theories that blend astrophysics with the mechanics of temporal loops. While my 'time-travel paper' still awaits publication, the thrill of exploring the unknown keeps me reaching for the stars.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Global Journey",
    mentions: "@global",
    review:
      "My journey spans four continents. Born in India, raised in Nigeria, schooled in Ghana, and now building my future in Canada, I thrive on new cultures, cuisines, and connections. I believe we're all part of one global family—bound by stories, shared curiosity, and the adventures that lie ahead.",
    imgPath: "/images/client5.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.linkedin.com/in/siddharth-vinodkumar-sadhwani/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.linkedin.com/in/siddharth-vinodkumar-sadhwani/"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://www.linkedin.com/in/siddharth-vinodkumar-sadhwani/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/siddharth-vinodkumar-sadhwani/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};