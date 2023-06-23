"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type PhotoCard = {
  imageUrl: string;
  title: string;
  text: string;
};

const PhotoCard: React.FC<PhotoCard> = ({ imageUrl, title, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </motion.div>
  );
};

const PhotoCardSection: React.FC = () => {
  const photoCards: PhotoCard[] = [
    {
      imageUrl: '/office_workers.png',
      title: 'Card 1',
      text:"This is a test1"
    },
    {
      imageUrl: '/office_workers.png',
      title: 'Card 2',
      text:"This is a test2",
    },
    {
      imageUrl: '/office_workers.png',
      title: 'Card 3',
      text:"This is a test3",
    },
    {
      imageUrl: '/office_workers.png',
      title: 'Card 4',
      text:"This is a test4",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mx-8">
      {photoCards.map((card, index) => (
        <div key={index} className="mb-4 md:w-1/2 lg:w-1/4">
          <PhotoCard imageUrl={card.imageUrl} title={card.title} text={card.text} />
        </div>
      ))}
    </div>
  );
};

export default PhotoCardSection;