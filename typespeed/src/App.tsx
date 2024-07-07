import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utilities/helpers";
import ParticleBg from "./components/ParticleBg";
import logo from "../src/logotrans.png";
const words = faker.word.words(40);
console.log(words);

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-white">{words}</div>;
};

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
    <div className="w-[250px] h-[250px] items-center mx-auto">
      <img src={logo}/>
    </div>
      <CountDownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>{" "}
      <RestartButton
        className={"mx-auto mt-10 text-slate-200"}
        onRestart={restart}
      />
      <Results
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        className="mt-10"
        total={totalTyped}
      />
      <ParticleBg/>
    </>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-2xl mt-3 leading-relaxed break-all">
      {children}
    </div>
  );
};

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time: {timeLeft}</h2>;
};

export default App;
