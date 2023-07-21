import { motion } from "framer-motion";
import Letter from "../animations/Letter";
import { style } from "./views/NavBar";
import { Heading } from "@chakra-ui/react";

const Name = () => {
  const luis = "Luis Moguea";
  return (
    <motion.div>
      <Heading mt="0" fontSize="30px" style={style} backgroundClip="text">
        {luis.split("").map((letter, index) => (
          <Letter letter={letter} key={index} />
        ))}
      </Heading>
    </motion.div>
  );
};

export default Name;
