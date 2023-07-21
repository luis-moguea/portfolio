import { motion } from "framer-motion";

interface Props {
  letter: string;
}

const Letter = ({ letter }: Props) => {
  return (
    <motion.span
      whileHover={{
        cursor: "pointer",
        color: "black",
        fontSize: "42px",
      }}
      transition={{ duration: 0.4 }}
    >
      {letter}
    </motion.span>
  );
};

export default Letter;
