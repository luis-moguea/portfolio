import { motion } from "framer-motion";

interface Props {
  title: string;
}

const ExperienceHeading = ({ title }: Props) => {
  return (
    <motion.div whileHover={{ color: "#76D7C4", x: "60px", cursor: "pointer" }}>
      {title}
    </motion.div>
  );
};

export default ExperienceHeading;
