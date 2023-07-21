import { Image, Box, Heading, useMediaQuery } from "@chakra-ui/react";
import ButtonAnimation from "../animations/ButtonAnimation";

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
          width={isHigherThan480 ? "400px" : "200px"}
          height={isHigherThan480 ? "unset" : "120px"}
          src={image}
        />
        <Box marginX="40px">
          <Heading
            fontSize={isHigherThan480 ? "36px" : "16px"}
            wordBreak="break-all"
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
