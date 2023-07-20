import { Image, Box, Button, Heading, Flex } from "@chakra-ui/react";

interface Props {
  image: string;
  description: string;
}
const ProjectComponent = ({ image, description }: Props) => {
  return (
    <>
      <Flex padding="2em" justifyContent="space-between">
        <Image width="400px" src={image} />
        <Box marginX="80px">
          <Heading fontSize="36px">{description}</Heading>
          <Button
            float="right"
            mt="0"
            border="none"
            fontSize="12px"
            padding="1em"
            paddingX="1.4em"
            borderRadius="20px"
            bgColor="#D5D8DC"
            cursor="pointer"
            _hover={{ opacity: "0.3" }}
          >
            See Project →
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectComponent;
