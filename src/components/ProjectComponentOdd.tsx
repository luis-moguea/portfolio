import { Image, Text, HStack, Box, Button } from "@chakra-ui/react";

interface Props {
  image: string;
  description: string;
}
const ProjectComponentOdd = ({ image, description }: Props) => {
  return (
    <>
      <HStack padding="2em">
        <Box marginX="100px">
          <Text>{description}</Text>
          <Button float="left">See Project →</Button>
        </Box>
        <Image src={image} />
      </HStack>
    </>
  );
};

export default ProjectComponentOdd;
