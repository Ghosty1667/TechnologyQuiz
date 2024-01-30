import React from 'react'
import { Question } from "../types/questions";

interface Props{
    data: Question;
}
 export const DisplayQuestions : React.FC<Props> = ({data}) => {
    return (<div>

        <div className="col p-3">
            <h2>{data?.question}</h2>
            <div className="row">
                {data?.question && data?.answer.map((answer) => {
                    return (
                        <button type="submit" className="g-col-4 btn btn-primary" value="Submit" >{answer}</button>
                    )
                })}

            </div>
        </div>
    </div>)
}