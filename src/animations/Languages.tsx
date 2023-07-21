import { motion } from "framer-motion";
import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";

interface Props {
  icon: string;
  language: string;
}
const Languages = ({ icon, language }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

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
          width={isHigherThan480 ? "65px" : "20px"}
          height={isHigherThan480 ? "65px" : "20px"}
          objectFit="cover"
          src={icon}
        />
        <Text
          fontSize={isHigherThan480 ? "20px" : "13px"}
          color="#95A5A6"
          mt="1px"
          fontWeight="bold"
        >
          {language}
        </Text>
      </Box>
    </motion.div>
  );
};

export default Languages;
