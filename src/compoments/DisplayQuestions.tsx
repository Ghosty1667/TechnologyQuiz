import React from 'react'
import { Question } from "../types/questions";

interface Props{
    data: Question;
    onAnswerClick: (newNumber : number) => void;
}
 export const DisplayQuestions : React.FC<Props> = ({data, onAnswerClick}) => {

    return (<div>

        <div className="col p-3">
            <h1 className='p-5'>{data?.question}</h1>
            <div className="d-grid gap-2 col-10 mx-auto">
                {data?.question && data?.answer.map((answer, index : number) => {
                    return (
                        <button type="button" className="btn btn-lg btn-secondary p-3"  value={index} key={index} onClick={()=>{onAnswerClick(index)}}>{answer}</button>
                    )
                })}

            </div>
        </div>
    </div>)
}