import React from 'react'
import { Question } from "../types/questions";

interface Props{
    data: Question;
    prevAnswer? : number | null;
    onAnswerClick: (newNumber : number) => void;
}
 export const DisplayQuestions : React.FC<Props> = ({data, prevAnswer, onAnswerClick}) => {


    const handleChoiceClick = (number: number) => {
        onAnswerClick(number);
    }

    return (<div>     
        <div className="col">
            <h1 className=''>{data?.question}</h1>
            <div className="d-grid gap-2 col-10 mx-auto">
                <h5>Please select an option</h5>
                {data?.question && data?.answer.map((answer, index : number) => {
                    return (
                        <button type="button" className={`btn btn-lg ${index === prevAnswer ? "btn-primary" : "btn-secondary"} p-3`} value={index} key={index} onClick={()=>{handleChoiceClick(index)}}>{answer}</button>
                    )
                })}

            </div>
        </div>
    </div>)
}