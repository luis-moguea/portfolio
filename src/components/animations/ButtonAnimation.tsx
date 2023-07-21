import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/button";

interface Props {
  link: string;
}

const ButtonAnimation = ({ link }: Props) => {
  return (
    <motion.div whileHover={{ x: "30px" }} transition={{ duration: 0.2 }}>
      <Link href={link} isExternal textDecoration="none" color="black">
        <Button
          mt="0"
          border="none"
          fontSize="12px"
          padding="1em"
          paddingX="1.4em"
          borderRadius="20px"
          bgColor="#D5D8DC"
          cursor="pointer"
          _hover={{ opacity: "0.3" }}
        >
          See Project →
        </Button>
      </Link>
    </motion.div>
  );
};

export default ButtonAnimation;
