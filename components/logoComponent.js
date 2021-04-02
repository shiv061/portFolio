import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const variant = {
  initial: {
    x: '-100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const LogoComponent = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      setPage((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div className="grid grid-cols-3 mx-6 md:mx-0 md:flex md:justify-center md:items-center md:w-full md:h-full">
      <AnimatePresence exitBeforeEnter>
        {page === 1 && (
          <motion.div key="one" variants={variant} initial="initial" animate="animate" exit="exit" className="flex">
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/css-5.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/git-icon.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/html5.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/logo-javascript.svg" width={120} height={120} />
            </div>
          </motion.div>
        )}
        {page === 2 && (
          <motion.div key="two" variants={variant} initial="initial" animate="animate" exit="exit" className="flex">
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/next-js.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/react-2.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/react-native-firebase-1.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/redux.svg" width={120} height={120} />
            </div>
          </motion.div>
        )}

        {page === 3 && (
          <motion.div key="three" variants={variant} initial="initial" animate="animate" exit="exit" className="flex">
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/typescript.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/vercel.svg" width={120} height={120} />
            </div>
            <div className="m-5 mx-10 cursor-pointer">
              <Image src="/webpack-icon.svg" width={120} height={120} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LogoComponent;
