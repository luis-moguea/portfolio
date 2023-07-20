import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

interface Props {
  image: string;
}

const Icons = ({ image }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <Image width="40px" src={image} />
    </motion.div>
  );
};

export default Icons;
