import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Krishna Chandra Maurya, a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I hold a B.Tech in Computer Science and Engineering from Raj Kumar Goel Institute of Technology, where I gained hands-on experience with technologies such as React, Node.js, and AWS. My internship at FodoAI enhanced my skills in Agile methodologies and responsive design. I thrive in collaborative environments and continuously seek to learn and adapt to new challenges. Outside of coding, I enjoy contributing to open-source projects and staying updated with the latest tech trends.`;

export const EXPERIENCES = [
  {
    year: "Nov. 2023 - Apr. 2024",
    role: "Web Developer Intern",
    company: "FodoAI",
    description: `During my internship at FodoAI, I immersed myself in developing an e-learning website. This project allowed me to use a variety of technologies, including React, TypeScript, Ant Design, SWR, Zustand, AWS, and Tailwind CSS, to build a dynamic and user-friendly platform. I optimized responsive design and UX, enhancing usability, and applied Agile methodologies to deliver high-quality features within tight deadlines.`,
    technologies: ["React", "TypeScript", "Ant Design", "SWR", "Zustand", "AWS", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "E-learning Website",
    image: project2,
    period: "Internship at FodoAI, Nov. 2023 - Apr. 2024",
    technologies: ["React", "TypeScript", "Ant Design", "SWR", "Zustand", "AWS", "Tailwind CSS"],
    description: `Developed an interactive and scalable e-learning platform using React and TypeScript, improving code maintainability. Optimized performance by implementing SWR for data fetching, reducing load time. Employed AWS for cloud services and Tailwind CSS for responsive styling, ensuring cross-device compatibility.`,
  },
  {
    title: "Real-time Chat Application",
    image: project1,
    period: "Sep. 2023 - Dec. 2023",
    technologies: ["Next.js", "Socket.io", "Tailwind CSS", "Node.js", "Zegocloud"],
    description: `Built a real-time chat application similar to WhatsApp, utilizing Next.js for server-side rendering and SEO optimization. Implemented Socket.io for real-time communication, enabling seamless message exchange between users. Integrated Zegocloud for multimedia storage and retrieval, enhancing user experience.`,
  },
  {
    title: "E-commerce Website",
    image: project3,
    period: "Sep. 2022 - Dec. 2022",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    description: `Designed a responsive e-commerce website with features for browsing, selecting, and purchasing products. Utilized React to create dynamic and interactive user interfaces, improving customer engagement. Implemented secure payment gateways and adhered to best practices for data protection.`,
  },
  {
    title: "Face Recognition System",
    image: project4,
    period: "Jul. 2021 - Sep. 2021",
    technologies: ["Python", "OpenCV"],
    description: `Developed a face recognition system using Python and OpenCV for security applications. Optimized performance by implementing caching techniques, reducing processing time.`,
  },
];

export const CONTACT = {
  address: "Noida Sector 61",
  phoneNo: "+91 7081565847",
  email: "kcmaurya2001@gmail.com",
};

export const PROFILE = {
  name: "Krishna Chandra Maurya",
  email: "kcmaurya2001@gmail.com",
  phone: "+917081565847",
  github: "https://github.com/imkrishna-23",
  linkedin: "https://www.linkedin.com/in/krishna-chandra-maurya-07aa90202/",
};

export const EDUCATION = {
  institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
  graduationDate: "July 2024",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "7.2 CGPA",
  coursework: [
    "DSA",
    "OOPs",
    "DBMS",
    "SDLC",
    "Operating System",
    "Computer Networks",
    "System Design",
  ],
};

export const SKILLS = {
  languages: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
  frameworks: ["React", "Node.js", "Express", "MongoDB", "Next.js", "Socket.io", "Tailwind CSS", "Zustand", "OpenCV"],
  tools: ["Git", "GitHub", "Git version control", "AWS"],
  softSkills: ["Teamwork", "Problem-solving", "Adaptability", "Time Management", "Leadership", "Creativity"],
};

export const ACHIEVEMENTS = [
  "Researched and authored a review paper on 'Blockchain Technology Security Issues and Privacy Challenges in Healthcare'.",
  "Recipient of PM Scholarship from 2020 to 2024.",
];

export const LEADERSHIP_AND_VOLUNTEERING = [
  {
    role: "CSSS Member",
    description: "Engaged with the Computer Society of the institution.",
  },
  {
    role: "College Technical Team",
    description: "Contributed to technical initiatives and projects.",
  },
  {
    role: "Event Organizer",
    description: "Organized and managed various college events and activities.",
  },
];
