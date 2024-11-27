import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} grid sm:grid-cols-[2fr_1fr] items-center`}
      >
        <div className="flex gap-x-5 relative">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <TypeAnimation
              sequence={['Hi', 1000, "Hi I'am", 1000, "Hi, I'm Santiago! ", 1000]}
              speed={50}
              className={`${styles.heroHeadText} text-white`}
              wrapper="h1"
              repeat={1}
            />
            <TypeAnimation
              sequence={[
                'I analyze and interpret data to create insightful reports and dashboards.',
              ]}
              speed={200}
              className={`${styles.heroSubText} mt-2 text-white-100 h-8 `}
              wrapper="p"
              repeat={2}
              cursor={false}
            />
            <div className="flex flex-col  md:flex-row mt-10 absolute gap-5">
              <div className="flex items-center justify-center">
                <SiGmail className="w-12 h-8 cursor-pointer" />
                <span className="text-light ">santiago.lastrar@gmail.com</span>
              </div>

              <Link
                to="https://github.com/slastrar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-12 h-8 cursor-pointer" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/slastrar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-12 h-8 cursor-pointer" />
              </Link>
              <Link
                to="https://www.kaggle.com/slastrar960"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaKaggle className="w-12 h-8 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:bg-violet-500/10 rounded-3xl h-full">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
