import { Navbar } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span> MyQuiz </span>
          </a>
        </div>
        <span className="d-flex navbar-brand "></span>
      </nav>
    </div>
  );
}


export default Navbar