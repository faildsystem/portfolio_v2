import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  name: `Ahmed Mohamed`,
  role: "Dot Net Developer",
  avatar: "/images/avatar.jpg",
  email: "ahmedmohamed.system69@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/faildsystem",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/ahmed-mohamed-2284b1285",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Delivering powerful backend systems and APIs</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ahmed, a Junior backend developer, with a passion for building scalable and efficient systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ahmed is a Cairo-based backend developer with a passion for building scalable and efficient Backend systems.
        <br />
        With a strong foundation in computer science and a keen interest in backend development, Ahmed has honed his skills in programming languages such as Python, Java, and JavaScript. He is proficient in using frameworks such as Django, Spring Boot, and Node.js to build robust and scalable backend systems.
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    experiences: [
      {
        company: "Bachelor's degree in Computer and Data Science",
        timeframe: "2021 - 2025",
        role: "University of Alexandria",
        achievements: [
          <>
            Completed with a GPA of 3.34.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Applied Data Science course",
        timeframe: "2018 - 2022",
        role: "World Quant University",
        achievements: [
          <>
            Completed with "A" Grade.
          </>
        ],
        images: [],
      },
      {
        company: "AI & ML Summer Program",
        timeframe: "2021 - 2025",
        role: "Sprints",
        achievements: [
          <>
            Completed with "A" Grade.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Flutter Comprehensive Training program",
        timeframe: "2018 - 2022",
        role: "MyCommunication",
        achievements: [
          <>
            Completed with "A" Grade.
          </>
        ],
        images: [],
      },
    ],
  },
  studies_v2: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Alexandria",
        description: <>Completed a Bachelor's degree in Computer and Data Science (2021 - 2025) <br></br> with a GPA of 3.34.</>,
        
      },
      {
        name: "World Quant University",
        description: <>Completed the Applied Data Science course.</>,
      },
      { 
        name: "Sprints",
        description: <>Completed AI & ML Summer Program.</>,
      },
      {
        name: "MyCommunication",
        description: <>Completed the Flutter Comprehensive Training program.</>,
      },
      
    ],
  },
  skills: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "",
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "C#",
            icon: "c",
          },
          {
            name: "R",
            icon: "r",
          },
          {
            name: "Dart",
            icon: "dart",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "PostgreSQL",
            icon: "postgres",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: ".Net",
            icon: "dotnet",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
      },
    ],
  },

  technologies: {
    display: true, // set to false to hide this section
    title: "Technologies",
    technologies: [
      {
        title: "",
        tags: [
          {
            name: ".Net",
            icon: "dotnet",
          },
          {
            name: "Spring Boot",
            icon: "springBoot",
          },
          {
            name: "Fast API",
            icon: "fastAPI",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
      },
    ],
  },
};

// const blog: Blog = {
//   path: "/blog",
//   label: "Blog",
//   title: "Writing about design and tech...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `${person.name}'s Projects`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, newsletter, work, gallery };
