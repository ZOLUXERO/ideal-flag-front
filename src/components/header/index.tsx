import "./styles.css"
import logo from "../../assets/logo-small.svg"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className="m-auto" href="#home">
                    <Link to={"/"}>
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;