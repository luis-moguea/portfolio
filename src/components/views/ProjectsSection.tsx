import { Box, Heading } from "@chakra-ui/react";
import { projectsData } from "../../models/projectsData";
import ProjectComponent from "../ProjectComponent";
import { style } from "./NavBar";

import { even } from "../../utils/conditional";
import ProjectComponentOdd from "../ProjectComponentOdd";
import LanguageHeading from "../../animations/LanguageHeading";

const ProjectsSection = () => {
  const projectsTitle = "Projects";
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        pt="0"
        mt="0"
        padding="2em"
        maxWidth="1100px"
      >
        <Heading
          textAlign="center"
          style={style}
          backgroundClip="text"
          mt="-30px"
          fontSize="22px"
        >
          <LanguageHeading title={projectsTitle} />
        </Heading>
        {projectsData.map((el, index) =>
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
        )}
      </Box>
    </>
  );
};

export default ProjectsSection;
