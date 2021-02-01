import { Container, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";

const SideBar = () => {
    return (
        <Container fluid className="sidebar d-none d-md-block">
            <Scrollspy items={ ['name', 'age', 'count', 'description'] } currentClassName="is-current" offset={-55}>
                <NavLink href="#name">Name</NavLink>
                <NavLink href="#age">Age</NavLink>
                <NavLink href="#count">Count</NavLink>
                <NavLink href="#description">Description</NavLink>
            </Scrollspy>
        </Container>
    )
}

export default SideBar;

