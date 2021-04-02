import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Typewriter = ({ tech, rate }) => {
  const [pause, setPause] = useState(false);

  const variant = {
    hover: {
      x: 20,
      scale: 1.1,
    },
  };

  if (pause) {
    return (
      <motion.div variants={variant} whileHover="hover" className="bg-secondary w-[80%] h-[80%] my-2 px-2 rounded-md cursor-pointer" onMouseLeave={() => setPause(false)}>
        <h1 className="text-3xl text-white">{`${tech} - ${rate}`}</h1>
      </motion.div>
    );
  }
  return (
    <motion.div variants={variant} whileHover="hover" className="bg-secondary w-[80%] h-[80%] my-2 px-2 rounded-md cursor-pointer" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
      <ReactTypingEffect
        text={[tech, rate]}
        cursorRenderer={(cursor) => <h1 className="text-offWhite text-3xl">{cursor}</h1>}
        displayTextRenderer={(text) => {
          return <h1 className="text-offWhite text-3xl">{text}</h1>;
        }}
        eraseSpeed={100}
        speed={100}
        eraseDelay={800}
        typingDelay={800}
      />
    </motion.div>
  );
};

export default Typewriter;
