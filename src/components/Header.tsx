import { Container, Navbar, NavbarBrand } from "reactstrap";


const Header = () => {

	return (
		<Navbar fixed="top" color="dark" dark expand="md">
				<Container fluid>
						<NavbarBrand href="/">ProtectPay</NavbarBrand>
				</Container>
		</Navbar>
	)
} 

export default Header;