"use client"
import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  imageSrc: string;
  upperText: string;
  lowerText: string;
};

const SectionWithOverlay: React.FC<SectionProps> = ({ imageSrc, upperText, lowerText }) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > sectionTop - windowHeight && scrollY < sectionBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={sectionRef} className="relative">
      <img src={imageSrc} alt="Section Image" className="w-full" />
      <motion.div
        className="absolute top-0 left-0 p-4 text-white bg-gray-400 lg:top-20 lg:left-20 bg-opacity-50"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={textVariant}
      >
        <h2 className="lg:text-3xl font-semibold text-sm">{upperText}</h2>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 p-4 text-white bg-gray-400 lg:bottom-20 lg:right-20 bg-opacity-50"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={textVariant}
      >
        <h2 className="lg:text-3xl font-semibold text-sm">{lowerText}</h2>
      </motion.div>
    </section>
  );
};

export default SectionWithOverlay;