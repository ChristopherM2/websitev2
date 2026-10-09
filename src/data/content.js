export const profile = {
  name: 'Christopher Matheson',
  role: 'Software Engineer',
  pronouns: 'He/Him',
  tagline: 'Computer Science and Psychology graduate from Wilfrid Laurier University, with experience building REST APIs, backend services, and full-stack web applications.',
  status: 'Open to new graduate software engineering roles · Waterloo, ON or remote',
  email: 'chrism24747@gmail.com',
  phone: '519-860-9972',
  phoneHref: '+15198609972',
  location: '601-168 King St North, Waterloo, Ontario, N2J 0B8',
  locationShort: 'Waterloo, Ontario',
  openTo: 'Open to on-site, hybrid, and remote roles — based in the Waterloo–Kitchener region',
  github: 'https://github.com/ChristopherM2',
  linkedin: 'https://www.linkedin.com/in/christopher-matheson/',
  resume: '/Christopher-Matheson-Resume.pdf',
}

export const stats = [
  { value: '10.04', label: 'GPA / 12.0' },
  { value: '200+', label: 'Students’ code reviewed' },
  { value: '2', label: 'Hackathon projects' },
  { value: '13', label: 'Public repositories' },
]

export const about = [
  'I graduated from Wilfrid Laurier University in 2026 with an Honours Bachelor of Science in Computer Science and Psychology. The combination shapes how I approach engineering: I aim to build software that is technically sound and designed around the people who use it.',
  'Most recently, I worked as a Software Engineer Intern at LTM, developing REST/JSON APIs and SOAP/XML web services with Java Spring Boot and MuleSoft for a SaaS product suite. I also built proofs-of-concept with tech leads and solution architects to evaluate the feasibility of new features before they reached the product roadmap.',
  'During my degree, I spent three years as an Instructional Assistant, leading labs in Python, data structures, object-oriented programming, digital electronics, and microprocessors. Teaching strengthened both my technical fundamentals and my ability to explain complex concepts clearly. I also take part in hackathons, where I have built projects ranging from an AI debate coach to an award-winning Discord game.',
]

export const experience = [
  {
    company: 'LTM',
    role: 'Software Engineer Intern',
    location: 'Mississauga, Ontario',
    period: 'January 2026 — September 2026',
    current: true,
    bullets: [
      'Developed REST/JSON APIs and SOAP/XML web services using Java Spring Boot and the MuleSoft Anypoint Platform to support the company’s SaaS product suite.',
      'Built proofs-of-concept with tech leads and solution architects to evaluate the feasibility of new features and technical solutions in an Agile environment.',
      'Wrote unit and integration tests to maintain clean, well-reviewed, and performant code across new features, and documented design changes and prototype evaluations.',
    ],
    tags: ['Java', 'Spring Boot', 'MuleSoft', 'REST', 'SOAP/XML', 'Agile'],
  },
  {
    company: 'Dexlabs',
    role: 'Mechanical Engineering Intern',
    location: 'Etobicoke, Ontario',
    period: 'May 2025 — August 2025',
    bullets: [
      'Assisted in the design and development of mechanical components using SolidWorks, supporting design validation through prototyping, testing, and iteration.',
      'Participated in brainstorming sessions and mechanical concept development.',
      'Collaborated with industrial designers, manufacturers, and electrical engineers, documenting design changes and prototype evaluations.',
    ],
    tags: ['SolidWorks', 'Prototyping', 'Design validation', 'Cross-functional'],
  },
  {
    company: 'Wilfrid Laurier University',
    role: 'Instructional Assistant',
    location: 'Waterloo, Ontario',
    period: 'September 2023 — 2026',
    bullets: [
      'Co-led labs with fellow Instructional Assistants for Intro to Python, Data Structures I, Intro to Object-Oriented Programming, Digital Electronics, Intro to Microprocessors, and Windows App Programming, with 30–60 students per lab.',
      'Guided students from diverse backgrounds in developing problem-solving skills, helping them approach problems using different data structures.',
      'Assessed and graded code submissions from over 200 students in accordance with the grading scheme, providing constructive, detail-oriented feedback.',
    ],
    tags: ['Python', 'Data structures', 'C', 'ARM Assembly', 'Teaching'],
  },
]

export const education = {
  school: 'Wilfrid Laurier University',
  location: 'Waterloo, Ontario',
  degree: 'Honours Bachelor of Science, Computer Science & Psychology',
  detail: 'GPA 10.04 / 12.0',
  period: 'Graduated 2026',
}

export const projects = [
  {
    name: 'Debatrix',
    blurb: 'An AI debate coach built at SpurHacks 2025. Users submit an argument on a topic and receive structured coaching from Llama 3 70B via the Groq API, with every round persisted to MongoDB so users can review how their reasoning develops over time.',
    period: 'June 2025',
    category: 'AI',
    badge: 'SpurHacks 2025',
    tags: ['Next.js', 'TypeScript', 'Django', 'MongoDB', 'Groq API'],
    href: 'https://github.com/ChristopherM2/Spurhacks25',
    featured: true,
  },
  {
    name: 'A* Sliding Puzzle Solver',
    blurb: 'Generates and solves 200 randomized 8- and 15-puzzles across three heuristics — Manhattan, Euclidean, and misplaced tiles — in a configurable thread pool, then reports nodes explored per heuristic. Manhattan distance outperformed the alternatives by an order of magnitude.',
    period: 'February 2025',
    category: 'AI',
    tags: ['Python', 'A* search', 'Heuristics', 'Multithreading'],
    href: 'https://github.com/ChristopherM2/Cp468',
  },
  {
    name: 'Idle Farming Discord Bot',
    blurb: 'An idle farming game played entirely within Discord: crops grow in real time, harvests sell for in-game currency, and players reinvest in upgrades that compound their earnings. Built by a team of four over a hackathon weekend, winning Best Use of MongoDB Atlas.',
    period: 'May 2024',
    category: 'Web',
    badge: 'Winner · Best Use of MongoDB Atlas',
    tags: ['JavaScript', 'Node.js', 'Discord.js', 'MongoDB Atlas'],
    href: 'https://github.com/ChristopherM2/Hawkhacks24',
    featured: true,
  },
  {
    name: 'Student Database Grade & Report App',
    blurb: 'An Excel application in VBA and SQL that queries a relational database of 3000+ student records, surfaces trends through charts and pivot tables, and generates Word reports. User forms and modular code provide a clear, user-friendly interface.',
    period: 'March 2024',
    category: 'Data',
    tags: ['VBA', 'SQL', 'Excel', 'Reporting'],
    href: 'https://github.com/ChristopherM2/StudentMarksDatabase',
  },
  {
    name: 'Study Motivation Web App',
    blurb: 'Led a team in building a responsive study-motivation app in Next.js and TypeScript, backed by RESTful Django services and a Firebase database for real-time storage and synchronization, with an emphasis on efficient state management and a seamless user experience.',
    period: 'August 2024',
    category: 'Web',
    tags: ['TypeScript', 'ReactJS', 'Next.js', 'Python', 'Django', 'Firebase'],
    href: 'https://github.com/ChristopherM2/Study-Motivation-Website',
    featured: true,
  },
  {
    name: 'Huffman File Compressor',
    blurb: 'A from-scratch implementation of Huffman coding that compresses files into a compact encoded output with an accompanying key file, then restores the original losslessly during decompression.',
    period: 'July 2024',
    category: 'Systems',
    tags: ['Python', 'Huffman coding', 'Algorithms'],
    href: 'https://github.com/ChristopherM2/cp312',
  },
  {
    name: 'Groq Chat Bot',
    blurb: 'A Discord chatbot built on the Groq API that lets users switch between language models mid-conversation. Fully asynchronous for responsive command handling, with API keys kept out of the source code using environment variables via dotenv.',
    period: 'February 2025',
    category: 'AI',
    tags: ['Python', 'Groq API', 'asyncio', 'Discord'],
    href: 'https://github.com/ChristopherM2/Groq',
  },
  {
    name: 'Tic-Tac-Toe Brute Forcer',
    blurb: 'A Java bot that exhaustively searches the tic-tac-toe game tree and plays the line that secures a win or, at minimum, a draw.',
    period: 'September 2024',
    category: 'Systems',
    tags: ['Java', 'Game tree', 'Search'],
    href: 'https://github.com/ChristopherM2/TicTacToeBot',
  },
]

export const projectFilters = ['All', 'Web', 'AI', 'Data', 'Systems']

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL', 'R', 'Lua', 'VBA', 'ARM v7 Assembly', 'HTML/CSS'],
  },
  {
    group: 'Frameworks',
    items: ['Spring Boot', 'ReactJS', 'Next.js', 'Node.js', 'Django', 'FastAPI', 'MuleSoft Anypoint'],
  },
  {
    group: 'Technologies',
    items: ['Git & GitHub', 'MongoDB', 'MySQL', 'Firebase', 'HuggingFace', 'Excel', 'JetBrains', 'VSCode', 'Eclipse'],
  },
  {
    group: 'Certifications',
    items: ['Java Foundations Junior Associate'],
  },
]
