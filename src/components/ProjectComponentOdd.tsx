import { Image, Box, Heading, useMediaQuery } from "@chakra-ui/react";
import ButtonAnimation from "../animations/ButtonAnimation";

interface Props {
  image: string;
  description: string;
  link: string;
}
const ProjectComponentOdd = ({ image, description, link }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box
        display={isHigherThan480 ? "flex" : "block"}
        padding="2em"
        justifyContent="space-between"
      >
        <Box marginX="40px">
          <Heading
            fontSize={isHigherThan480 ? "36px" : "16px"}
            wordBreak="break-all"
            textOverflow="ellipsis"
          >
            {description}
          </Heading>
          <ButtonAnimation link={link} />
        </Box>
        <Image
          width={isHigherThan480 ? "400px" : "200px"}
          height={isHigherThan480 ? "unset" : "70px"}
          src={image}
        />
      </Box>
    </>
  );
};

export default ProjectComponentOdd;
