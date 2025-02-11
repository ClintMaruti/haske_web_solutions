import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import ecom1 from "@/assets/ecommerce/ecomerce.jpg";

import hr1 from "@/assets/hr/hr.jpg";

import dash1 from "@/assets/dashboard/dash1.jpg";

import real1 from "@/assets/realestate/real1.jpg";

import edu1 from "@/assets/education/edu1.jpg";

import asse1 from "@/assets/asset_mgt/asset1.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with seamless payment integration and inventory management system.",
    image: ecom1,
  },
  {
    title: "HR Platform and Payroll",
    description:
      "A robust HR and payroll management system designed to streamline employee records, automate payroll processing, manage benefits, and ensure compliance with labor laws.",
    image: hr1,
  },
  {
    title: "Business Dashboard",
    description:
      "Comprehensive analytics dashboard for tracking and visualizing business metrics.",
    image: dash1,
  },
  {
    title: "Real Estate Platform",
    description:
      "Advanced property listing and management system with virtual tour capabilities.",
    image: real1,
  },
  {
    title: "Educational Platform",
    description:
      "Comprehensive learning management system with interactive course content and progress tracking.",
    image: edu1,
  },
  {
    title: "Asset Management System",
    description:
      "A powerful asset management solution that helps organizations track, maintain, and optimize the lifecycle of physical and digital assets with real-time monitoring and reporting.",
    image: asse1,
  },
];

export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === null ? 0 : (prevIndex + 1) % projects.length
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === null
        ? projects.length - 1
        : (prevIndex - 1 + projects.length) % projects.length
    );
  };

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
            Here's a showcase of our successful projects. Each project
            represents our commitment to excellence and innovation.
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
              <Card
                className="overflow-hidden h-full cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <Dialog open onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-lg w-full mx-auto">
            <DialogHeader>
              <DialogTitle>{projects[selectedIndex].title}</DialogTitle>
              {/* <DialogClose className="absolute top-2 right-2">
                <X className="w-6 h-6" />
              </DialogClose> */}
            </DialogHeader>
            <div className="relative">
              <img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="mt-4 text-center text-foreground/80">
                {projects[selectedIndex].description}
              </p>
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handlePrev}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" onClick={handleNext}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
