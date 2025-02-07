import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations",
      image: "https://images.unsplash.com/photo-1710855492709-aa06902e181c",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Business Dashboard",
      description: "Analytics dashboard for business metrics",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      tags: ["Vue.js", "D3.js", "Express"],
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
      tags: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "Social Media App",
      description: "Social networking platform with real-time features",
      image: "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0",
      tags: ["React Native", "Firebase", "WebSocket"],
    },
    {
      title: "Educational Platform",
      description: "Online learning management system",
      image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
      tags: ["Angular", "Node.js", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
