import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/placeholder.svg"
              alt="Designer"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hi! I'm a passionate logo designer specializing in anime-style
              artwork. With over 5 years of experience in digital art and branding,
              I help businesses stand out with unique Japanese-inspired designs.
            </p>
            <p className="text-gray-600 mb-6">
              My journey began with a love for anime and manga, which I've
              transformed into a distinctive style that bridges Eastern and Western
              design aesthetics.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};