import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const packages = [
  {
    name: "Basic Package",
    price: "$99",
    features: [
      "Text-based anime logo",
      "2 revision rounds",
      "Source files included",
      "Delivery in 3-5 days",
    ],
  },
  {
    name: "Premium Package",
    price: "$249",
    features: [
      "Custom character design",
      "Unlimited revisions",
      "Source files included",
      "Social media kit",
      "Priority delivery in 2-3 days",
    ],
  },
  {
    name: "Custom Project",
    price: "Custom",
    features: [
      "Tailored to your needs",
      "Complex illustrations",
      "Brand guidelines",
      "Extended license",
      "24/7 support",
    ],
  },
];

export const Pricing = () => {
  const { toast } = useToast();

  const handleGetStarted = (packageName: string) => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: `${packageName} Selected!`,
      description: "Please fill out the contact form below to get started.",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    onClick={() => handleGetStarted(pkg.name)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};