import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Languages from "../../animations/Languages";
import { languagesData } from "../../models/languagesData";
import { style } from "./NavBar";

const LanguagesSection = () => {
  return (
    <>
      <Box>
        <Heading
          textAlign="center"
          backgroundClip="text"
          style={style}
          fontSize="36px"
        >
          Languages & Tools
        </Heading>
        <SimpleGrid columns={4}>
          {languagesData.map((el, index) => (
            <Languages key={index} icon={el.icon} language={el.language} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default LanguagesSection;
