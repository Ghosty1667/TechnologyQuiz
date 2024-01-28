import { Nav, Navbar, NavItem, NavLink, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';


export default function MainNavBar() {

    return (
        <div>
            <Navbar color="light" expand="md" light>
                <NavbarBrand href="/"> Volcanoes of the world </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/VolcanoList">
                                Volcano List
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Register">
                                Register
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
}