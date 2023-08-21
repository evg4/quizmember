import "./App.css";
import Header from "./header";
import QuizMember from "./quizmember";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <QuizMember />
      </main>
    </div>
  );
}

export default App;
