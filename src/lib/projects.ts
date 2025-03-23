export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  screenshots: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "E-Library",
    title: "Student Resource Portal",
    description: "A modern resource rich portal for college students built with React.js and Tailwind CSS.",
    coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
    technologies: ["React.js","Html", "Tailwind CSS"],
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1557821556-1498673f5c52?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/thatAshu/E-Libarary"
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills. Built with modern web technologies and animations.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/thatAshu/portfolio"
  },
  {
    slug: "Q-R Attendance System",
    title: "Attendace System",
    description: "A QR Attendance System built with Python, Django, HTML, CSS, and JavaScript allows users to mark attendance by scanning a unique QR code. The system generates and scans QR codes for students or employees, tracks attendance in real-time, and stores the data in a database for easy access and management.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    technologies: ["Python", "Dgango", " CSS","HTML","Javascript"],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/thatAshu/q-r-attendance"
  },
  {
    slug: "Tours and Travel Website",
    title: "Globe Glint",
    description: "GlobeGlint is a dynamic tours and travel website built with React, Tailwind CSS, and HTML. It offers users an interactive platform to explore travel destinations, book tours, and access detailed itineraries. The website features a sleek, responsive design with smooth navigation for an enhanced travel planning experience.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    technologies: ["React.js","Html", "Tailwind CSS"],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/thatAshu/GlobeGlint"
  }
];