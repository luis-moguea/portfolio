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
        padding="2em"
        pt="0"
        textAlign="center"
        mt={isHigherThan480 ? "-45px" : "-20px"}
        borderBottom="solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderWidth="1px"
      >
        <HStack
          letterSpacing={isHigherThan480 ? "unset" : "-7.5px"}
          fontSize={isHigherThan480 ? "32px" : "21px"}
        >
          {title.split("").map((letter, index) => (
            <Title key={index} letter={letter} />
          ))}
        </HStack>
        <Text
          mt={isHigherThan480 ? "0" : "20px"}
          maxWidth={isHigherThan480 ? "unset" : "280px"}
          fontSize={isHigherThan480 ? "24px" : "18px"}
          textAlign={isHigherThan480 ? "unset" : "justify"}
        >
          Hello! I'm a passionate junior frontend developer creating engaging
          web experiences. <br />
          <br />I turn designs into appealing, responsive websites using HTML,
          CSS, JavaScript and React. Eager to learn and stay up-to-date with
          trends. Let's build something awesome together!
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
