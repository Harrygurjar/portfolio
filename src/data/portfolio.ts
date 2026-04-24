export type SocialLink = {
  name: "GitHub" | "LinkedIn" | "Email";
  href?: string;
  label?: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const portfolio = {
  name: "Harsh Bhati",
  location: "Greater Noida, India",
  intro:
    "Full-stack developer building scalable web and mobile products with React, React Native, TypeScript, Node.js, and MongoDB. I focus on data-rich dashboards, geolocation workflows, offline-first experiences, and secure authentication.",
  titles: [
    "Full-Stack Developer",
    "React Native Developer",
    "TypeScript Engineer",
  ],
  about:
    "I am Harsh Bhati, a full-stack developer with around 2 years of hands-on experience building production-ready web and mobile applications. My work spans infrastructure and inspection platforms, responsive data-intensive interfaces, enterprise authentication with MSAL and OAuth, state management with Zustand, and performance-focused frontend architecture. I enjoy turning complex operational workflows into reliable, usable products.",
  skills: [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Zustand",
    "MSAL / OAuth",
    "Recharts",
    "UI UX Pro Max",
  ],
  projects: [
    {
      name: "Offline Inspection App",
      description:
        "An offline-first mobile inspection workflow with image capture, gallery access, geolocation tagging, and automatic synchronization when connectivity is restored.",
      stack: ["React Native", "TypeScript", "Zustand", "Geolocation APIs"],
    },
    {
      name: "Airport Inspection System",
      description:
        "A geolocation-driven inspection platform featuring file uploads, live map visualization, automated coordinate extraction, and report generation.",
      stack: ["React", "TypeScript", "Mantine UI", "Google Maps API"],
    },
    {
      name: "Road Analytics Dashboard",
      description:
        "An analytics dashboard for inspection workflows with chart-driven trend analysis, tabular reporting, and performance-oriented data visualization.",
      stack: ["React", "Mantine UI", "Recharts", ".NET"],
    },
    {
      name: "Admin Content Platform",
      description:
        "An admin-managed content platform for organizing events, media, and editorial content with clean UI flows and dependable API integration.",
      stack: ["React", "Node.js", "MongoDB", "Axios"],
    },
  ] as Project[],
  socials: [
    { name: "GitHub", label: "GitHub link coming soon" },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/harsh-bhati-493716241",
    },
    { name: "Email", href: "#contact" },
  ] as SocialLink[],
};
