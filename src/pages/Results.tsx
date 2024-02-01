import { useLocation } from "react-router-dom";
import { NavBar } from "../compoments/NavBar";
import { ProgressBar } from "../compoments/ProgressBar";
import { ResultTable } from "../compoments/ResultTable";


function Results() {
    const location = useLocation();

 
    return (
        <>
            <NavBar />
                <div className="container">
                <ResultTable questions={location.state.questions} response={location.state.response}/>
                <ProgressBar questions={location.state.questions} response={location.state.response}/>
            </div>
        </>
    )
}


   
export default Results
