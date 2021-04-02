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
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div className="grid grid-cols-3 mx-6 md:mx-0 md:flex md:justify-center md:items-center md:w-full md:h-full">
      <AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {page === 1 && (
            <>
              <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
                <Image src="/css-5.svg" width={50} height={50} />
              </motion.div>
              <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
                <Image src="/git-icon.svg" width={50} height={50} />
              </motion.div>
              <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
                <Image src="/html5.svg" width={50} height={50} />
              </motion.div>
              <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
                <Image src="/logo-javascript.svg" width={50} height={50} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {page === 2 && (
          <>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/next-js.svg" width={50} height={50} />
            </motion.div>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/react-2.svg" width={50} height={50} />
            </motion.div>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/react-native-firebase-1.svg" width={50} height={50} />
            </motion.div>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/redux.svg" width={50} height={50} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {page === 3 && (
          <>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/typescript.svg" width={50} height={50} />
            </motion.div>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/vercel.svg" width={50} height={50} />
            </motion.div>
            <motion.div variants={variant} initial="initial" animate="animate" exit="exit" whileHover={{ scale: 1.5 }} className="m-5 cursor-pointer">
              <Image src="/webpack-icon.svg" width={50} height={50} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LogoComponent;
