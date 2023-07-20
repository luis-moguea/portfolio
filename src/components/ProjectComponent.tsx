import { Image, Box, Button, Heading, Flex, Link } from "@chakra-ui/react";
import ButtonAnimation from "../animations/ButtonAnimation";

interface Props {
  image: string;
  description: string;
  link: string;
}

const ProjectComponent = ({ image, description, link }: Props) => {
  return (
    <>
      <Flex padding="2em" justifyContent="space-between">
        <Image width="400px" src={image} />
        <Box marginX="40px">
          <Heading fontSize="36px" wordBreak="break-all">
            {description}
          </Heading>
          <ButtonAnimation link={link} />
        </Box>
      </Flex>
    </>
  );
};

export default ProjectComponent;
