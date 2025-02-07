import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Modern Design",
      description: "Creating beautiful, responsive interfaces that provide excellent user experience.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing websites for speed and performance across all devices.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            I'm a passionate web developer with years of experience in building robust websites and web applications. 
            I specialize in creating solutions that help businesses succeed in the digital space.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="text-primary mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-foreground/60">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
