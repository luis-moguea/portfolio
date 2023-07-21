import { motion } from "framer-motion";
import Letter from "./animations/Letter";
import { style } from "./views/NavBar";
import { Heading, useMediaQuery } from "@chakra-ui/react";

const Name = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const luis = "Luis Moguea";
  return (
    <motion.div>
      <Heading
        mt="0"
        fontSize={isHigherThan480 ? "30px" : "50px"}
        style={style}
        backgroundClip="text"
      >
        {luis.split("").map((letter, index) => (
          <Letter letter={letter} key={index} />
        ))}
      </Heading>
    </motion.div>
  );
};

export default Name;
