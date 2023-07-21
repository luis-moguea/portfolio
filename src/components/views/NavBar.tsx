import { Box } from "@chakra-ui/react";
import photo from "../../assets/profile-pic.jpeg";
import Name from "../Name";
import Photo from "../../animations/Photo";
import { useMediaQuery } from "@chakra-ui/react";

export const style = {
  backgroundImage:
    "linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
};

const NavBar = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  return (
    <>
      <Box
        display="flex"
        flexDirection={isHigherThan480 ? "unset" : "column"}
        justifyContent={isHigherThan480 ? "space-between" : "center"}
        alignItems={isHigherThan480 ? "unset" : "center"}
        marginTop="0"
        pt="0"
        padding="2em"
        pb="0"
      >
        <Photo icon={photo} />
        <Name />
      </Box>
    </>
  );
};

export default NavBar;
