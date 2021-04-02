import Image from 'next/image';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const listVariant = {
  initial: {
    width: 0,
  },
  animate: {
    width: '40%',
    transition: {
      duration: 1,
    },
  },
  exit: {
    width: 0,
  },
};

const logoVariant = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 1 } },
};

const LeftPannel = ({ screen, setScreen }) => {
  const [type, setType] = useState('home');
  return (
    <div className="grid grid-rows-4 h-screen">
      <motion.div variants={logoVariant} initial="initial" animate="animate" className="row-span-1 flex justify-center items-center">
        <Image alt="logo" src="/logo.svg" width={100} height={100} />
      </motion.div>
      <div className="row-span-1 flex flex-col justify-center items-center">
        <div className="my-6">
          <h1 className="text-secondary text-2xl text-center">Shivansh Singh | Developer</h1>
        </div>
        <div>
          <p className="text-secondary">Keep it simple.</p>
        </div>
        <div className="flex my-6">
          <a href="#">
            <motion.div whileHover={{ scale: 1.5 }} className="mx-4">
              <AiOutlineLinkedin size={25} className="text-secondary hover:text-primary" />
            </motion.div>
          </a>
          <a href="#">
            <motion.div className="mx-4" whileHover={{ scale: 1.5 }}>
              <AiOutlineGithub size={25} className="text-secondary hover:text-primary" />
            </motion.div>
          </a>
          <a href="#">
            <motion.div className="mx-4" whileHover={{ scale: 1.5 }}>
              <AiOutlineInstagram size={25} className="text-secondary hover:text-primary" />
            </motion.div>
          </a>
        </div>
      </div>
      <div className="row-span-2 flex flex-col justify-center items-end">
        <motion.div className="py-6 cursor-pointer flex justify-end text-secondary w-full text-right hover:underline" onMouseEnter={() => setType('home')} onMouseLeave={() => setType('none')} onClick={() => setScreen('home')}>
          <h1 className={`px-4 hover:opacity-50 ${screen === 'home' && 'text-5xl morph'} transition-all`}>Home</h1>
          <AnimatePresence exitBeforeEnter>{(type === 'home' || screen === 'home') && <motion.span variants={listVariant} initial="initial" animate="animate" exit="exit" className="flex w-full h-full bg-primary rounded-tl-full rounded-bl-full" />}</AnimatePresence>
        </motion.div>
        <motion.div className="py-6 cursor-pointer flex justify-end text-secondary w-full text-right hover:underline" onMouseEnter={() => setType('work')} onMouseLeave={() => setType('none')} onClick={() => setScreen('one')}>
          <h1 className={`px-4 hover:opacity-50 ${screen === 'one' && 'text-5xl morph'} transition-all`}>Work</h1>
          <AnimatePresence exitBeforeEnter>{(type === 'work' || screen === 'one') && <motion.span variants={listVariant} initial="initial" animate="animate" exit="exit" className="flex w-full h-full bg-primary rounded-tl-full rounded-bl-full" />}</AnimatePresence>
        </motion.div>
        <motion.div className="py-6 cursor-pointer flex justify-end text-secondary w-full text-right hover:underline" onMouseEnter={() => setType('watch')} onMouseLeave={() => setType('none')} onClick={() => setScreen('two')}>
          <h1 className={`px-4 hover:opacity-50 ${screen === 'two' && 'text-5xl morph'} transition-all`}>Watch</h1>
          <AnimatePresence exitBeforeEnter>{(type === 'watch' || screen === 'two') && <motion.span variants={listVariant} initial="initial" animate="animate" exit="exit" className="inline-block w-full h-full bg-primary rounded-tl-full rounded-bl-full" />}</AnimatePresence>
        </motion.div>
        <motion.div className="py-6 cursor-pointer flex justify-end text-secondary w-full text-right hover:underline" onMouseEnter={() => setType('me')} onMouseLeave={() => setType('none')} onClick={() => setScreen('three')}>
          <h1 className={`px-4 hover:opacity-50 ${screen === 'three' && 'text-5xl morph'} transition-all`}>Me</h1>
          <AnimatePresence exitBeforeEnter>{(type === 'me' || screen === 'three') && <motion.span variants={listVariant} initial="initial" animate="animate" exit="exit" className="inline-block w-full h-full bg-primary rounded-tl-full rounded-bl-full" />}</AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftPannel;
