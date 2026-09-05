export const profile = {
  name: 'Christopher Matheson',
  role: 'Software Engineer',
  pronouns: 'He/Him',
  tagline: 'Computer Science + Psychology graduate from Wilfrid Laurier. I build APIs, full-stack apps, and the occasional Discord bot that wins a hackathon.',
  status: 'Open to new grad software roles · Waterloo, ON or remote',
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
  { value: '2', label: 'Hackathons shipped' },
  { value: '13', label: 'Public repos' },
]

export const about = [
  'I graduated from Wilfrid Laurier University in 2026 with an Honours BSc, doubling in Computer Science and Psychology. The pairing wasn’t an accident — I like building software that accounts for the person on the other side of the screen.',
  'Most recently I was a Software Engineer Intern at LTM, writing REST/JSON APIs and SOAP/XML web services in Java Spring Boot and MuleSoft for a SaaS product suite, and building proofs-of-concept alongside tech leads and solution architects to pressure-test new ideas before they hit the roadmap.',
  'Alongside my degree I spent three years as an Instructional Assistant running labs for Python, data structures, OOP, digital electronics and microprocessors — which is the fastest way I know to find out whether you actually understand something. I also spend hackathon weekends gluing LLM APIs onto things that probably don’t need them.',
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
      'Wrote unit and integration tests to keep code clean, reviewed, and performant across new features, and documented design changes and prototype evaluations.',
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
      'Ran labs for Intro to Python, Data Structures I, Intro to Object-Oriented Programming, Digital Electronics, Intro to Microprocessors and Windows App Programming, with 30–60 students per lab.',
      'Guided students of diverse backgrounds through problem-solving, helping them approach the same problem with different data structures.',
      'Analyzed and graded over 200 students’ code submissions against the grading scheme, giving constructive, detail-oriented feedback.',
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
    blurb: 'An AI debate coach built at SpurHacks 2025. Users post an argument on a topic and get structured coaching back from Llama 3 70B via the Groq API, with every round persisted to MongoDB so you can revisit how your reasoning changed.',
    period: 'June 2025',
    category: 'AI',
    badge: 'SpurHacks 2025',
    tags: ['Next.js', 'TypeScript', 'Django', 'MongoDB', 'Groq API'],
    href: 'https://github.com/ChristopherM2/Spurhacks25',
    featured: true,
  },
  {
    name: 'A* Sliding Puzzle Solver',
    blurb: 'Generates and solves 200 randomized 8- and 15-puzzles across three heuristics — Manhattan, Euclidean, and misplaced tiles — in a configurable thread pool, then reports nodes explored per heuristic. Manhattan won by an order of magnitude.',
    period: 'February 2025',
    category: 'AI',
    tags: ['Python', 'A* search', 'Heuristics', 'Multithreading'],
    href: 'https://github.com/ChristopherM2/Cp468',
  },
  {
    name: 'Idle Farming Discord Bot',
    blurb: 'An idle farming game living inside Discord — crops grow in real time, you sell for currency, and reinvest in upgrades that compound your profit. Built with three friends over a weekend and won Best Use of MongoDB Atlas.',
    period: 'May 2024',
    category: 'Web',
    badge: '🏆 Best Use of MongoDB Atlas',
    tags: ['JavaScript', 'Node.js', 'Discord.js', 'MongoDB Atlas'],
    href: 'https://github.com/ChristopherM2/Hawkhacks24',
    featured: true,
  },
  {
    name: 'Student Database Grade & Report App',
    blurb: 'An Excel application in VBA and SQL that queries a relational database of 3000+ student records, surfaces trends through charts and pivot tables, and generates Word reports. User forms and modular code keep the UI approachable.',
    period: 'March 2024',
    category: 'Data',
    tags: ['VBA', 'SQL', 'Excel', 'Reporting'],
    href: 'https://github.com/ChristopherM2/StudentMarksDatabase',
  },
  {
    name: 'Study Motivation Web App',
    blurb: 'Led a team building a responsive study-motivation app in Next.js and TypeScript, backed by RESTful Django services and a Firebase database for real-time storage and sync. Focus was tight state management and a genuinely seamless flow.',
    period: 'August 2024',
    category: 'Web',
    tags: ['TypeScript', 'ReactJS', 'Next.js', 'Python', 'Django', 'Firebase'],
    href: 'https://github.com/ChristopherM2/Study-Motivation-Website',
    featured: true,
  },
  {
    name: 'Huffman File Compressor',
    blurb: 'A from-scratch Huffman coding implementation that compresses a file to a smaller encoded blob plus a companion key file, and decompresses it losslessly on the way back out.',
    period: 'July 2024',
    category: 'Systems',
    tags: ['Python', 'Huffman coding', 'Algorithms'],
    href: 'https://github.com/ChristopherM2/cp312',
  },
  {
    name: 'Groq Chat Bot',
    blurb: 'A Discord chatbot that fronts the Groq API so users can swap between models mid-conversation. Async throughout to keep command handling responsive, with API keys kept out of source via dotenv.',
    period: 'February 2025',
    category: 'AI',
    tags: ['Python', 'Groq API', 'asyncio', 'Discord'],
    href: 'https://github.com/ChristopherM2/Groq',
  },
  {
    name: 'Tic-Tac-Toe Brute Forcer',
    blurb: 'A small Java bot that brute-forces the game tree for tic-tac-toe and plays out the line that secures the win — or at worst, the draw.',
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
