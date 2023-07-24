import NavBar from "./components/views/NavBar";
import Hero from "./components/views/Hero";
import LanguagesSection from "./components/views/LanguagesSection";
import Experience from "./components/views/Experience";
import ProjectsSection from "./components/views/ProjectsSection";
import { Box, useMediaQuery } from "@chakra-ui/react";

const App = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        maxWidth={isHigherThan480 ? "unset" : "320px"}
        padding="0"
        margin="0 auto"
      >
        <NavBar />
        <Hero />
        <LanguagesSection />
        <Experience />
        <ProjectsSection />
      </Box>
    </>
  );
};

export default App;
