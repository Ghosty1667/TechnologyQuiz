import { useState } from "react";
import response from "../types/response";


export const ProgressBar : React.FC<response> = ({questions,response}) => {
    const [progress] = useState<number>(getScore());

    const getColor = () => {
        if (progress < 40) {
            return "#ff0000"
        }
        else if (progress < 70) {
            return "#ffa500"
        } else {
            return "#2ecc71"
        }
    }



    function getScore(){
        let score = 0;
        questions?.map((questions, index : number ) => {
           if(questions.answer[response[index]] === questions.answer[questions.correct]){
            score++;
            console.log(questions.answer[response[index]] +" " + questions.answer[questions.correct])
           }})

        return score
    }

    return (
        <div className="container">
            <h2>Score: {progress} / {questions.length}</h2>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${progress / questions.length * 100}%`, backgroundColor: getColor() }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div>
    )
}

export default ProgressBar