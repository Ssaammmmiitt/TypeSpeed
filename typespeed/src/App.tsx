import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";



const words = faker.random.words(40);
console.log(words);

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-white italic">{words}</div>;
};

function App() {
  return (
    <>
      <CountDownTimer timeLeft={60} />
      <GeneratedWords words={words} />
      <RestartButton
        className={"mx-auto mt-10 text-slate-200"}
        onRestart={() => null}
      />
      <Results
        errors={10}
        accuracyPercentage={90}
        className="mt-10"
        total={100}
      />
    </>
  );
}

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time: {timeLeft}</h2>;
};

export default App;
