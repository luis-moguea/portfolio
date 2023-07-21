import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Languages from "../../animations/Languages";
import { languagesData } from "../../models/languagesData";
import { style } from "./NavBar";
import LanguageHeading from "../../animations/LanguageHeading";
import { useMediaQuery } from "@chakra-ui/react";

const LanguagesSection = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const langTitle = "Languages & Tools";
  return (
    <>
      <Box
        m="0"
        p="0"
        borderBottom="solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderWidth="1px"
      >
        <Heading
          mt="20px"
          textAlign="center"
          backgroundClip="text"
          style={style}
          fontSize={isHigherThan480 ? "36px" : "22px"}
        >
          <LanguageHeading title={langTitle} />
        </Heading>
        <SimpleGrid columns={isHigherThan480 ? 4 : 2}>
          {languagesData.map((el, index) => (
            <Languages key={index} icon={el.icon} language={el.language} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default LanguagesSection;
