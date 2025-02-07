import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);

      // Send email
      const emailSent = await sendContactEmail(data);
      if (!emailSent) {
        console.error("Failed to send email notification");
      }

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ message: "Invalid request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}