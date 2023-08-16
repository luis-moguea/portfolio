import { motion } from "framer-motion";
import { Image, useMediaQuery } from "@chakra-ui/react";

interface Props {
  icon: string;
}
const Languages = ({ icon }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <motion.div
      whileHover={{ scale: 1.2, cursor: "pointer", rotate: -360 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        width={isHigherThan480 ? "80px" : "92px"}
        height={isHigherThan480 ? "80px" : "100px"}
        objectFit="fill"
        borderRadius="50%"
        boxShadow="1px 1px 8px 1px rgba(0, 0, 0, 0.2)"
        src={icon}
      />
    </motion.div>
  );
};

export default Languages;
