import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface Props {
  image: string;
}

const Icons = ({ image }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <Image
        mt={isHigherThan480 ? "unset" : "20px"}
        width={isHigherThan480 ? "40px" : "24px"}
        src={image}
      />
    </motion.div>
  );
};

export default Icons;
