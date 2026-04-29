import { useEffect, useState } from "react";
import "./App.css";

const GITHUB_USERNAME = "NurefsanYucel";

const PROJECT_IMAGES = {
  mythodex: "/src/assets/mythodex.png",
  secure_prog_project: "/src/assets/mythodex.jpg",
  "my-lublin-blog": "/src/assets/myLublinBlog.png"
};

const LIVE_LINKS = {
  "my-lublin-blog": "https://my-lublin-blog.vercel.app/"
};

const HIDDEN_PROJECTS = [
  "kodluyoruz-frontend-101-egitimi",
  "Patika.DevHafta1Projeleri",
  "kodluyoruzilkrepo",
  "curriculum",
  "rock-paper-scissors",
  "javascript-exercises",
  "landing_page",
  "css-exercises",
  "odin-recipes",
  "basicWebPage"
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
      <section className="hero">
        <p className="subtitle">Cyber Security Student • Full Stack Developer</p>
        <h1>Hi, I’m Efsan</h1>
        <p className="description">
          I build web applications and security-focused projects. Here are some
          of my selected GitHub projects.
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