import { useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../compoments/NavBar";
import { ProgressBar } from "../compoments/ProgressBar";
import { ResultTable } from "../compoments/ResultTable";


function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    const toResults = () => {
        navigate('/');
      }
 
    return (
        <>
            <NavBar />
                <div className="container p-3">
                <ProgressBar  questions={location.state.questions} response={location.state.response}/>
                <ResultTable questions={location.state.questions} response={location.state.response}/>
                <button className="btn btn-primary" onClick={toResults}>Try Again?</button>
            </div>
        </>
    )
}


   
export default Results
