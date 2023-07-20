import { Image, Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

interface Props {
  image: string;
  description: string;
  link: string;
}
const ProjectComponentOdd = ({ image, description, link }: Props) => {
  return (
    <>
      <Flex padding="2em" justifyContent="space-between">
        <Box marginX="80px">
          <Heading fontSize="36px">{description}</Heading>
          <Link href={link} isExternal>
            <Button
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
          </Link>
        </Box>
        <Image width="400px" src={image} />
      </Flex>
    </>
  );
};

export default ProjectComponentOdd;
