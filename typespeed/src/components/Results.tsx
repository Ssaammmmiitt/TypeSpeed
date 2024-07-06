import classNames from "classnames";
import {motion} from "framer-motion";

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
    const amimate = { opacity: 1};
    const duration = {duration :0.3};


  return (
    <ul
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <li className="text-xl font-semibold">Results</li>
      <li>Accuracy : {accuracyPercentage} %</li>
      <li className="text-red-700">Errors : {errors}</li>
      <li>Typed words: {total}</li>
    </ul>
  );
};

export default Results;
