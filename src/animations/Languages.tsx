import { motion } from "framer-motion";
import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
  icon: string;
  language: string;
}
const Languages = ({ icon, language }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, cursor: "pointer" }}
      transition={{ duration: 0.4 }}
    >
      <Box textAlign="center">
        <Image
          borderRadius="18px"
          boxShadow="8px 8px 14px 2px rgba(0, 0, 0, 0.2)"
          margin="10px"
          mb="0"
          padding="2em"
          width="65px"
          height="65px"
          objectFit="cover"
          src={icon}
        />
        <Text fontSize="20px" color="#95A5A6" mt="1px" fontWeight="bold">
          {language}
        </Text>
      </Box>
    </motion.div>
  );
};

export default Languages;
