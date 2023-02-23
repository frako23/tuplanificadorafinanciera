import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../../styles/index.css"
import logo from "../../img/logo.png";

export const Navbar1 = () => {


	return (
		<>
			{["sm"].map((expand) => (
				<Navbar fixed="top" key={expand} bg="white" expand={expand} className="mb-3">
					<Container fluid>
						<Navbar.Brand >
							<Link to={"/"}>
							<img className="logo" src={logo} />
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								<img className="logo" src={logo} />
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 pe-3">
									<Link to="/conocenos">
										<h5 className="px-5">Conóceme</h5>
									</Link>
									<Link to="/productosV">
									<h5 className="px-5">Productos</h5>
									</Link>
									<Link to="/trabajaConNosotros">
									<h5 className="px-5">Únete a mi equipo</h5>
									</Link>
									<Link to="/contactanos">
									<h5 className="px-5">Contáctame</h5> 
									</Link>
								</Nav>

							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};
