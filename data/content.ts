export type SkillCategory = {
  icon: string; // react-icons name, component selected in UI layer
  title: string;
  skills: { name: string; level: number }[];
};

export type EducationEntry = {
  level: string;
  degree: string;
  track?: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
};

export type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

// Skills
export const skillCategoriesData: SkillCategory[] = [
  { icon: 'FaCode', title: 'Programming Languages', skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'PHP', level: 85 },
    { name: 'Kotlin', level: 80 },
    { name: 'SQL', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'C++', level: 75 },
    { name: 'C#', level: 75 },
    { name: 'TypeScript', level: 85 },
    { name: 'R', level: 70 },
  ]},
  { icon: 'FaDesktop', title: 'Frontend Technologies', skills: [
    { name: 'React.js', level: 95 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Next.js', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'HTML5', level: 80 },
    { name: 'Vue.js', level: 75 },
    { name: 'CSS3', level: 75 },
  ]},
  { icon: 'FaServer', title: 'Backend Technologies', skills: [
    { name: 'Laravel', level: 90 },
    { name: 'PHP', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'GraphQL', level: 82 },
    { name: 'Express.js', level: 80 },
    { name: 'REST APIs', level: 78 },
  ]},
  { icon: 'FaDatabase', title: 'Database Technologies', skills: [
    { name: 'MySQL', level: 95 },
    { name: 'Firebase', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MariaDB', level: 80 },
    { name: 'MongoDB', level: 75 },
  ]},
  { icon: 'FaMobile', title: 'Mobile Development', skills: [
    { name: 'Android Studio', level: 75 },
    { name: 'React Native', level: 70 },
    { name: 'Flutter', level: 60 },
  ]},
  { icon: 'FaPalette', title: 'Design Tools', skills: [
    { name: 'Canva', level: 90 },
    { name: 'Figma', level: 85 },
    { name: 'Framer', level: 70 },
    { name: 'WordPress', level: 70 },
  ]},
  { icon: 'FaTools', title: 'Development Tools', skills: [
    { name: 'VS Code', level: 96 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'Postman', level: 75 },
    { name: 'Terminal', level: 73 },
  ]},
  { icon: 'FaCloud', title: 'Cloud & DevOps', skills: [
    { name: 'Firebase', level: 90 },
    { name: 'Vercel', level: 87 },
    { name: 'Netlify', level: 80 },
    { name: 'Railway', level: 80 },
    { name: 'AWS', level: 80 },
  ]},
];

export const softSkillsData: string[] = [
  'Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Project Management',
  'Time Management', 'Adaptability', 'Continuous Learning',
  'Attention to Detail', 'Analytical Thinking', 'Creativity', 'Customer Service', 'Foreign Language'
];

// Education
export const educationData: EducationEntry[] = [
  {
    level: 'Graduate',
    degree: 'Bachelor of Science in Information Technology',
    track: 'Web Technology Track',
    institution: 'University of the Cordilleras',
    location: 'Governor Pack Road, Baguio City',
    period: 'October 2025',
    description: 'Comprehensive IT degree with focus on web technology, software engineering, and modern technologies.',
    achievements: [
      'Maintaining strong academic performance',
      'Active participation in tech events and workshops',
      'Developing practical skills through hands-on projects',
      'Building a strong foundation in full-stack development'
    ],
    skills: ['Web Development', 'Software Engineering', 'Database Management', 'UI/UX Design', 'Project Management']
  },
  {
    level: 'Senior High School',
    degree: 'Accountancy and Business Management',
    track: 'ABM Strand',
    institution: 'Sta. Maria National High School – Senior High School',
    location: 'Sta. Maria, Alfonso Lista, Ifugao',
    period: 'May 2021',
    description: 'Completed senior high school with focus on business and accountancy, developing strong analytical and organizational skills.',
    achievements: [
      'Successfully completed the ABM curriculum',
      'Developed strong business acumen',
      'Enhanced analytical and problem-solving skills',
      'Built foundation for future business and technology studies'
    ],
    skills: ['Business Management', 'Financial Analysis', 'Problem Solving', 'Organization', 'Communication']
  }
];

export const seminarsData = [
  { title: 'DevFest Baguio 2025', date: 'Oct 18, 2025', venue: 'Baguio Convention Hall', description: 'Annual developer festival featuring the latest in technology, networking opportunities, and skill development workshops.' },
  { title: 'DevFest Baguio 2023', date: 'Nov 11, 2023', venue: 'UC Theater', description: 'Annual developer festival featuring the latest in technology, networking opportunities, and skill development workshops.' },
  { title: 'DevFest Baguio 2024', date: 'Nov 9, 2024', venue: 'UC Theater', description: 'Latest edition of the developer festival with cutting-edge tech insights and community building.' },
  { title: 'Startup Product Branding', date: 'Nov 15, 2024', venue: 'UC InTTO', description: 'Workshop on effective product branding strategies for startups and entrepreneurs.' },
  { title: 'Startup Ignite 6', date: 'Sept 28, 2024', venue: 'SLU Bakakeng', description: 'Startup acceleration program focusing on innovation and business model development.' },
  { title: 'Campus Tech Update', date: 'October 2, 2024', venue: 'UC Theater', description: 'Technology update session covering the latest trends and developments in the tech industry.' },
  { title: 'First Reverse Pitching', date: 'Sept 17, 2024', venue: 'UC Canao Hall', description: 'Innovative pitching event where students present solutions to real business challenges.' },
  { title: 'Techno Sprint 2025', date: 'Feb 7, 2025', venue: 'UC Theater', description: 'Fast-paced technology competition and learning event for students and professionals.' },
  { title: 'Startup Bootstrapping & PMF', date: 'Jan 16, 2025', venue: 'UC InTTO', description: 'Workshop on startup funding strategies and product-market fit validation.' },
  { title: 'SAP Analytics Cloud training', date: 'May 31, 2025', venue: 'UC M307', description: 'Hands-on training session on SAP Analytics Cloud for business intelligence and data visualization.' },
];

// Experience
export const experienceData: ExperienceEntry[] = [
  {
    title: 'Full Stack Developer',
    company: 'Department of Agriculture - Philippines',
    location: 'Baguio City, Cordillera Administrative Region, Philippines',
    period: 'Jun 2025 - August 2025',
    type: 'Internship',
    description: 'Intern supporting development initiatives with emphasis on debugging, full‑stack feature work, testing, version control, and documentation to improve system stability and usability.',
    responsibilities: [
      'Debugged and resolved critical system issues to ensure stability and functionality across frontend and backend components',
      'Implemented and optimized new features using full‑stack development practices to improve performance and usability',
      'Conducted regression, functional, and usability testing to validate fixes and ensure a seamless user experience',
      'Managed version control and coordinated code integration within the team to maintain a clean, scalable codebase',
      'Documented technical issues, applied solutions, and maintained development logs for ongoing maintenance and future enhancements'
    ],
    skills: ['Debugging', 'Full-Stack Development', 'Testing', 'Version Control', 'Technical Documentation']
  },
  {
    title: 'Payroll Assistant',
    company: 'Creotec Philippine Inc.',
    location: 'Laguna Technopark, Binan City, Laguna',
    period: 'May – June 2021',
    type: 'Internship (Work Immersion)',
    description: 'Work immersion internship supporting payroll processing and administrative functions during Senior High School.',
    responsibilities: [
      'Processed employee payroll data and maintained accurate records',
      'Assisted with administrative tasks and document management',
      'Collaborated with HR team on various projects',
      'Developed strong organizational and time management skills'
    ],
    skills: ['Data Processing', 'Administrative Support', 'Team Collaboration', 'Time Management']
  },
  {
    title: 'Business Assistant',
    company: 'Family-owned Business',
    location: 'Alfonso Lista, Ifugao',
    period: '2018 – present',
    type: 'Family Business',
    description: 'Assisted in the family-owned business, handling day-to-day operations, customer interactions, and administrative duties.',
    responsibilities: [
      'Supported daily business operations and administrative tasks',
      'Managed customer service and client interactions',
      'Helped with inventory and ordering',
      'Developed professional communication and problem-solving skills'
    ],
    skills: ['Business Operations', 'Customer Service', 'Inventory Management', 'Communication']
  }
];


