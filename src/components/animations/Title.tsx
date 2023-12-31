import { motion } from "framer-motion";

interface Props {
  letter: string;
}

const Title = ({ letter }: Props) => {
  return (
    <motion.h1
      whileHover={{ y: -10, color: "#76D7C4", cursor: "pointer", rotate: 360 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      animate={{
        y: [0, -2, 0, -4, 0, -6, 0, -10, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      {letter}
    </motion.h1>
  );
};

export default Title;
