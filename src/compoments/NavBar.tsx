import { Progress } from "antd";
import { Navbar } from "reactstrap";

interface NavbarInfo {
  currentQuestion? : number;
  totalQuestion? : number;
  currentTime? : number;
}

const totalTime : number = 120;

export const NavBar : React.FC<NavbarInfo> = ({currentQuestion, totalQuestion,currentTime}) => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h3> Technology Questions</h3>
          </a>
          <div className="d-flex align-items-center" role="">
          {totalQuestion  ? <h3 className="m-3">{currentQuestion!+1}/{totalQuestion}</h3> : ""}
          {currentTime ? <Progress size={"small"} type="circle" percent={(currentTime/totalTime * 100)}  format={(currentTime) => `${currentTime?.toFixed()}`}/>: ""}
         

          </div>
          
        </div>

      </nav>
      {currentTime ? <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${currentTime/totalTime * 100}%` }} aria-valuenow={(currentTime/totalTime * 100)} aria-valuemin={0} aria-valuemax={100}></div>
            </div> : ""}
    </div>
  );
}


export default Navbar