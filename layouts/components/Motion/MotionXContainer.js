import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const MotionXContainer = ({ children, transition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const elementVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={transition}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
