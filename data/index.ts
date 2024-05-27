export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const tech = ["/type.png", "/node.png", "/idhHZwYUWa.png", "/next.png", "/react.svg", "/tailwind.png"];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-top md:object-center",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "crafting high-performance web applications with sleek, user-friendly interfaces.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: " right-0 absloute",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building mern stack projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work with me ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center absolute md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "<Backend>",
    text: "I engineer robust backend systems using MongoDB, Express, and Node.js. From crafting efficient APIs to ensuring data integrity, I navigate backend complexities with precision. Each line of code is meticulously crafted for scalability, security, and reliability, reflecting my commitment to delivering seamless digital experiences.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[59vh]  md:min-h-[50vh] ",
    imgClassName: "  w-[20rem] object-top md:object-center",
    titleClassName: " justify-start",
    img: "/backend.png",
    spareImg: "",
  },
  {
    id: 8,
    title: "Crafting Stunning User Experiences: Showcasing My Frontend Mastery and Standout Solo Projects",

    className: "lg:col-span-3 md:col-span-3 md:row-span-1  min-h-[40vh] h-full",
    imgClassName: " absolute right-0 -bottom-12 md:w-96 w-60",
    titleClassName: " justify-start",
    img: "/frontend.png",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Quiz Boi | Next.js Mern Project",
    des: `upload quizzes, add questions, solve quizzes with data persistence , implemented cheat prevention mechanisms(timers,etc). dynamic homepage showcasing featured quizzes, user authentication,
    leaderboard functionalities, and social interactions including following, commenting, and likes.`,
    img: "/QuizBoi.png",
    gen: "Next",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://quiz-boi.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184615930960764929?compact=1",
    git: "https://github.com/Noorhesham/Quiz-Boi",
  },
  {
    id: 2,
    title: "Movie-Boi |React-IMDB-Netflex Clone",
    des: `
    Embark on a cinematic adventure with my React-powered web app The Movie Boi that seamlessly blends movies, anime, cartoons, actors, companies, and series into a unified entertainment hub. Effortlessly navigate through a diverse catalog using the intuitive search, sliders, and filters, ensuring you discover content tailored to your preferences.
  Elevate your browsing experience with sorting options, allowing you to arrange results by relevance, popularity, or other criteria. Express your opinions and insights by adding reviews, fostering a community where users can share recommendations and engage in discussions.
  The unique "to watchlist" feature transforms your viewing experience, shaping a personalized feed based on your liked movies. Tailor your watchlist to curate a feed that aligns with your taste, providing a curated selection of content that resonates with your preferences.
  Delve deeper into the world of entertainment by exploring information about actors, companies, and their contributions to your favorite shows. Our web app also includes a custom YouTube showcase, offering a seamless integration for trailers, interviews, and behind-the-scenes content. Enhance your visual experience with a dedicated image showcase, providing a captivating glimpse into the visual aesthetics of each title.
  With a sleek design and powerful functionalities, our React-based web app redefines the way you discover, organize, and enjoy a wide array of entertainment content.`,
    img: "/Screenshot (49).png",
    gen: "React",
    iconLists: ["/query.png", "/tail.svg", "/js.png", "/re.svg", "/supa.jpeg", "/fm.svg"],
    link: "https://the-movieboi.netlify.app/",
    video: "https://www.youtube.com/embed/EVnnrEWPId4?si=XwR6Ay2A_f_y6UsU",
    git: "https://github.com/Noorhesham/Netflex",
  },
  {
    id: 3,
    title: "Gaming-Castle| Vanilla js Mvc Gaming Store ",
    des: `more than 500k games using rawg api with details screenshots tags similar games everything clickable typing Javascript
    by mvc and oop Search with suggestions pagination and filters Sliders Zoom photo on click Wishlist responsive design and more....`,
    gen: "Javascript",
    img: "/gaming.png",
    iconLists: ["/sass.webp", "/js.png"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    title: "the wild oases",
    img: "/wild.png",
    video:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100006306765558%2Fvideos%2F2323603804515731%2F&show_text=false&width=560&t=0",
    gen: "React",
    link: "https://wild-oasis-noor.netlify.app/",
    iconLists: ["/query.png", "/tail.svg", "/js.png", "/re.svg", "/supa.jpeg", "/fm.svg"],

    des: `receive bookings from guests who want to come to your cabin as an emloyee , you will have the ability to edit delete add
          bookings or cabins have modern charts to show Statistcs and visualizes your data. upload photos and various information
          usingforms that handles all errors and ensure that you entered the right data and way more apility to Log in log out and sign up new accounts using real email verfication with passwords using Supabase
          React router to transition between different pages As a SPA and react query to handle the remote state`,
    id: 4,
    git: "https://github.com/Noorhesham/Wild-Oases",
  },
  {
    title: "Promptobia",
    img: "/prompt.png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/idhHZwYUWa.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7161779432167202816?compact=1",
    des: `Revolutionize your AI interactions with Promptopia – a platform for seamless prompt customization and management. Tailor AI responses, effortlessly organize prompts, and streamline retrieval with a tagging system.

    Join a vibrant community, showcase curated prompts, and elevate your AI journey. Secure sign-up with Google ensures a hassle-free experience.
    
    Crafted with Next.js, React, Tailwind CSS, MongoDB, and more, Promptopia promises a responsive, sleek, and dynamic user experience.
    
    Why Promptopia? Seize control, collaborate with AI pioneers, and be the architect of AI's evolution`,
    id: 5,
    link: "https://promptobia-noor-hesham.vercel.app/",
    git: "https://github.com/Noorhesham/NEXTSJ-promptobia-noorHesham",
  },
  {
    title: "Marvel Website Clone",
    img: "/marvel.png",
    gen: "Sass",
    iconLists: [ "/js.png"],
    video:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100006306765558%2Fvideos%2F462448592723232%2F%3Fidorvanity%3D1121696938256769&show_text=false&width=560&t=0",
    des: ` my inaugural frontend project – a static Marvel website crafted with HTML, CSS, and JS! 🌐✨ As the team leader, I orchestrated the seamless integration of movies, games, music, and news, creating a comprehensive hub for all things Marvel. Without APIs, we meticulously curated and added data to ensure a rich user experience. This project reflects not only my technical skills but also my leadership in assembling and guiding a collaborative team to bring our Marvel universe to life. Dive into the Marvel experience we've created – a testament to passion, teamwork, and the power of frontend development! 💪🎉 `,
    id: 6,
    git: "https://github.com/Noorhesham/Marvel_Web",
  },
  {
    title: "Speedy Wheels",
    img: "/wheeles.png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7162459948440842241?compact=1",
    des: `Speedy Wheels uses Server-Side Rendering (SSR) for lightning-fast performance. Say goodbye to sluggish load times and hello to seamless car exploration! 🚀

    🌈 Tailwind CSS Magic:
    Crafted with Tailwind CSS, Speedy Wheels not only performs like a dream but looks stunning too! 🎨💻
    
    💡 What makes it stand out?
    ✅ Effortless Browsing
    ✅ Smart Search
    ✅ Dynamic Filtering
    ✅ Comprehensive Car Info
    
    🛠️ Power of Headless UI Library:
    Speedy Wheels integrates seamlessly with the Headless UI library for an inclusive navigation experience. 🌐💻
    
    🚗 Your Personal Pit Stop:
    Whether you're an enthusiast, a buyer, or just curious, Speedy Wheels is your go-to destination – an experience tailored for all things automotive! 🏁
    
    👨‍💻 Built with Passion:
    I poured my heart into creating Speedy Wheels, blending functionality with a visually appealing interface – a testament to Next.js and Tailwind CSS.`,
    id: 7,
    link: "https://speedy-wheels.vercel.app/",
    git: "https://github.com/Noorhesham/cars-showcase-SSR-nextjs",
  },
  {
    title: "React Pizza App",
    img: "/pizza.png",
    gen: "React",
    link: "https://fast-pizza-app-noor.netlify.app/",
    iconLists: ["/re.svg", "/tail.svg", "/query.png"],
    des: `Simple pizza delivery App that takes name,orders from user calculate its price `,
    id: 8,
    git: "https://github.com/Noorhesham/fast-pizza",
  },
  {
    title: " Recipe  App",
    img: "/recipe.png",
    iconLists: ["/js.png",],
    des: ` an app to search for food recipes add bookmarks upload recipes change servings update the dom and more using
              mvc architect and oop`,
    id: 9,
    link: "https://noorhesham-recipes.netlify.app/#5ed6604591c37cdc054bcc13",
  },
  {
    title: " World Wise App",
    link: "https://worldwise-appnoor.netlify.app/",
    img: "/map.png",
    gen: "React",
    iconLists: ["/re.svg",],
    des: ` website to search cities and write down memories in an interactive map using react leaflet library`,
    id: 10,
    git: "https://github.com/Noorhesham/MapSearchCountries-citiesApp",
  },
  {
    title: "use popcorn",
    img: "/movies.png",
    gen: "React",
    iconLists: ["/re.svg",],
    des: ` a small app to search for movies save it to watch list etc.. `,
    id: 11,
    link: "https://movie-usepopcorn.netlify.app/",
  },
  {
    title: "japan journy",
    img: "/japan.png",
    gen: "Sass",
    iconLists: ["/sass.webp",],
    des: `Sass design for a travel webpage with cool css effects and animations `,
    id: 12,
    link: "https://japan-webpage.netlify.app/",
    git: "https://github.com/Noorhesham/Japan",
  },

  {
    title: "graphic designer portfolio",
    img: "/portfolio.png",
    gen: "Javascript",
    iconLists: ["/js.png",],
    des: `as a freelancer built up  a portfolio for a graphic designer to show its work`,
    id: 13,
    link: "https://japan-webpage.netlify.app/",
    git: "https://github.com/Noorhesham/graphic-designer-portfolio",
  },
  {
    title: "Next Auth",
    img: "/Screenshot (86).png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171953399498838016?compact=1",
    des: `Developed a comprehensive authentication system with a focus on security and user experience. This includes seamless multi-channel signup/login options (credentials, Google, and GitHub), a robust Two-Factor Authentication (2FA) system leveraging TypeScript's static typing for enhanced security, and a hassle-free forgot password mechanism. Implemented smooth user data updates through TypeScript's type-safe interfaces, ensuring both efficiency and reliability.

    Prioritized user satisfaction by meticulously handling errors on both the front and back end, utilizing TypeScript's strong typing to catch potential issues during development. Fortified sensitive routes with TypeScript-backed access controls, allowing only authorized users to navigate through secured sections, while establishing public routes with precision for non-sensitive segments of the application.
    
    Streamlined the email verification process using TypeScript, enhancing security and user trust through statically-typed code. Lastly, revolutionized access control with TypeScript's type-safe role-based authentication, enabling precise permissions based on user roles. This comprehensive approach ensures a secure, reliable, and user-friendly authentication experience throughout the application.`,
    id: 14,
    link: "https://auth-next-pi-eight.vercel.app/",
    git: "https://github.com/Noorhesham/Auth-Next",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
