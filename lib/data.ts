export const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express.js", "Django", "REST APIs" , "Fast API" , "GO-GIN"],
  Database: ["MongoDB", "MySQL","PostgreSql","Reddis"],
  "Machine Learning": ["Python", "Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "Selenium", "BeautifulSoup", "Scrapy"],
  Devops:["Load balancing","Micro Services","Distributed Systems","CI/CD pipelines"]
};

export const stats = [
  { num: "2+", label: "Years Learning" },
  { num: "12+", label: "Projects Built" },
  { num: "20+", label: "Technologies" },
  { num: "5+", label: "Open Source" },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  accentGradient: string;
  bgGradient: string;
  githubUrl: string;
  liveUrl: string | null;
  techColor?: string;
}

export const projects: Project[] = [
  {
    title: "Galaxy Fitness",
    description:
      "A modern gym and fitness website featuring responsive design, smooth animations, membership plans, trainer profiles, and lead generation features.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    emoji: "⚡",
    accentGradient: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
    bgGradient: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Income Prediction ML System",
    description:
      "Machine learning application that predicts income categories using data preprocessing pipelines and classification models.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    emoji: "🧠",
    accentGradient: "linear-gradient(90deg, var(--color-highlight), var(--color-warm))",
    bgGradient: "linear-gradient(135deg, #0D0D1A, #1A1A2E, #16213E)",
    githubUrl: "https://github.com",
    liveUrl: null,
    techColor: "highlight",
  },
];

export const services = [
  {
    icon: "⚙",
    title: "Full Stack Development",
    description:
      "Build modern web applications with scalable architecture, clean code, and exceptional user experiences from concept to deployment.",
    colorClass: "service-icon-primary",
  },
  {
    icon: "◈",
    title: "Machine Learning",
    description:
      "Train and deploy ML models for prediction and classification tasks. End-to-end pipelines from data preprocessing to production-ready APIs.",
    colorClass: "service-icon-accent",
  },
  {
    icon: "⟳",
    title: "Automation & Web Scraping",
    description:
      "Create automation tools and data collection systems using Python. Selenium, Scrapy, BeautifulSoup for any data extraction task.",
    colorClass: "service-icon-highlight",
  },
];

export const contactLinks = [
  {
    icon: "✉",
    label: "kaif@example.com",
    sub: "Email me directly",
    href: "mailto:kaif@example.com",
    colorClass: "contact-icon-primary",
  },
  {
    icon: "⌥",
    label: "github.com/kaifshaikh",
    sub: "View my repositories",
    href: "https://github.com",
    colorClass: "contact-icon-neutral",
  },
  {
    icon: "in",
    label: "linkedin.com/in/kaifshaikh",
    sub: "Connect professionally",
    href: "https://linkedin.com",
    colorClass: "contact-icon-primary",
  },
];
