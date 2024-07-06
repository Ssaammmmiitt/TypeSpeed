import {animate, motion} from "framer-motion";
import { formatPercentage } from "../utilities/helpers";
const Results = ({
  errors,
  accuracyPercentage,
  total,
  className,
}: {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}) => {
    const initial = {opacity : 0};
    const animate = { opacity: 1};
    const duration = {duration :0.3};


  return (
    <motion.ul
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay:0}}  className="text-xl font-semibold">Results</motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay:0.5}}>Accuracy : {formatPercentage(accuracyPercentage)}</motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay:1}}className="text-red-700">Errors : {errors}</motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay:1.4}}>Typed words: {total}</motion.li>
    </motion.ul>
  );
};

export default Results;
