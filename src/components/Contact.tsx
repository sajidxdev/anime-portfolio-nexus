import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-4 bg-pastel-blue/20" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Let's Create Something Amazing Together</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                placeholder="Project Type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Tell me about your project..."
                className="min-h-[150px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full bg-primary text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};