import { Box, Heading } from "@chakra-ui/react";
import { projectsData } from "../../models/projectsData";
import ProjectComponent from "../ProjectComponent";
import { style } from "./NavBar";

import { even } from "../../utils/conditional";
import ProjectComponentOdd from "../ProjectComponentOdd";

const ProjectsSection = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        pt="0"
        mt="0"
        padding="2em"
        maxWidth="1000px"
      >
        <Heading
          textAlign="center"
          style={style}
          backgroundClip="text"
          mt="-30px"
          fontSize="36px"
        >
          Projects
        </Heading>
        {projectsData.map((el, index) =>
          even(index) ? (
            <ProjectComponent
              key={index}
              description={el.description}
              image={el.projectPng}
            />
          ) : (
            <ProjectComponentOdd
              key={index}
              description={el.description}
              image={el.projectPng}
            />
          )
        )}
      </Box>
    </>
  );
};

export default ProjectsSection;
