import { useEffect, useState } from "react"
import { getJSON } from "../compoments/api/api.tsx"
import { Questions } from "../types/questions.tsx";
import Dictionary from "../types/dictionary.tsx";
import { useNavigate } from "react-router-dom";
import useCountdown from "../compoments/Timer.tsx"
import QuestionNavigation from "../compoments/QuestionNavigation.tsx";
import { DisplayQuestions } from "../compoments/DisplayQuestions.tsx";
import { NavBar } from "../compoments/NavBar.tsx";


function App() {

  const [questions, setQuestions] = useState<Questions | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [totalQuestion, setTotalQuestion] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const [userAnswers, setUserAnswers] = useState<Dictionary<number>>({});

  const navigate = useNavigate();

  const { secondsLeft, start } = useCountdown();

  const toResults = () => {
    navigate('Results', { state: { "response": userAnswers, "questions": questions } });
  }

  //Handle Data entry
  useEffect(() => {
    const fetchQuestions = async () => {
      const data: Questions = await getJSON<Questions>("../question.json");
      setQuestions(data);
      setCurrentQuestion(0);
      setTotalQuestion(data.length)
      setLoading(true);
      start(120);
    }
    fetchQuestions();
  }, [])


  useEffect(() => {
  // Debug Questions
    console.log(currentQuestion)
    console.log(userAnswers)
  }, [currentQuestion,userAnswers])


  const handleQuestionChange = (newQuestion: number) => {
    setCurrentQuestion(newQuestion);
  };


  const handleAnswerChange = (choice: number) => {
    setUserAnswers(prevAnswers => ({ ...prevAnswers, [currentQuestion]: choice }));
  }


  return (
    <div className="App">
      <NavBar totalQuestion={totalQuestion} currentQuestion={currentQuestion} currentTime={secondsLeft}/>
      <div className="container overflow-hidden text-center">
        <div className="row">
          <h5 className="p-5">Question {currentQuestion + 1}</h5>
          {loading && questions! ? <DisplayQuestions data={questions[currentQuestion]} prevAnswer={userAnswers[currentQuestion]!} onAnswerClick={handleAnswerChange} /> : null}
          <QuestionNavigation
            totalQuestion={totalQuestion} currentQuestion={currentQuestion} onQuestionChange={handleQuestionChange} />
          <button className="btn btn-primary" onClick={toResults}>Submit</button>
          <footer className="bg-light text-center text-lg-start fixed-bottom">
            <div className="text-center p-3" >
              <a>Test</a>
            </div>
          </footer>
        </div >
      </div>
    </div>
  )
}

export default App
