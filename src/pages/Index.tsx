import { useEffect } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TrustedCompaniesSection from "@/components/sections/TrustedCompaniesSection";
import FAQSection from "@/components/sections/FAQSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  // Set up smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <TrustedCompaniesSection />
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
