import styles from "../styles/hero.module.css";
import { motion } from "framer-motion";

function Herosection() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
      },
    },
  };
  const bottomtotop1 = {
    hidden: { opacity: 0, rotate: 100, originX: 0, originY: 1 },
    show: {
      opacity: 1,
      rotate: 0,
      originX: 0,
      originY: 0,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 1,
      },
    },
  };
  const bottomtotop2 = {
    hidden: { opacity: 0, rotate: 180, originX: 0, originY: 0.5 },
    show: {
      opacity: 1,
      rotate: 0,
      originX: 0,
      originY: 0,
      transition: {
        ease: [0.6, 0.99, 0.99, 0.95],
        duration: 1,
      },
    },
  };
  const toptobottom = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };
  const fadein = {
    hidden: { opacity: 0, scale: 1.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      className={styles.manntopwrapper}
      initial="hidden"
      animate="show"
    >
      <div className={styles.herowrapper}>
        <div className={styles.textmain}>
          <h1>
            <motion.span variants={items}>W</motion.span>
            <motion.span variants={items}>E</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={items}>T</motion.span>
            <motion.span variants={items}>U</motion.span>
            <motion.span variants={items}>R</motion.span>
            <motion.span variants={items}>N </motion.span>
            <span>&nbsp;</span>
            <motion.span variants={items}>Y</motion.span>
            <motion.span variants={items}>O</motion.span>
            <motion.span variants={items}>U</motion.span>
            <motion.span variants={items}>R</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={items}>D</motion.span>
            <motion.span variants={items}>E</motion.span>
            <motion.span variants={items}>S</motion.span>
            <motion.span variants={items}>I</motion.span>
            <motion.span variants={items}>R</motion.span>
            <motion.span variants={items}>E</motion.span>
            <motion.span variants={items}>S</motion.span>
            <span>&nbsp;</span>
            <span>
              <motion.span variants={items}>I</motion.span>
              <motion.span variants={items}>N</motion.span>
              <motion.span variants={items}>T</motion.span>
              <motion.span variants={items}>O</motion.span>
            </span>
            <span>&nbsp;</span>
            <span className={styles.inner_textmain}>
              <motion.span variants={bottomtotop1}>#</motion.span>
              <motion.span variants={bottomtotop2}>R</motion.span>
              <motion.span variants={bottomtotop1}>E</motion.span>
              <motion.span variants={bottomtotop2}>A</motion.span>
              <motion.span variants={bottomtotop1}>L</motion.span>
              <motion.span variants={bottomtotop2}>I</motion.span>
              <motion.span variants={bottomtotop1}>T</motion.span>
              <motion.span variants={bottomtotop2}>Y</motion.span>
            </span>{" "}
          </h1>
          <p>
            <motion.span variants={toptobottom}>We</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>provide</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>all</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>kinds</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>of</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>IT</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>services</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>like</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>consulting,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>analytics,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>lead</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>generation,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>sales,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>websites</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>and</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>application</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>development,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>digital</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>marketing,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>B2B</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>marketing,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>and</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>development,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>graphic</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>design,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>SEO,</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>SEM</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={toptobottom}>etc.</motion.span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Herosection;
