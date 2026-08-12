import { useEffect, useState } from "react";
import "./App.css";

import mythodexImg from "./assets/mythodex.png";
import myLublinBlogImg from "./assets/myLublinBlog.png";
import trafficImg from "./assets/traffic.png";
import skillforgeImg from "./assets/skillforge.png";
import cryptoImg from "./assets/crypto.png";
import meImg from "./assets/me.jpeg";
import dataIntegrityAnalyzerImg from "./assets/dataIntegrityAnalyzer.png";

// GitHub username
const GITHUB_USERNAME = "NurefsanYucel";

// Local project images matched by repository name
const PROJECT_IMAGES = {
  mythodex: mythodexImg,
  secure_prog_project: mythodexImg,
  "my-lublin-blog": myLublinBlogImg,
  "traffic-light-system": trafficImg,
  skillforge: skillforgeImg,
  "crypto-tracker": cryptoImg,
  "data-integrity-analyzer": dataIntegrityAnalyzerImg,
};

// Live demo links
const LIVE_LINKS = {
  "my-lublin-blog": "https://my-lublin-blog.vercel.app/",
  skillforge: "https://skillforge-red-eight.vercel.app/",
  secure_prog_project: "https://secure-prog-project.vercel.app/",
  "data-integrity-analyzer": "https://data-integrity-analyzer.vercel.app/",
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
  "portfolio",
];

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, []);

  const filteredRepos = repos.filter(
    (repo) =>
      !HIDDEN_PROJECTS.some(
        (name) => name.toLowerCase() === repo.name.toLowerCase()
      )
  );

  const featuredProject = filteredRepos.find(
    (repo) => repo.name.toLowerCase() === "mythodex"
  );

  const otherProjects = filteredRepos.filter(
    (repo) => repo.name.toLowerCase() !== "mythodex"
  );

  return (
    <main>
      {/* =========================
          HERO
      ========================= */}
      <section className="hero">
        <p className="subtitle">
          MSc Cyber Security Student • Computer Engineer
        </p>

        <h1>
          Hello!
          <br />
          I’m Efsan
        </h1>

        <p className="description">
          I build secure, scalable web applications with a focus on clean
          design, performance, and practical security.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a href="#tools" className="secondary">
            Tools & Technologies
          </a>

          <a href="#certifications" className="secondary">
            Certifications
          </a>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="secondary github-button"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={meImg} alt="Efsan" />
          </div>

          <div className="about-content">
            <p className="section-label">About Me</p>

            <h2>Curious, adaptable, and always learning</h2>

            <p>
              I’m Efsan, an MSc Cyber Security student at Maria
              Curie-Skłodowska University, with a Computer Engineering
              background from Marmara University. I’m on track to graduate in
              <strong> September 2026</strong>, when I’ll also defend my
              master’s thesis.
            </p>

            <p>
              I’ve had the chance to work in different roles, from{" "}
              <strong>Technical Analyst</strong> and{" "}
              <strong>Frontend Developer</strong> to my current part-time role
              as a <strong>Web Designer</strong>. I enjoy switching between
              different challenges, learning how things work, and finding
              practical ways to make them better.
            </p>

            <p>
              I’m a quick learner and genuinely enjoy trying out new
              technologies. I’m also used to working with{" "}
              <strong>AI-powered tools</strong> as part of my everyday
              workflow, whether it’s for development, research, brainstorming,
              or getting things done more efficiently.
            </p>

            <p>
              I’m easy to communicate with, enjoy working with different
              people, and adapt quickly when things change. For me, there’s
              always something new to learn and that’s probably my favorite
              part of working in tech.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          TOOLS & TECHNOLOGIES
      ========================= */}
      <section id="tools" className="tools-section">
        <div className="compact-section-heading">
          <p className="section-label">What I Work With</p>
          <h2>Tools & Technologies</h2>
        </div>

        <div className="tools-list">
          <div className="tools-row">
            <div className="tools-category">
              <span className="category-dot purple"></span>
              Development
            </div>

            <div className="tools-items">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
            </div>
          </div>

          <div className="tools-row">
            <div className="tools-category">
              <span className="category-dot cyan"></span>
              Cybersecurity & Data
            </div>

            <div className="tools-items">
              <span>Microsoft Sentinel</span>
              <span>KQL</span>
              <span>Python</span>
              <span>SQL</span>
              <span>Power BI</span>
              <span>Linux</span>
            </div>
          </div>

          <div className="tools-row">
            <div className="tools-category">
              <span className="category-dot pink"></span>
              Platforms & Tools
            </div>

            <div className="tools-items">
              <span>Git</span>
              <span>GitHub</span>
              <span>Jira</span>
              <span>Supabase</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>
          </div>

          <div className="tools-row">
            <div className="tools-category">
              <span className="category-dot purple"></span>
              AI & Productivity
            </div>

            <div className="tools-items">
              <span>AI-assisted Development</span>
              <span>Prompting</span>
              <span>AI Productivity Tools</span>
              <span>Low-code Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LANGUAGES
      ========================= */}
      <section id="languages" className="languages-section">
        <div className="compact-section-heading">
          <p className="section-label">Communication</p>
          <h2>Languages</h2>
        </div>

        <div className="languages-list">
          <div className="language-row">
            <div className="language-name">
              <span className="language-dot purple"></span>
              English
            </div>

            <div className="language-info">
              <span className="language-level">C1</span>
              <span className="language-note">
                Professional working proficiency · Bachelor’s & Master’s completed in English
              </span>
            </div>
          </div>

          <div className="language-row">
            <div className="language-name">
              <span className="language-dot pink"></span>
              Turkish
            </div>

            <div className="language-info">
              <span className="language-level">Native</span>
            </div>
          </div>

          <div className="language-row">
            <div className="language-name">
              <span className="language-dot cyan"></span>
              Polish
            </div>

            <div className="language-info">
              <span className="language-level">A1</span>
              <span className="language-note">
                Currently learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CERTIFICATIONS
      ========================= */}
      <section id="certifications" className="certifications-section">
        <div className="compact-section-heading">
          <p className="section-label">Learning & Development</p>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">
          <div className="certification">
            <div>
              <span className="cert-type">CYBERSECURITY</span>
              <h3>Cisco Networking Academy — Ethical Hacker</h3>
            </div>

            <span className="cert-arrow">↗</span>
          </div>

          <div className="certification">
            <div>
              <span className="cert-type">MICROSOFT SECURITY</span>
              <h3>Microsoft Security — SC-200 Learning Path</h3>
            </div>

            <span className="cert-arrow">↗</span>
          </div>

          <div className="certification">
            <div>
              <span className="cert-type">AI & PRODUCTIVITY</span>
              <h3>Google — Prompting Essentials</h3>
            </div>

            <span className="cert-arrow">↗</span>
          </div>

          <div className="certification">
            <div>
              <span className="cert-type">ENGLISH</span>
              <h3>IELTS — Overall Band Score 7.5</h3>
            </div>

            <span className="cert-arrow">↗</span>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECT
      ========================= */}
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

          <div className="meta">
            {featuredProject.language && (
              <span>{featuredProject.language}</span>
            )}

            <span>⭐ {featuredProject.stargazers_count}</span>
          </div>

          <div className="card-links">
            <a
              href={featuredProject.html_url}
              target="_blank"
              rel="noreferrer"
            >
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

      {/* =========================
          PROJECTS
      ========================= */}
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

                <div className="meta">
                  {repo.language && <span>{repo.language}</span>}

                  <span>⭐ {repo.stargazers_count}</span>
                </div>

                <div className="card-links">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
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