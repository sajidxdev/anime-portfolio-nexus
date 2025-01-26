import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Palette, Text, Sparkles } from "lucide-react";

const services = [
  {
    title: "Custom Anime Logos",
    description: "Unique logos that blend your brand with anime aesthetics",
    icon: PenTool,
  },
  {
    title: "Logo Templates",
    description: "Pre-designed templates with an anime twist",
    icon: Palette,
  },
  {
    title: "Text Design",
    description: "Stylized text with anime-inspired elements",
    icon: Text,
  },
  {
    title: "Custom Artwork",
    description: "Bespoke anime-style illustrations for your brand",
    icon: Sparkles,
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-pastel-purple/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};