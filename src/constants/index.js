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
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Frameworks Known" },
  { value: 100, suffix: "%", label: "Dedication" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/curious-learner.png.jpg",
    title: "Curious Learner",
    desc: " Love exploring new technologies and constantly learning beyond the classroom.",
  },
  {
    imgPath: "/images/tech-enthusiast.png.jpg",
    title: "Tech Enthusiast",
    desc: "From web development to AI, I love diving into different areas of tech and experimenting with ideas.",
  },
  {
    imgPath: "/images/time.png",
    title: "Growth-Minded",
    desc: "I believe in continuous improvement—learning from mistakes and always iterating.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Ishaan played a pivotal role in designing and developing the Colloquium website with great attention to detail and performance. His interactive UI implementations and ability to adapt quickly to requirements significantly enhanced our event’s digital presence.",
    imgPath: "/images/exp12.png",
    logoPath: "/images/ISTE.png",
    title: "Frontend Developer",
    date: "January 2025 - April 2025",
    responsibilities: [
  "Developed and deployed a responsive and dynamic website for Colloquium using React.js and Tailwind CSS.",
  "Integrated event registration, speaker line-up, and real-time updates functionalities to enhance user experience.",
  "Led hands-on frontend development workshops for beginners, covering modern web development practices.",
  "Collaborated with the design and logistics teams to ensure accurate and aesthetic representation of the event schedule and branding.",
]

  },
  {
    review:
      "Ishaan demonstrated excellent communication and marketing skills as a Campus Ambassador. His efforts significantly increased engagement and student participation in Academor’s programs.",
    imgPath: "/images/academor.jpeg",
    logoPath: "/images/academorLogo.webp",
    title: "Campus Ambassador",
    date: "November 2024 - February 2025",
    responsibilities: [
  "Promoted Academor’s webinars, workshops, and competitions across campus via digital campaigns and peer outreach.",
  "Facilitated onboarding of students onto the Academor platform, ensuring they understood available resources and opportunities.",
  "Collaborated with the core marketing team to design student-targeted outreach strategies and collect feedback for improving engagement.",
  "Achieved top-tier ambassador performance by exceeding registration targets and increasing brand presence at Thapar Institute.",
]
  },
  {
    review:
      "As an Internshala Student Partner, Ishaan actively drove awareness and engagement on campus. His strategic promotions and peer-to-peer outreach played a crucial role in encouraging students to explore internships and upskill through Internshala.",
    imgPath: "/images/intenshala.png",
    logoPath: "/images/internshala_logo.png",
    title: "Internshala Student Partner (ISP)",
    date: "April 2025 - Present",
    responsibilities: [
  "Promoted Internshala’s internship and training programs within the campus through both offline and online channels.",
  "Guided fellow students on how to register, build profiles, and apply for internships and trainings on the platform.",
  "Organized info sessions and campaigns to spread awareness about skill development and work-from-home opportunities.",
  "Achieved consistent growth in user sign-ups from campus, contributing to Internshala’s outreach objectives.",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/ishaan_sharma_05/",
    imgPath: "/images/insta.png",
  },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ishaan-sharma-6062bb291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgPath: "/images/linkedin.png",
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
};