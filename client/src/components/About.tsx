import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users, Shield, Wrench } from "lucide-react";

export function About() {
  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Custom Development",
      description: "Tailored web applications built with cutting-edge technologies to meet your specific business needs.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance",
      description: "Lightning-fast applications optimized for speed, scalability, and reliability.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consultation",
      description: "Expert guidance on technology choices and digital transformation strategies.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      description: "Robust security measures to protect your applications and user data.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Maintenance",
      description: "Ongoing support and updates to keep your applications running smoothly.",
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
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            At Haske Solutions, we combine technical expertise with creative innovation to deliver web solutions that empower businesses to thrive in the digital age.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}