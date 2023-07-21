import { motion } from "framer-motion";

interface Props {
  letter: string;
}
const Title = ({ letter }: Props) => {
  return (
    <motion.h1
      whileHover={{ y: -10, color: "#76D7C4", cursor: "pointer", rotate: 360 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      {letter}
    </motion.h1>
  );
};

export default Title;
