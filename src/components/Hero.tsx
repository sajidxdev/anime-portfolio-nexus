import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-pastel-purple to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-pastel-pink">
          Anime-Style Logo Design
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Bringing your brand to life with unique anime-inspired logos that capture
          the essence of Japanese artistry
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="bg-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          View My Work
        </button>
      </motion.div>
    </section>
  );
};