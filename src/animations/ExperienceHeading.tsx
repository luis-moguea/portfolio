import { motion } from "framer-motion";

interface Props {
  title: string;
}

const ExperienceHeading = ({ title }: Props) => {
  return (
    <motion.h1 whileHover={{ color: "#76D7C4", x: "60px", cursor: "pointer" }}>
      {title}
    </motion.h1>
  );
};

export default ExperienceHeading;
