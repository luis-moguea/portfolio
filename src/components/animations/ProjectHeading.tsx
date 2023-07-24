import { motion } from "framer-motion";

interface Props {
  title: string;
}

const ProjectHeading = ({ title }: Props) => {
  return (
    <motion.h1
      whileHover={{ color: "#76D7C4", x: "-60px", cursor: "pointer" }}
      animate={{
        color: "black",
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      {title}
    </motion.h1>
  );
};

export default ProjectHeading;
