import { motion } from "framer-motion";



const AnimatedCursos = ({ children }) => {
    return (
        <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }} >
        {children}
      </motion.div>
    );
  };
export  default AnimatedCursos  