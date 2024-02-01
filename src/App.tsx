import { useEffect, useState } from "react"
import { getJSON } from "./compoments/api/api"
import { Questions } from "./types/questions";
import { DisplayQuestions } from "./compoments/DisplayQuestions";
import QuestionNavigation from "./compoments/QuestionNavigation";
import {NavBar} from "./compoments/NavBar";
import Dictionary from "./types/dictionary";
import { Link, useNavigate } from "react-router-dom";


let response : Dictionary<number> = {};

function App() {

  const [questions, setQuestions] = useState<Questions | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [totalQuestion, setTotalQuestion] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const toResults = () => {
    navigate('Results',{state:{"response" : response, "questions": questions}});
  }


  useEffect(() => {
    const fetchQuestions = async () => {
      const data: Questions = await getJSON<Questions>("../question.json");
      setQuestions(data);
      setCurrentQuestion(0);
      setTotalQuestion(data.length)
      setLoading(true);
    }
    console.log()
    fetchQuestions();
  }, [])

  const handleQuestionChange = (newQuestion: number) => {
    setCurrentQuestion(newQuestion);
  };

  const handleAnswerChange = (choice: number) => {
    response[currentQuestion] = choice;
  }
  

  return (
    <div className="App">
      <NavBar/>
      <div className="container overflow-hidden text-center">
      
        <div className="row">
          <h5>Question {currentQuestion}</h5>
          {loading && questions! ? <DisplayQuestions data={questions[currentQuestion]} onAnswerClick={handleAnswerChange} /> : null}
          <QuestionNavigation
            totalQuestion={totalQuestion} currentQuestion={currentQuestion} onQuestionChange={handleQuestionChange} /><button onClick={toResults}>Submit</button>
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
