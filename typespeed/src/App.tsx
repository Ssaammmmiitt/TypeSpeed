import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";

const words = faker.random.words(40);
console.log(words);

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-white">{words}</div>;
};

function App() {
  return (
    <>
      <CountDownTimer timeLeft={60} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={words} />
        </WordsContainer>      <RestartButton
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

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return(
    <div className="relative text-3xl max-w-xl mt-3 leading-relaxed break-all">
      {children}
    </div>
  )
};

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time: {timeLeft}</h2>;
};

export default App;
