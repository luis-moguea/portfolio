import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { projectsData } from "../../models/projectsData";
import ProjectComponent from "../ProjectComponent";
import { style } from "./NavBar";

import { even } from "../../utils/conditional";
import ProjectComponentOdd from "../ProjectComponentOdd";
import LanguageHeading from "../../animations/LanguageHeading";

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
        padding="2em"
        maxWidth={isHigherThan480 ? "1100px" : "380px"}
      >
        <Heading
          textAlign="center"
          style={style}
          backgroundClip="text"
          mt={isHigherThan480 ? "0" : "-12px"}
          fontSize={isHigherThan480 ? "36px" : "22px"}
        >
          <LanguageHeading title={projectsTitle} />
        </Heading>
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
