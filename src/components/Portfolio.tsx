import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Gaming Logo",
    description: "Custom esports team logo with anime character",
    image: "/placeholder.svg",
    category: "Custom",
  },
  {
    title: "Cafe Brand",
    description: "Kawaii-style logo for a Japanese cafe",
    image: "/placeholder.svg",
    category: "Business",
  },
  {
    title: "Stream Package",
    description: "Anime-themed streaming assets",
    image: "/placeholder.svg",
    category: "Template",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="inline-block bg-pastel-purple px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-primary text-white">Request Custom Work</Button>
        </div>
      </div>
    </section>
  );
};