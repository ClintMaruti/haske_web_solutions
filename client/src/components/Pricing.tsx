import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "29,999",
      description: "Perfect for small businesses",
      features: [
        "Responsive Website Design",
        "5 Pages",
        "Contact Form",
        "Basic SEO",
        "3 Rounds of Revisions",
      ],
    },
    {
      name: "Professional",
      price: "59,999",
      description: "Great for growing businesses",
      features: [
        "Everything in Basic",
        "10 Pages",
        "Custom Animations",
        "Advanced SEO",
        "Content Management System",
        "Social Media Integration",
        "5 Rounds of Revisions",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "119,999",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "E-commerce Integration",
        "Custom Features",
        "Performance Optimization",
        "Priority Support",
        "Unlimited Revisions",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Pricing Plans</h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All prices are in KES and include ongoing support.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${tier.highlighted ? "border-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">KES {tier.price}</span>
                  </div>
                  <p className="text-foreground/60">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
