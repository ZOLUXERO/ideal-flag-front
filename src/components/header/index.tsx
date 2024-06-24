import "./styles.css"
import logo from "../../assets/logo-small.svg"
import { Navbar } from "react-bootstrap"
import {Container} from "react-bootstrap"

export default function Header() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className="m-auto" href="#home"><img src={logo} className="logo" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}