import { Image, Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import ButtonAnimation from "../animations/ButtonAnimation";

interface Props {
  image: string;
  description: string;
  link: string;
}
const ProjectComponentOdd = ({ image, description, link }: Props) => {
  return (
    <>
      <Flex padding="2em" justifyContent="space-between">
        <Box marginX="40px">
          <Heading
            fontSize="36px"
            wordBreak="break-all"
            textOverflow="ellipsis"
          >
            {description}
          </Heading>
          <ButtonAnimation link={link} />
        </Box>
        <Image width="400px" src={image} />
      </Flex>
    </>
  );
};

export default ProjectComponentOdd;
