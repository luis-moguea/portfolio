import { motion } from "framer-motion";
import Letter from "../animations/Letter";

const Name = () => {
  const luis = "Luis Moguea";
  return (
    <motion.h1>
      {luis.split("").map((letter, index) => (
        <Letter letter={letter} key={index} />
      ))}
    </motion.h1>
  );
};

export default Name;
