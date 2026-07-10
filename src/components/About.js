const About = () => {
    return (
        <div className=" mt-5 justify-center items-center flex flex-col ">

            {/* Hero */}
            <div className="border-2 m-2 p-2 rounded-2xl bg-orange-400 text-white font-bold justify-center items-center flex flex-col w-fit">
                <h1 className="text-2xl">FOOD ORDERING APP🍕</h1>
                <p className="text-lg">A food delivery app built as a real-world React project,
                   powered by live Swiggy data.</p>
            </div>

            {/* Features */}
            <div className="border-2 m-2 p-2 rounded-2xl bg-orange-400 text-white font-bold justify-center items-center flex flex-col w-fit">
                <h2>What this app does</h2>
                <div className="about-cards">
                    <div className="about-card">
                        <span className="about-icon">🍽️</span>
                        <h3>Live restaurant data</h3>
                        <p>Fetches real-time data from Swiggy's API — actual restaurants near you.</p>
                    </div>
                    <div className="about-card">
                        <span className="about-icon">⭐</span>
                        <h3>Smart filtering</h3>
                        <p>Filter restaurants by top ratings instantly with one click.</p>
                    </div>
                    <div className="about-card">
                        <span className="about-icon">🔍</span>
                        <h3>Search</h3>
                        <p>Search restaurants by name in real time as you type.</p>
                    </div>
                    <div className="about-card">
                        <span className="about-icon">✨</span>
                        <h3>Shimmer UI</h3>
                        <p>Smooth loading skeletons instead of plain loading text.</p>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="about-section">
                <h2>Tech stack</h2>
                <div className="tech-stack">
                    {["React", "React Hooks", "JSX", "Parcel", "Swiggy API", "CSS"].map((tech) => (
                        <span className="tech-badge" key={tech}>{tech}</span>
                    ))}
                </div>
            </div>

            {/* Developer */}
            <div className="about-section developer-section">
                <div className="developer-avatar">PD</div>
                <div className="developer-info">
                    <h2>Pragati Dwivedi</h2>
                    <p>Frontend developer in the making. Building real projects to learn React the right way — through the Namaste React course by Akshay Saini.</p>
                    <div className="developer-links">
                        <a href="https://github.com/pragatidwivedii" target="_blank" rel="noreferrer">
                            GitHub → https://github.com/pragatidwivedii
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;