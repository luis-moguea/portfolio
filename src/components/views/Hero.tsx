import { Box, HStack, Link, Text } from "@chakra-ui/react";
import githubIcon from "../../assets/pngegg.png";
import linkedInIcon from "../../assets/pngegg (1).png";
import Icons from "../animations/Icons";
import Title from "../animations/Title";
import { useMediaQuery } from "@chakra-ui/react";

const Hero = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const title = "Frontend Developer";

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={isHigherThan480 ? "2em" : "0"}
        pt="0"
        textAlign="center"
        mt={isHigherThan480 ? "-45px" : "-20px"}
        borderBottom="solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderWidth="1px"
      >
        <HStack
          maxWidth={isHigherThan480 ? "unset" : "350px"}
          letterSpacing={isHigherThan480 ? "unset" : "-7.5px"}
          fontSize={isHigherThan480 ? "32px" : "22px"}
        >
          {title.split("").map((letter, index) => (
            <Title key={index} letter={letter} />
          ))}
        </HStack>
        <Text
          mt={isHigherThan480 ? "0" : "20px"}
          maxWidth={isHigherThan480 ? "unset" : "300px"}
          fontSize={isHigherThan480 ? "24px" : "18px"}
          textAlign={isHigherThan480 ? "unset" : "justify"}
        >
          Hello there! I'm Luis, a passionate{" "}
          <Text as="span" fontWeight="bold">
            Frontend developer
          </Text>{" "}
          with expertise in creating engaging web experiences. <br />
          <br />I turn designs into appealing, responsive websites using{" "}
          <Text as="span" fontWeight="bold">
            HTML, CSS, JavaScript, React, and TypeScript.
          </Text>{" "}
          <br />
          <br /> Always eager to stay up-to-date with trends, I'm excited to
          collaborate and build something awesome together!{" "}
          <Text as="span" fontWeight="bold">
            Let's make the web a better place!
          </Text>{" "}
          🚀
        </Text>
        <HStack>
          <Link href="https://github.com/luis-moguea" isExternal>
            <Icons image={githubIcon} />
          </Link>
          <Icons image={linkedInIcon} />
        </HStack>
      </Box>
    </>
  );
};

export default Hero;
