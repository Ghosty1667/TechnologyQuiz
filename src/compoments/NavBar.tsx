import { Navbar } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>

          </a>
        </div>
        <span className="d-flex navbar-brand "></span>
      </nav>
    </div>
  );
}


export default Navbar