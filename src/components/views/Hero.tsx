import { Box, HStack, Text } from "@chakra-ui/react";
import githubIcon from "../../assets/pngegg.png";
import linkedInIcon from "../../assets/pngegg (1).png";
import Icons from "../../animations/Icons";
import Title from "../../animations/Title";

const Hero = () => {
  const title = "Frontend Developer";
  const description =
    "Hello! I'm a passionate junior frontend developer creating engaging web experiences. I turn designs into appealing, responsive websites using HTML, CSS, JavaScript and React. Eager to learn and stay up-to-date with trends. Let's build something awesome together!";
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="2em"
        pt="0"
        textAlign="center"
        mt="-45px"
      >
        <HStack fontSize="32px">
          {title.split("").map((letter, index) => (
            <Title key={index} letter={letter} />
          ))}
        </HStack>

        <Text maxWidth="800px" fontSize="24">
          {description}
        </Text>
        <HStack>
          <Icons image={githubIcon} />
          <Icons image={linkedInIcon} />
        </HStack>
      </Box>
    </>
  );
};

export default Hero;
