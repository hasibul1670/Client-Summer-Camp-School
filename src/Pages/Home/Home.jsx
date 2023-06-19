import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Banner from "./Banner";
import Category from "./Category";
import Courses from "./Courses";

const Home = () => {
  const bannerControls = useAnimation();
  const categoryControls = useAnimation();
  const coursesControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Adjust these values as per your requirement
      const triggerPointBanner = 0.2; // Percentage of the document height when banner animation should trigger
      const triggerPointCategory = 0.5; // Percentage of the document height when category animation should trigger
      const triggerPointCourses = 0.8; // Percentage of the document height when courses animation should trigger
      const duration = 1.5; // Animation duration in seconds

      if (scrollY > (documentHeight - windowHeight) * triggerPointBanner) {
        bannerControls.start({ opacity: 1, y: 0, transition: { duration } });
      }

      if (scrollY > (documentHeight - windowHeight) * triggerPointCategory) {
        categoryControls.start({ opacity: 1, x: 0, transition: { duration } });
      }

      if (scrollY > (documentHeight - windowHeight) * triggerPointCourses) {
        coursesControls.start({
          opacity: 1,
          scale: 1,
          transition: { duration },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerControls, categoryControls, coursesControls]);

  return (
    <div>
      <Banner />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={bannerControls}
        style={{ opacity: 0 }}
      >
        <Category />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={categoryControls}
        style={{ opacity: 0 }}
      >
        <Courses />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={bannerControls}
        style={{ opacity: 0 }}
      >

      </motion.div>

    
    </div>
  );
};

export default Home;
