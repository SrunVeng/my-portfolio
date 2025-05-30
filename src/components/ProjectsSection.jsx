import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Backend Projects on GitHub",
    description:
        "I'm a backend developer focused on building scalable APIs, working with databases, and system integrations. Check out my GitHub to explore real projects.",
    image: "https://www.shutterstock.com/image-vector/backend-icon-thin-linear-outline-600nw-2139453627.jpg",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
    demoUrl: "https://github.com/SrunVeng",
    githubUrl: "https://github.com/SrunVeng",
  },
];

export const ProjectsSection = () => {
  return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            As a backend developer, I work behind the scenes building robust systems. Here's a sample card, but for real projects, feel free to explore my GitHub.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                          <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/SrunVeng"
            >
              Check My GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
  );
};
