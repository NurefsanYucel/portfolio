import { useEffect, useState } from "react";
import "./App.css";

import mythodexImg from "./assets/mythodex.png";
import myLublinBlogImg from "./assets/myLublinBlog.png";
import trafficImg from "./assets/traffic.png";
import skillforgeImg from "./assets/skillforge.png";
import cryptoImg from "./assets/crypto.png";
import meImg from "./assets/me.jpeg";

// GitHub username used to fetch repositories from GitHub API
const GITHUB_USERNAME = "NurefsanYucel";

// Local project images matched by repository name
const PROJECT_IMAGES = {
  mythodex: mythodexImg,
  secure_prog_project: mythodexImg,
  "my-lublin-blog": myLublinBlogImg,
  "traffic-light-system": trafficImg,
  skillforge: skillforgeImg,
  "crypto-tracker": cryptoImg,
};

// Live demo links for deployed projects
const LIVE_LINKS = {
  "my-lublin-blog": "https://my-lublin-blog.vercel.app/",
  skillforge: "https://skillforge-red-eight.vercel.app/",
  "secure_prog_project": "https://secure-prog-project.vercel.app/"
};

// Repositories hidden from the portfolio project list
const HIDDEN_PROJECTS = [
  "curriculum",
  "rock-paper-scissors",
  "javascript-exercises",
  "landing_page",
  "css-exercises",
  "odin-recipes",
  "basicWebPage",
  "portfolio"
];

function App() {
  // Stores repositories fetched from GitHub
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub and keep only valid array responses
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, []);

  // Remove repositories that should not appear in the portfolio
  const filteredRepos = repos.filter(
    (repo) =>
      !HIDDEN_PROJECTS.some(
        (name) => name.toLowerCase() === repo.name.toLowerCase()
      )
  );

  // Select MythoDex as the featured project
  const featuredProject = filteredRepos.find(
    (repo) => repo.name.toLowerCase() === "mythodex"
  );

  // All other repositories are displayed in the project grid
  const otherProjects = filteredRepos.filter(
    (repo) => repo.name.toLowerCase() !== "mythodex"
  );

  return (
    <main>
      {/* Hero section */}
      <section className="hero">
        <p className="subtitle">MSc Cyber Security Student • Computer Engineer</p>

        <h1>
          Hello!
          <br />
          I’m Efsan
        </h1>

        <p className="description">
          I build secure, scalable web applications with a focus on clean design,
          performance, and practical security.
        </p>

        <div className="hero-buttons">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>

          <a href="#projects" className="secondary">
            View Projects
          </a>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={meImg} alt="Efsan" />
          </div>

          <div className="about-content">
            <p className="section-label">About Me</p>
            <h2>Currently a Cyber Security student</h2>

            <p>
              I’m Efsan, a second-year MSc Cyber Security student at Maria Curie-Skłodowska University
              and a Computer Engineering graduate from Marmara University in Istanbul.
              I’m interested in secure web development, full-stack applications, and practical security-focused projects.
            </p>

            <p>
              My focus is building real-world applications with authentication, databases,
              and security considerations while improving my knowledge in Linux,
              networking, and system security. I’m also exploring low-code approaches and
              continuously learning new technologies to expand my skill set.
            </p>

            {/* Skill tags */}
            <div className="about-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Cyber Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured project section */}
      {featuredProject && (
        <section className="featured">
          {PROJECT_IMAGES[featuredProject.name.toLowerCase()] && (
            <img
              src={PROJECT_IMAGES[featuredProject.name.toLowerCase()]}
              alt={featuredProject.name}
              className="featured-image"
            />
          )}

          <p className="section-label">Featured Project</p>
          <h2>{featuredProject.name}</h2>

          <p>
            {featuredProject.description ||
              "A mythology-themed web application where users can explore and manage mythical creatures."}
          </p>

          {/* Repository metadata */}
          <div className="meta">
            {featuredProject.language && <span>{featuredProject.language}</span>}
            <span>⭐ {featuredProject.stargazers_count}</span>
          </div>

          <div className="card-links">
            <a href={featuredProject.html_url} target="_blank" rel="noreferrer">
              View MythoDex →
            </a>

            {LIVE_LINKS[featuredProject.name.toLowerCase()] && (
              <a
                href={LIVE_LINKS[featuredProject.name.toLowerCase()]}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            )}
          </div>
        </section>
      )}

      {/* Project grid section */}
      <section id="projects" className="projects">
        <p className="section-label">Portfolio</p>
        <h2>My Projects</h2>

        {otherProjects.length === 0 ? (
          <p>No projects to show yet.</p>
        ) : (
          <div className="grid">
            {otherProjects.map((repo) => (
              <div className="card" key={repo.id}>
                {PROJECT_IMAGES[repo.name.toLowerCase()] && (
                  <img
                    src={PROJECT_IMAGES[repo.name.toLowerCase()]}
                    alt={repo.name}
                    className="project-image"
                  />
                )}

                <h3>{repo.name}</h3>
                <p>{repo.description || "No description added yet."}</p>

                {/* Repository language and stars */}
                <div className="meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>⭐ {repo.stargazers_count}</span>
                </div>

                <div className="card-links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </a>

                  {LIVE_LINKS[repo.name.toLowerCase()] && (
                    <a
                      href={LIVE_LINKS[repo.name.toLowerCase()]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;