
import response from "../types/response";



export const ResultTable: React.FC<response> = ({ questions, response }) => {
    console.log(response)
    console.log(questions)
    return (
        <div className="table-responsive p-5 container-sm">
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Question</th>
                        <th scope="col">Answer</th>
                        <th scope="col">Your Response</th>
                        <th scope="col">Correct?</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((questions, index: number) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{questions.question}</td>
                                <td>{questions.answer[questions.correct]}</td>
                                <td>{questions.answer[response[index]]! ? questions.answer[response[index]] : <p>N/A</p>}</td>
                                <td>{questions.answer[response[index]] === questions.answer[questions.correct] ?
                                   
                                        <input className="form-check-input" type="checkbox" value="True" disabled checked></input>
                                    :
                                        <input className="form-check-input" type="checkbox" value="False" disabled></input>
                                   
                                 }</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>




    );
}


export default ResultTable