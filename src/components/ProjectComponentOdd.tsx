import { Image, Box, Heading } from "@chakra-ui/react";
import ButtonAnimation from "./animations/ButtonAnimation";

interface Props {
  image: string;
  description: string;
  link: string;
}
const ProjectComponentOdd = ({ image, description, link }: Props) => {
  return (
    <>
      <Box display="flex" padding="2em" justifyContent="space-between">
        <Box marginX="40px">
          <Heading mt="0" fontSize="24px" textAlign="justify">
            {description}
          </Heading>
          <ButtonAnimation link={link} />
        </Box>
        <Image width="400px" src={image} />
      </Box>
    </>
  );
};

export default ProjectComponentOdd;
