// const About = () => {
//     return (
//         <div className=" mt-5 justify-center items-center flex flex-col ">

//             {/* Hero */}
//             <div className="border-2 m-2 p-2 rounded-2xl bg-orange-400 text-white font-bold justify-center items-center flex flex-col w-fit">
//                 <h1 className="text-2xl">FOOD ORDERING APP🍕</h1>
//                 <p className="text-lg">A food delivery app built as a real-world React project,
//                    powered by live Swiggy data.</p>
//             </div>

//             {/* Features */}
//             <div className="border-2 m-2 p-2 rounded-2xl bg-orange-400 text-white font-bold justify-center items-center flex flex-col w-fit">
//                 <h2>What this app does</h2>
//                 <div className="about-cards">
//                     <div className="about-card">
//                         <span className="about-icon">🍽️</span>
//                         <h3>Live restaurant data</h3>
//                         <p>Fetches real-time data from Swiggy's API — actual restaurants near you.</p>
//                     </div>
//                     <div className="about-card">
//                         <span className="about-icon">⭐</span>
//                         <h3>Smart filtering</h3>
//                         <p>Filter restaurants by top ratings instantly with one click.</p>
//                     </div>
//                     <div className="about-card">
//                         <span className="about-icon">🔍</span>
//                         <h3>Search</h3>
//                         <p>Search restaurants by name in real time as you type.</p>
//                     </div>
//                     <div className="about-card">
//                         <span className="about-icon">✨</span>
//                         <h3>Shimmer UI</h3>
//                         <p>Smooth loading skeletons instead of plain loading text.</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Tech Stack */}
//             <div className="about-section">
//                 <h2>Tech stack</h2>
//                 <div className="tech-stack">
//                     {["React", "React Hooks", "JSX", "Parcel", "Swiggy API", "CSS"].map((tech) => (
//                         <span className="tech-badge" key={tech}>{tech}</span>
//                     ))}
//                 </div>
//             </div>

//             {/* Developer */}
//             <div className="about-section developer-section">
//                 <div className="developer-avatar">PD</div>
//                 <div className="developer-info">
//                     <h2>Pragati Dwivedi</h2>
//                     <p>Frontend developer in the making. Building real projects to learn React the right way — through the Namaste React course by Akshay Saini.</p>
//                     <div className="developer-links">
//                         <a href="https://github.com/pragatidwivedii" target="_blank" rel="noreferrer">
//                             GitHub → https://github.com/pragatidwivedii
//                         </a>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default About;


const AboutUs = () => {
  const skills = [
    "React", "JavaScript (ES6+)", "Redux Toolkit", "Firebase",
    "Tailwind CSS", "Vite", "Git & GitHub", "REST APIs",
  ];

  const projects = [
    {
      name: "NetflixGPT",
      desc: "Built a full-stack Netflix clone with email/password authentication using Firebase Auth, including field-level form validation and session persistence across page refreshes via onAuthStateChanged and engineered an AI-powered natural language movie search feature by integrating the Gemini API to parse user prompts into movie suggestions, cross-referenced with the TMDB API to fetch real posters, titles, and descriptions.",
    },
    {
      name: "Food Ordering App (this one!)",
      desc: "This is a full-stack-style food ordering web application inspired by Swiggy, built using React and Tailwind CSS. It features a dynamic restaurant listing page with shimmer UI for a smooth loading experience, and an accordion-style menu that fetches and displays restaurant items in an organized, collapsible layout. The app uses Redux Toolkit for global cart state management, allowing users to add, remove, and update item quantities in real time, along with cross-restaurant cart protection to prevent mixing items from different restaurants. The entire UI is fully responsive and styled with a custom orange theme to match the food-delivery aesthetic, and the project follows clean component architecture with reusable, well-structured React components.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Hi, I'm Pragati 👋</h1>
        <p className="text-gray-600 text-lg">Frontend Developer | React Enthusiast</p>
      </div>

      {/* Intro */}
      <div className="bg-orange-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          I'm a frontend developer passionate about building clean, functional,
          and user-friendly web applications. This app is one of my portfolio
          projects, built to sharpen my React and state management skills
          while creating something people can actually use. I love learning
          the "why" behind every concept, not just the "how" — and I'm always
          building, breaking, and rebuilding things to understand them better.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg text-orange-600 mb-1">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/pragatidwivedii/Food-Ordering-App"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pragati-dwivedi-00abb6360/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pragatihripra@gmail.com"
            className="text-orange-600 font-medium hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;