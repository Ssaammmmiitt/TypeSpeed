import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utilities/helpers";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish";

const Number_of_Words =40;
const Countdown_Seconds = 60;
const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(Number_of_Words);
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdownTimer(Countdown_Seconds);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== "finish"
  );

  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  //as soon the user starts typing the first letter,we start
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  //when the time is up, we have finished
  useEffect(() => {
    if (!timeLeft) {
      console.log("time is up");
      setState("finish");
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  //when the user has finished typing all the words,we generate and show another set of words
  useEffect(() => {
    if (areWordsFinished) {
      console.log("words finished");
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    sumErrors,
  ]);

  const restart = useCallback(() => {
    console.log("restart");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed ,restart,errors,totalTyped};
};

export default useEngine;
