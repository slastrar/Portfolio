import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I specialize in data preparation and transformation, utilizing Python libraries
        such as Pandas, NumPy, and Scikit-learn alongside SQL to build efficient pipelines
        and ensure high data quality. My focus is on creating robust workflows that support
        machine learning models and advanced analytics. In addition, I design and deploy 
        predictive models using tools like Scikit-learn and TensorFlow, ensuring they are
        scalable and perform effectively in production environments. My goal is to optimize
        data workflows and deliver impactful machine learning solutions.
      </motion.p>
      <div className="w-full mt-20 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
