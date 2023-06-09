import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

export default function Animate({ children }) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
     
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      
    </div>
  );
}
