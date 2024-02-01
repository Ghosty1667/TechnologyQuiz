import { Progress } from "antd";
import { Navbar } from "reactstrap";

interface NavbarInfo {
  currentQuestion? : number;
  totalQuestion? : number;
  currentTime? : number;
}


export const NavBar : React.FC<NavbarInfo> = ({currentQuestion, totalQuestion,currentTime}) => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h3> Technology Questions</h3>
          </a>
          <div className="d-flex align-items-center" role="">
          {totalQuestion ? <h3 className="m-3">{currentQuestion+1}/{totalQuestion}</h3> : ""}
          {currentTime ? <Progress size={"small"} type="circle" percent={(currentTime/120 * 100)}  format={(currentTime) => `${currentTime?.toFixed()}`}/>: ""}
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar