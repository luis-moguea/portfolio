import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

interface Props {
  icon: string;
}
const Languages = ({ icon }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, cursor: "pointer" }}
      transition={{ duration: 0.2 }}
    >
      <Image
        width="80px"
        borderRadius="50%"
        boxShadow="1px 1px 8px 1px rgba(0, 0, 0, 0.2)"
        src={icon}
      />
    </motion.div>
  );
};

export default Languages;
