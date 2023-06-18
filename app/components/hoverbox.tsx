"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData1 from '../animations/75518-box-aixs.json'
import animationData2 from '../animations/109382-technology-network.json'
import animationData3 from '../animations/146025-ai-icon-animation.json'

type HoverBoxProps = {
  animation: string;
  defaultText: string;
  hoverText: string;
};

const HoverBox: React.FC<HoverBoxProps> = ({ animation, defaultText, hoverText }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getAnimationData = () => {
    if (animation === 'animation1') {
      return animationData1;
    } else if (animation === 'animation2') {
      return animationData2;
    } else if (animation === 'animation3') {
      return animationData3;
    }
    return null;
  };

  const style = {
    height: 300,
  };

  const animationOptions = {
    loop: true,
    autoplay: false,
    animationData: getAnimationData(),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (<>
    
    <motion.div
      className={`w-full h-10rem flex md:justify-center items-end p-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1, transition: { duration: 2 } }}
    > <Lottie animationData={getAnimationData()} style={style}/>
    <motion.span className="sm:text-sm md:text-lg font-bold" transition={{ duration: 2 }}>{hovered ? hoverText : defaultText }</motion.span>
    </motion.div>
    </>
  );
};

const HoverBoxes: React.FC = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row md:flex-col flex-col md:m-10">
      <HoverBox animation="animation1" defaultText="Data Conditioning" hoverText="Techn-AI specializes in data conditioning, providing advanced techniques and solutions to optimize and prepare data for effective analysis and AI applications." />
      <HoverBox animation="animation2" defaultText="AI Intergration" hoverText="Techn-AIA specializes in seamless AI integration, empowering businesses to leverage cutting-edge artificial intelligence technologies to drive innovation, and unlock new opportunities for growth." />
      <HoverBox animation="animation3" defaultText="Model Training" hoverText="At Techn-AIA, we excel in cutting-edge model training, harnessing the power of advanced algorithms and AI techniques to optimize and refine models for superior performance and accuracy." />
    </div>
  );
};

export default HoverBoxes;