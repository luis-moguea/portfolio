import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { style } from "./NavBar";
import ExperienceHeading from "../animations/ExperienceHeading";
const experience =
  "I have gained valuable experience working on personal projects, utilizing a diverse set of technologies and tools. With a strong grasp of APIs, I have integrated them seamlessly into my projects, harnessing the power of React and its various libraries to create dynamic and interactive user interfaces. My proficiency in JavaScript and TypeScript allows me to write clean and efficient code, while CSS and HTML enable me to craft visually appealing designs. Additionally, I have a basic understanding of Express and Node.js, complemented by my knowledge of Postman for API testing. With this skill set, I am eager to tackle new challenges and contribute to innovative projects.";

const Experience = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const experienceHead = "Experience";
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="2em"
        pt="0"
        textAlign="center"
        borderBottom="solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderWidth="1px"
        maxWidth={isHigherThan480 ? "unset" : "180px"}
      >
        <Heading
          style={style}
          backgroundClip="text"
          fontSize={isHigherThan480 ? "36px" : "34px"}
        >
          <ExperienceHeading title={experienceHead} />
        </Heading>
        <Text
          mt="0"
          maxWidth="800px"
          fontSize={isHigherThan480 ? "24px" : "11px"}
        >
          {experience}
        </Text>
      </Box>
    </>
  );
};

export default Experience;
