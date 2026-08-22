const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
  {
    id: 5,
    name: "Coding Profile",
    type: "profile",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 2,
    date: "Jan 31, 2026",
    title: "The React Documentation",
    image: "/images/react.png",
    link: "https://react.dev/learn",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS",],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Biswajit43",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Biswajit__Bera",
  },
  // {
  //   id: 4,
  //   text: "LinkedIn",
  //   icon: "/icons/linkedin.svg",
  //   bg: "#05b6f6",
  //   link: "https://www.linkedin.com/in/biswajit-bera/",
  // },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  // {
  //   id: 1,
  //   img: "/images/Biswajit_1.jpg",
  // },
  {
    id: 2,
    img: "/images/react.png",
  },
  // {
  //   id: 3,
  //   img: "/images/Biswajit_2.jpg",
  // },
  // {
  //   id: 4,
  //   img: "/images/Hackathon.jpg",
  // },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Ecommerce Shopper Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Shopper website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "It is the like a basic ecommerce website which has one admin panel and user can see it and buy using add to cart the item then can pay online using stripe payment gateway and only one admin can control who can add delete the item from the database",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with React-js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "shopper-for-you website",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://shopper-for-you.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "shopper.png",
          icon: "/images/shopper.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/shopper.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Sync YouTube Video Player",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Sync YouTube Video Player.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Sync YouTube Video Player is a real - time watch - party web application that allows multiple users to watch YouTube videos together.",
            "Users can create or join rooms and experience perfectly synchronized play, pause, and seek actions.",
            "The platform enables live interaction, making remote video watching feel shared and engaging.",
            "It is designed for smooth synchronization, low latency, and a simple, user- friendly experience."
          ],
        },
        {
          id: 2,
          name: "Sync YouTube Video Player.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://syncplayer.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Sync YouTube Video Player.png",
          icon: "/images/Syncplayer.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Syncplayer.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Namjap Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Namjap Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "NamJap is a modern, responsive web application designed as a sacred space for devotees to practice Japa meditation. It provides a focused, digital environment to help users cultivate a consistent spiritual practice (sadhana) by chanting, tracking progress, and finding daily inspiration."
          ],
        },
        {
          id: 2,
          name: "Namjap Website.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://namjap.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Namjap Website.png",
          icon: "/images/Namjap.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Namjap.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 8,
      name: "Coding Profiles",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Coding.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-[5%]",
          description: [
            "I love solving coding problems. I have solved more than 500 problems across multiple platforms. Here I have listed all my coding profiles."
          ],
        },

        // 🔹 LeetCode
        {
          id: 2,
          name: "LeetCode.com",
          icon: "/icons/leetcode_logo.png", // use png instead of base64
          kind: "file",
          fileType: "url",
          href: "https://leetcode.com/u/Biswajit32/",
          position: "top-5 left-[30%]",
        },

        // 🔹 Codeforces
        {
          id: 3,
          name: "Codeforces.com",
          icon: "/icons/codeforces.webp",
          kind: "file",
          fileType: "url",
          href: "https://codeforces.com/profile/Biswajit_03",
          position: "top-5 left-[55%]",
          imageUrl: "/icons/codeforces.webp",
        },

        // 🔹 CodeChef
        {
          id: 4,
          name: "CodeChef.com",
          icon: "/icons/cc-logo.svg",
          kind: "file",
          fileType: "url",
          position: "top-50 left-[5%]",
          href: "https://www.codechef.com/users/biswajitbera",

        },

        // 🔹 GeeksforGeeks
        {
          id: 5,
          name: "GeeksforGeeks.org",
          icon: "/icons/gfg.svg",
          kind: "file",
          fileType: "url",
          href: "https://www.geeksforgeeks.org/profile/bsbiswajvw2x",
          position: "top-50 left-[30%]",
        },
      ]
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Biswajit_1.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-30",
      imageUrl: "/images/Biswajit_2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-60",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Biswajit_1.jpg",
      description: [
        "Hey! I’m Biswajit 👋, a web developer who enjoys building sleek , interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I am proficient in cpp , javascript , love to solve coding problems ",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash : { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };