import QuestionNavigation from "./compoments/QuestionNavigation"
import QuestionsList from "./compoments/QuestionsHandler"


function App() {
  return (
    <div className="App">
      <div className="container overflow-hidden text-center">
        <div className="row">
          <div className="col p-3">
              <h2>WikiTruth</h2>
            <div className="row">
            <button type="submit" className="g-col-4 btn btn-primary" value="Submit" >Answer 1</button>
                <button type="submit" className="g-col-4 btn btn-primary" value="Submit">Answer 2</button>
                <button type="submit" className="g-col-4 btn btn-primary" value="Submit" >Answer 3</button>
                <button type="submit" className="g-col-4 btn btn-primary" value="Submit">Answer 4</button>
            </div>
          </div>
          <div className="error"></div>
          <p>Test</p>
          <QuestionsList/>
          <p>Test</p>
        <QuestionNavigation/>
        
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
