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
        <Box
          fontWeight="bold"
          textAlign="center"
          mt={isHigherThan480 ? "0" : "20pxpx"}
          fontSize="30px"
        >
          <ProjectHeading title={projectsTitle} />
          <Text
            mt={isHigherThan480 ? "unset" : "-30px"}
            fontSize="11px"
            color="rgba(0, 0, 0, 0.6)"
          >
            Some of my projects
          </Text>
        </Box>
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
