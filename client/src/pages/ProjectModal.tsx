import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    longDescription?: string;
    features?: string[];
    testimonial?: {
      text: string;
      author: string;
      role: string;
    };
    link?: string;
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="mt-6 space-y-4">
          <DialogDescription className="text-base leading-relaxed">
            {project.longDescription || project.description}
          </DialogDescription>

          {project.features && (
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="italic text-foreground/80">"{project.testimonial.text}"</p>
              <div className="mt-2 text-sm text-foreground/60">
                <span className="font-semibold">{project.testimonial.author}</span> •{" "}
                {project.testimonial.role}
              </div>
            </div>
          )}

          {project.link && (
            <div className="flex justify-end">
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
