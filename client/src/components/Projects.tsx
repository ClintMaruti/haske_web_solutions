import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with seamless payment integration and inventory management system.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with stunning animations and responsive design.",
      image: "https://images.unsplash.com/photo-1710855492709-aa06902e181c",
    },
    {
      title: "Business Dashboard",
      description: "Comprehensive analytics dashboard for tracking and visualizing business metrics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      title: "Real Estate Platform",
      description: "Advanced property listing and management system with virtual tour capabilities.",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    },
    {
      title: "Social Media App",
      description: "Feature-rich social networking platform with real-time updates and interactive features.",
      image: "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0",
    },
    {
      title: "Educational Platform",
      description: "Comprehensive learning management system with interactive course content and progress tracking.",
      image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
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
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Here's a showcase of our successful projects. Each project represents our commitment to excellence and innovation.
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
                  <p className="text-foreground/60">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}