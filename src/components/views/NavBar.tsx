import { HStack, Text } from "@chakra-ui/react";
import photo from "../../assets/profile-pic.jpeg";
import Name from "../Name";
import Photo from "../../animations/Photo";

export const style = {
  backgroundImage:
    "linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
};

const NavBar = () => {
  return (
    <>
      <HStack
        marginTop="-40px"
        pt="0"
        padding="2em"
        pb="0"
        justifyContent="space-between"
      >
        <Photo icon={photo} />
        <Text style={style} backgroundClip="text">
          <Name />
        </Text>
      </HStack>
    </>
  );
};

export default NavBar;
