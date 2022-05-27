import styles from "../styles/hero.module.css";
import Image from "next/image";
import backitems1 from "../public/images/backitems1.svg";
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
    <motion.div className={styles.manntopwrapper}>
      <div className={styles.herowrapper}>
        <div className={styles.background_backitems1}>
          <Image src={backitems1} className={styles.backitems1} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default Herosection;
