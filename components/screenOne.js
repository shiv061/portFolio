import { motion } from 'framer-motion';
import LogoComponent from './logoComponent';
import Typewriter from './typewriter';

const ScreenOne = () => {
  return (
    <div className="grid grid-rows-3 h-screen">
      <div className="hidden md:grid row-span-1 w-full h-full overflow-scroll mb-2">
        <LogoComponent />
      </div>
      <div className="row-span-1 mx-4 mt-4 mb-12 md:mb-0 md:mt-0">
        <div>
          <h1 className="text-offWhite text-6xl">Hello,</h1>
        </div>
        <div>
          <h1 className="text-offWhite text-4xl leading-[4rem]">I am Shivansh</h1>
        </div>
        <motion.div animate={{ rotate: -6 }} whileHover={{ rotate: 0 }} className="border-primary bg-primary py-2 px-2 my-10 mx-32 rounded cursor-pointer">
          <h1 className="text-center text-offWhite text-2xl">Frontend and React Native Developer</h1>
        </motion.div>
      </div>
      <div className="row-span-2 mt-10 md:mt-0 md:mx-10 overflow-scroll mb-10">
        <div className="md:py-8 flex flex-col items-center md:grid md:grid-cols-2">
          <Typewriter tech="React" rate="7/10" />
          <Typewriter tech="React Native" rate="7/10" />
          <Typewriter tech="Redux,Thunk,Router" rate="7/10" />
          <Typewriter tech="Javascript" rate="7/10" />
          <Typewriter tech="Typescript" rate="4/10" />
          <Typewriter tech="HTML,CSS,SASS" rate="7/10" />
          <Typewriter tech="Next JS" rate="5/10" />
          <Typewriter tech="Git,Github,Bitbucket" rate="6/10" />
          <Typewriter tech="Testing(Jest,Cypress)" rate="2/10" />
          <Typewriter tech="CI/CD,Webpack" rate="5/10" />
          <Typewriter tech="NodeJs,Express" rate="5/10" />
          <Typewriter tech="SQL,MongoDB" rate="5/10" />
          <Typewriter tech="Firebase" rate="5/10" />
          <Typewriter tech="Postman" rate="5/10" />
        </div>
      </div>
    </div>
  );
};

export default ScreenOne;
