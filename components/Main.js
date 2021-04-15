import Projects from './Projects';
import Skills from './Skills';
import data from '../data.json';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className="h-full px-3 lg:px-10 max-h-screen overflow-scroll">
      {/* Main Head */}
      <div className="py-6">
        <h1 className="text-6xl font-semibold text-primary">Shivansh Singh</h1>
        <p className="font-light text-lg text-primary pl-2">Front End Engineer</p>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      {/* Work Exp */}
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg">WORK EXPERIENCE</h1>
        </div>
        <div className="grid grid-cols-4 py-2 px-4">
          <div className="col-span-1">
            <h1 className="font-medium text-lg text-primary text-right">WorkOnGrid</h1>
            <p className="font-light text-primary text-right">2020-Present</p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-0.5 bg-extra-100 h-full" />
          </div>
          <div className="col-span-2">
            <div>
              <h1 className="text-primary font-semibold text-lg">Frontend and Mobile Developer</h1>
            </div>
            <div>
              <ul>
                <li className="text-primary font-extralight hover:line-through cursor-pointer">#Zapier Application Integration</li>
                <li className="text-primary font-extralight hover:line-through cursor-pointer">#Reports Builder</li>
                <li className="text-primary font-extralight hover:line-through cursor-pointer">#Dashboard Setup</li>
                <li className="text-primary font-extralight hover:line-through cursor-pointer">#Mobile - App Implementation from scratch</li>
                <li className="text-primary font-extralight hover:line-through cursor-pointer">#Mobile - Dashboards Implementation </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      {/* Skills */}
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg">SKILLS</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1>PROFESSIONAL</h1>
            <div>
              <Skills skill="ReactJS" percentage="80%" />
              <Skills skill="Redux" percentage="70%" />
              <Skills skill="React Native/Expo" percentage="70%" />
              <Skills skill="Javascript/ES6" percentage="70%" />
              <Skills skill="Typescript" percentage="30%" />
              <Skills skill="NextJS" percentage="50%" />
              <Skills skill="HTML" percentage="70%" />
              <Skills skill="CSS" percentage="70%" />
              <Skills skill="SCSS" percentage="65%" />
              <Skills skill="GIT" percentage="70%" />
              <Skills skill="Testing(Jest, Cypress)" percentage="30%" />
              <Skills skill="NodeJS" percentage="50%" />
              <Skills skill="Express" percentage="50%" />
              <Skills skill="SQL/MongoDB" percentage="50%" />
              <Skills skill="Firebase/Heroku" percentage="70%" />
              <Skills skill="Webpack" percentage="60%" />
              <Skills skill="Docker" percentage="30%" />
            </div>
          </div>
          <div>
            <h1>PERSONAL</h1>
            <div>
              <Skills skill="Communication" percentage="80%" />
              <Skills skill="Leadership" percentage="78%" />
              <Skills skill="Teamwork" percentage="70%" />
              <Skills skill="Creativity" percentage="75%" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg">PROJECTS</h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          {data.map((item, index) => {
            return <Projects key={index} name={item.title} tech={item.tech} imgUri={item.imgUri} uri={item.uri} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
