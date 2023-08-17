import { Image, Box, Heading, useMediaQuery } from "@chakra-ui/react";
import ButtonAnimation from "./animations/ButtonAnimation";

interface Props {
  image: string;
  description: string;
  link: string;
}

const ProjectComponent = ({ image, description, link }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box
        display="flex"
        flexDirection={isHigherThan480 ? "unset" : "column"}
        alignItems={isHigherThan480 ? "unset" : "center"}
        padding="2em"
        justifyContent={isHigherThan480 ? "space-between" : "center"}
      >
        <Image
          width={isHigherThan480 ? "400px" : "300px"}
          height={isHigherThan480 ? "unset" : "180px"}
          src={image}
        />
        <Box
          marginX={isHigherThan480 ? "40px" : "unset"}
          display={isHigherThan480 ? "unset" : "flex"}
          flexDirection={isHigherThan480 ? "unset" : "column"}
          alignItems={isHigherThan480 ? "unset" : "center"}
          justifyContent={isHigherThan480 ? "unset" : "center"}
        >
          <Heading
            mt={isHigherThan480 ? "0" : "20px"}
            fontSize="24px"
            textAlign="justify"
          >
            {description}
          </Heading>
          <ButtonAnimation link={link} />
        </Box>
      </Box>
    </>
  );
};

export default ProjectComponent;
