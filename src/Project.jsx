import sonlabImage from "./assets/sonlab1.jpg";
import sobatilmuImage from "./assets/sobatilmu.png";
import gorentImage from "./assets/gorent.png";
import planningImage from "./assets/Planning.png";
import primaryImage from "./assets/Primary (1).png";
const projects = [
  {
    title: "Son Lab",
    description:
      "A responsive company profile website for a laboratory equipment business, featuring product showcases, product details, and a simple shopping cart experience. The project focuses on presenting laboratory products through a clean, intuitive, and responsive user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: sonlabImage,
    link: "https://sonlabglassware.netlify.app/",
  },
  {
    title: "Sobat Ilmu",
    description: 
        "SobatIlmu is an AI-powered web application that functions as a learning assistant. The application helps users find information, analyze images, summarize text, and assist with coding needs through AI technology.",
    technologies: ["Java", "HTML", "CSS", "Spring Boot", "Maven", "OpenAI API"],
    image: sobatilmuImage,
    link: "https://github.com/Wilsn12/Sobat-Ilmu"
  },
  {
    title: "Go Rent",
    description: 
        "Go Rent is an web-based Vehicle Rental System designed to manage vehicle rentals digitally. The system provides user and staff authentication, vehicle management for cars, motorcycles, and buses, rental booking, automatic rental cost calculation, and vehicle availability management. Developed using Java, Spring Boot, JPA, and a Controller-Service-Repository architecture, while applying Object-Based Programming concepts such as inheritance, polymorphism, abstraction, and interfaces.",
    technologies: ["Java", "HTML", "CSS", "Spring Boot", "JavaScript", "Bootstrap"],
    image: gorentImage,
    link: "https://github.com/Wilsn12/Vehicle-Rental-App"
  },
    {
    title: "Planning",
    description: 
        "Planning is a web-based personal productivity management application developed using the Laravel framework. The application helps users manage daily activities through features such as To-Do Lists, Habit Tracking, Expense Tracking, Notes, and Calendar Management. It also provides user authentication, role-based access, and Google Calendar API integration. This project was developed as part of a Software Development course using PHP, Laravel, HTML, CSS, JavaScript, MySQL, and Google Calendar API to implement web application development and software engineering concepts.",
    technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL", "JavaScript"],
    image: planningImage,
    link: "https://github.com/Wilsn12/Planning-App"
  },
    {
    title: "Primary Squad Scholarship",
    description: 
        "Primary Squad Scholarship is a web-based scholarship recommendation system that uses the Profile Matching method to determine student tuition fee discounts. The system processes student academic scores, calculates profile matching results, and generates scholarship recommendations and rankings. Developed using Laravel, PHP, HTML, CSS, JavaScript, and MySQL.",
    technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL", "JavaScript"],
    image: primaryImage,
    link: "https://github.com/Wilsn12/Program-Pengambilan-Keputusan-Beasiswa"
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <p>MY PROJECTS</p>
        <h2>Things I've Built</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;