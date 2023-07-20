import { Image, Text, HStack, Box, Button } from "@chakra-ui/react";

interface Props {
  image: string;
  description: string;
}
const ProjectComponent = ({ image, description }: Props) => {
  return (
    <>
      <HStack padding="2em">
        <Image src={image} />
        <Box marginX="100px">
          <Text>{description}</Text>
          <Button float="right">See Project →</Button>
        </Box>
      </HStack>
    </>
  );
};

export default ProjectComponent;
