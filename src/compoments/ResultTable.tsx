import response from "../types/response";

export const ResultTable: React.FC<response> = ({ questions, response }) => {
    return (
        <div className="accordion" id="accordionResults">
            {questions.map((questions, index: number) => {
                
                const answer = questions?.answer[response[index]];
                const isCorrect: boolean = questions.answer[response[index]] === questions.answer[questions.correct];
                
                return (

                    <div key={index} className="accordion-item m-2" id={isCorrect ? "correct" : "incorrect"}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`#collapse-${index}`}>
                                Q{index + 1} : {questions.question}
                            </button>
                        </h2>
                        <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionResults">
                            <div className="accordion-body">
                                Correct Answer : {questions.answer[questions.correct]} <br/>
                                Your Answer : {answer! ? answer : "None"}
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}


export default ResultTable