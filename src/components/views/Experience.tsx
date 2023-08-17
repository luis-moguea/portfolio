import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { style } from "./NavBar";
import ExperienceHeading from "../animations/ExperienceHeading";

const Experience = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const experienceHead = "Experience";
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={isHigherThan480 ? "2em" : "0"}
        pt="0"
        textAlign="center"
        borderBottom="solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderWidth="1px"
        maxWidth={isHigherThan480 ? "unset" : "300px"}
      >
        <Heading
          style={style}
          backgroundClip="text"
          fontSize={isHigherThan480 ? "36px" : "28px"}
        >
          <ExperienceHeading title={experienceHead} />
        </Heading>
        <Text
          mt="0"
          maxWidth={isHigherThan480 ? "800px" : "300px"}
          fontSize={isHigherThan480 ? "20px" : "16px"}
          textAlign={isHigherThan480 ? "unset" : "justify"}
        >
          I've gained{" "}
          <Text as="span" fontWeight="bold">
            valuable experience through personal projects
          </Text>
          , exploring various technologies and tools. I excel in{" "}
          <Text as="span" fontWeight="bold">
            integrating APIs
          </Text>{" "}
          seamlessly into my projects using{" "}
          <Text as="span" fontWeight="bold">
            React and its libraries
          </Text>{" "}
          for dynamic user interfaces. <br />
          <br /> My proficiency in{" "}
          <Text as="span" fontWeight="bold">
            JavaScript and TypeScript
          </Text>{" "}
          helps me write clean, efficient code, while{" "}
          <Text as="span" fontWeight="bold">
            CSS and HTML
          </Text>{" "}
          let me craft visually appealing designs. Additionally, I have basic
          knowledge of{" "}
          <Text as="span" fontWeight="bold">
            Express, Node.js, and API testing with Postman.
          </Text>{" "}
          <br />
          <br />
          Completed a couple of{" "}
          <Text as="span" fontWeight="bold">
            frontend mentor projects
          </Text>{" "}
          too!
        </Text>
      </Box>
    </>
  );
};

export default Experience;
