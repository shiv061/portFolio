import { motion } from 'framer-motion';
import { useState } from 'react';
import workData from '../data.json';

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const ScreenTwo = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  return (
    <motion.div variants={variant} initial="initial" animate="animate" className="max-h-screen overflow-scroll" onScroll={(e) => setScrollHeight(e.target.scrollTop)}>
      <motion.div initial="initial" animate="animate" className={`mx-10 py-5 sticky top-0 z-10 ${scrollHeight > 200 && 'bg-offWhite mx-0 transition-all'}`}>
        <h1 className={`text-offWhite text-6xl tracking-wide ${scrollHeight > 200 && 'mx-5 text-offBlack'}`}>Work</h1>
      </motion.div>
      <div className="my-30 md:grid md:grid-cols-2 place-items-center">
        {workData.map((work) => {
          return <Card key={work.title} uri={work.uri} title={work.title} tech={work.tech} />;
        })}
      </div>
    </motion.div>
  );
};

const Card = ({ uri, title, tech = [] }) => {
  return (
    <motion.div variants={variant} initial="initial" animate="animate" whileHover={{ scale: 1.05, x: 20 }} className="h-64 w-[90%] glass my-10 mx-5 rounded-lg shadow-2xl overflow-hidden cursor-pointer">
      <a className="grid grid-rows-3" href={uri} target="_blank">
        <div className="row-span-2">
          <iframe className="w-full" src={uri} title={title} sandbox />
        </div>
        <div className="row-span-1 flex flex-col items-center h-full justify-center">
          <div className="text-offWhite text-2xl hover:underline">{title}</div>
          <div className="text-offWhite">
            {tech.map((t) => (
              <span className="p-1 mx-1 bg-secondary rounded-full text-xs">{t}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ScreenTwo;
