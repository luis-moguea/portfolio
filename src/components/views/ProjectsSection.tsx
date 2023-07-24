import { Box, useMediaQuery, Text } from "@chakra-ui/react";
import { projectsData } from "../../models/projectsData";
import ProjectComponent from "../ProjectComponent";

import { even } from "../../utils/conditional";
import ProjectComponentOdd from "../ProjectComponentOdd";
import ProjectHeading from "../animations/ProjectHeading";

const ProjectsSection = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const projectsTitle = "Projects";
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        pt="0"
        mt="0"
        padding={isHigherThan480 ? "2em" : "0"}
        maxWidth={isHigherThan480 ? "1100px" : "380px"}
      >
        <Text
          fontWeight="bold"
          textAlign="center"
          mt={isHigherThan480 ? "0" : "-12px"}
          fontSize="48px"
        >
          <ProjectHeading title={projectsTitle} />
        </Text>
        {isHigherThan480
          ? projectsData.map((el, index) =>
              even(index) ? (
                <ProjectComponent
                  key={index}
                  description={el.description}
                  image={el.projectPng}
                  link={el.deployment}
                />
              ) : (
                <ProjectComponentOdd
                  key={index}
                  description={el.description}
                  image={el.projectPng}
                  link={el.deployment}
                />
              )
            )
          : projectsData.map((el, index) => (
              <ProjectComponent
                key={index}
                description={el.description}
                image={el.projectPng}
                link={el.deployment}
              />
            ))}
      </Box>
    </>
  );
};

export default ProjectsSection;
