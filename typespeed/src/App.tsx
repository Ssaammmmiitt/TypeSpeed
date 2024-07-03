import {faker} from "@faker-js/faker";

const words = faker.random.words(10);
console.log(words);




function App() {
  return <div className="text-4xl font-bold text-white text-center">
    {words}
  </div>;
}

export default App;
