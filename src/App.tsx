import NavBar from "./components/views/NavBar";
import Hero from "./components/views/Hero";
import LanguagesSection from "./components/views/LanguagesSection";
import Experience from "./components/views/Experience";
import ProjectsSection from "./components/views/ProjectsSection";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Hero />
        <LanguagesSection />
        <Experience />
        <ProjectsSection />
      </Box>
    </>
  );
};

export default App;
