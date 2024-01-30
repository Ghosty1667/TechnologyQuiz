import { useEffect, useState } from "react"
import { getJSON } from "./compoments/api/api"
import { Questions } from "./types/questions";
import { DisplayQuestions } from "./compoments/DisplayQuestions";
import QuestionNavigation from "./compoments/QuestionNavigation";


function App() {

  const [questions, setQuestions] = useState<Questions | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [totalQuestion, setTotalQuestion] = useState<number>(0);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data: Questions = await getJSON<Questions>("../question.json");
      setQuestions(data);
      setCurrentQuestion(0);
      setTotalQuestion(data.length)
      console.log(data)
      setLoading(true);
    }
    fetchQuestions();
  }, [])

  const handleQuestionChange = (newQuestion: number) => {
    setCurrentQuestion(newQuestion);
  };


  return (
    <div className="App">
      <div className="container overflow-hidden text-center">
        <div className="row">
          <div className="error"></div>
          <p>Test</p>
          {loading && questions! ? <DisplayQuestions data={questions[currentQuestion]} /> : null}
          <QuestionNavigation 
            totalQuestion={totalQuestion} currentQuestion={currentQuestion} onQuestionChange={handleQuestionChange}/>
        </div >
        <footer className="bg-light text-center text-lg-start fixed-bottom">
          <div className="text-center p-3" >

          </div>
        </footer>
      </div >
    </div>

  )
}

export default App
