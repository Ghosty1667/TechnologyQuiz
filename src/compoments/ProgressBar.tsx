import { useState } from "react";
import response from "../types/response";

export const ProgressBar : React.FC<response> = ({questions,response}) => {
    const [progress, setProgress] = useState<number>(getScore());

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
        score = score / questions.length * 100
   
        return score
    }

    return (
        <div className="container">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, backgroundColor: getColor() }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div>
    )
}

export default ProgressBar