import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Gaming Streamer",
    content: "The anime-style logo perfectly captured my channel's essence. Absolutely love it!",
    image: "/placeholder.svg",
  },
  {
    name: "Mike R.",
    role: "Cafe Owner",
    content: "Our kawaii cafe logo attracts so many customers. Best investment for our brand!",
    image: "/placeholder.svg",
  },
  {
    name: "Alex T.",
    role: "eSports Team Manager",
    content: "Professional service and amazing results. Our team logo stands out in tournaments.",
    image: "/placeholder.svg",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pastel-purple/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};