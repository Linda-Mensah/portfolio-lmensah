import {
  Shield,
  ShoppingCart,
  LayoutDashboard,
  Ticket,
  Link,
  Globe,
  Laptop,
  Monitor,
  Home,
  Gamepad,
  Briefcase,
} from "lucide-react";

export const projects = [
  {
    title: "HireLink",
    description:
      "HireLink is a streamlined hiring platform designed to simplify recruitment. It features multi-step job applications, admin and recruiter dashboards, and real-time applicant tracking. The platform improves hiring efficiency by providing role-based access, a modern responsive UI, and seamless workflow management across teams.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Zustand"],
    role: "Fullstack",
    links: { demo: "https://hire-link.netlify.app" },

    icon: Briefcase,
    image: "/hirelink-thumbnail.png",
  },
  {
    title: "CodeBlue Multi-Tenant Platform",
    description:
      "Codeblue is a multitenant emergency assistance platform designed to provide fast, location-based access to critical healthcare services. Using real-time geolocation, the application helps users quickly find nearby hospitals and pharmacies offering essential medications, vaccines, and diagnostic tests, enabling faster response times and improved access to life-saving care.",
    tech: ["React", "Multi-Tenant", "Real-time", "RBAC"],
    role: "Frontend",
    links: { demo: "https://codeblue-app.netlify.app" },
    icon: Shield,
    image: "/codeblue-thumbnail.png",
  },
  {
    title: "Bye-Bye Store Vendor Platform",
    description:
      "Bye-Bye Store is a multitenant vendor marketplace built to support full CRUD operations for product management and marketing. The platform enables multiple vendors to create, manage, update, and promote their products through a centralized system, streamlining inventory control, vendor onboarding, and product visibility for scalable e-commerce operations.",
    tech: ["React", "REST APIs", "Authentication", "E-commerce"],
    role: "Frontend",
    links: { demo: "https://bye-bye-store.netlify.app/user-ads" },
    icon: ShoppingCart,
    image: "/bb-store-thumbnail.png",
  },
  {
    title: "Kalys House Platform",
    description:
      "Kaly’s House is a mobile-first livestream hub that centralizes Kaly Jay’s 72-hour live event across X, YouTube, and TikTok. It provides one destination to watch streams, track the live schedule, view highlights, and apply for Fan Passes, boosting engagement, community participation, and social momentum throughout the event.",
    tech: ["Nextjs", "Prisma", "Typescript", "Resend", "Sanity CMS"],
    role: "Frontend",
    links: { demo: "https://www.kalyshouse.live/" },
    icon: LayoutDashboard,
    image: "/kalyshouse-thumbnail.png",
  },
  {
    title: "Vegatem",
    description:
      "VEGATEM is a healthcare-focused digital platform built to support the distribution and awareness of effective malaria treatment in endemic regions. The platform educates users on treatment usage, efficacy, and testing, while enabling partnerships with pharmacies, hospitals, NGOs, and distributors to expand access to proven, prescription-based malaria care worldwide.",
    tech: ["Nextjs", "Typescript", "TailwindCss", "Zustand"],
    role: "Frontend",
    links: { demo: "https://www.vegatemgh.com/" },
    icon: Globe,
    image: "/vegatem-thumbnail.png",
  },
  {
    title: "BallGbee Platform",
    description:
      "Ball Gbee is a dynamic sports platform celebrating football culture across Africa. It delivers immersive fan experiences through street challenges, podcasts, live watch-alongs, and premium events. Featuring a ticketing system and interactive dashboard, Ball Gbee enhances engagement, offering fans high-energy entertainment, community interaction, and a new way to connect with the game.",
    tech: ["Next.js", "Dashboard", "Ticketing", "Testing"],
    role: "Frontend",
    links: { demo: "https://ballgbee.live/" },
    icon: Ticket,
    image: "/ballgbee-thumbnail.png",
  },
  {
    title: "Vector Point Group",
    description:
      "VECTOR Point Group is a corporate platform representing a multinational organization focused on accelerating global expansion. The site highlights turnkey solutions in international trade, real estate development, and infrastructure, showcasing ongoing and completed projects across five continents while communicating the group’s expertise, partnerships, and long-term development vision.",
    tech: ["Next.js", "TailwindCss", "TypeScript", "Resend"],
    role: "Frontend",
    links: { demo: "https://vector-point-group.netlify.app/" },
    icon: Link,
    image: "vpg-thumbnail.png",
  },
  {
    title: "Care Agency Management",
    description:
      "CARE Agency Management is a comprehensive care agency management system designed for healthcare providers in the UK. Available on both the App Store and Play Store, the platform supports scheduling, billing, client management, and operational workflows, helping agencies streamline care delivery, improve efficiency, and manage clients and staff effectively.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    role: "PM/QA",
    links: { demo: "https://camapp.org.uk/" },
    icon: Laptop,
    image: "/cama-thumbnail.png",
  },
  {
    title: "Oval Admissions System",
    description:
      "OVAL Admissions System is a multitenant admissions management platform built for educational institutions. It streamlines the entire admissions lifecycle, including applications, reviews, approvals, and student records, providing institutions with a centralized, scalable system to manage applicants efficiently while improving transparency and administrative control.",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "Stripe"],
    role: "PM/QA",
    links: { demo: "#" },
    icon: Monitor,
    image: "/oval-admissions.png",
  },
  {
    title: "Livewell Website",
    description:
      "LIVEWELL is a wellness-focused event platform designed to promote healthy living and community engagement. It acts as the digital hub for the Livewell fitness and health festival, providing event details, schedules, sponsor exposure, volunteer sign-ups, and attendee registration, helping users explore wellness activities and stay informed before and during the event.",
    tech: ["Next.js", "TypeScript", "Postman", "Vercel", "Sanity CMS"],
    role: "Frontend",
    links: { demo: "https://livewellfestival.life/" },
    icon: Home,
    image: "/livewell-thumbnail.png",
  },
  {
    title: "Peeva Invitational",
    description:
      "PEEVA Invitational is a mobile-first digital platform created for a high school soccer tournament in Ghana. It serves as the tournament’s official hub, featuring live fixtures, results, standings, team profiles, news, highlights, and an integrated e-commerce store with card and mobile money payments, supported by a content management system.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Postman", "Vercel"],
    role: "Frontend",
    links: { demo: "https://peeva-invitational.vercel.app/" },
    icon: Gamepad,
    image: "/peeva-thumbnail.png",
  },
];
