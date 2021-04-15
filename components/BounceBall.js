import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BounceBall = () => {
  return (
    <motion.div
      className="shadow-2xl bg-primary py-2 px-4 rounded-full cursor-pointer"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 30,
        right: 40,
      }}
      animate={{
        scale: [1, 1.1],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
    >
      <h1 className="text-extra-100">Back To Top</h1>
    </motion.div>
  );
};

export default BounceBall;
