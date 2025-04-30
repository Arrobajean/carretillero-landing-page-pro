
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import CourseCarousel from '@/components/CourseCarousel';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import LegalNoticeSection from '@/components/LegalNoticeSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set up smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <CourseCarousel />
        <WhyChooseUsSection />
        <LegalNoticeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
