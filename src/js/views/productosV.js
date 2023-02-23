import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductosV = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron iniciopagina container">
			<h1>Nuestros Productos </h1>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
					<div className="col-8">
						
							<p className="fs-1 text fw-bolder" >Planes de Jubicacion </p>
						<p className="fs-5 text">

							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident rem esse dignissimos nihil praesentium! Rerum eligendi nisi corrupti id, cupiditate nobis, aut, ipsam dolorem repellendus iste aspernatur rem!
						</p>
						
						
					
					</div>
					<div className="col-4 w-auto">
						<img
							src="https://img.freepik.com/fotos-premium/concepto-familia-edad-temporada-personas-feliz-pareja-mayor-abrazandose-sobre-fondo-arboles-otono_380164-101890.jpg?w=1380"
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }} 
						/>
					</div>
				</div>
			</div>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
				<div className="col-4 w-auto">
						<img
							src="https://img.freepik.com/foto-gratis/chica-universitaria-que-trabaja-computadora-portatil-despues-lecciones_496169-88.jpg?w=1060&t=st=1666278663~exp=1666279263~hmac=255a67f1218f4a896bb263d4d0a534782989715ce79adf04b4537207c9db60ae"
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
					</div>
					<div className="col-8">
						<p className="fs-1 text fw-bolder">Planes de estudios universitarios </p>
						<p className="fs-5 text">

							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident rem esse dignissimos nihil praesentium! Rerum eligendi nisi corrupti id, cupiditate nobis, aut, ipsam dolorem repellendus iste aspernatur rem!
						</p>
						
					</div>
					
				</div>
			</div>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
					<div className="col-8">
						<p className="fs-1 text fw-bolder">Planes Corporativos </p>
						<p className="fs-5 text">

							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident rem esse dignissimos nihil praesentium! Rerum eligendi nisi corrupti id, cupiditate nobis, aut, ipsam dolorem repellendus iste aspernatur rem!
						</p>
						
					</div>
					<div className="col-4 w-auto">
						<img
							src="https://img.freepik.com/foto-gratis/retrato-empresarios-exitosos-cargo-dos-hombres-serios-trajes-que-trabajan-computadoras-mesa-toman-decisiones-desarrollan-estrategias-crecimiento-empresarial-concepto-finanzas-crecimiento-empresarial_74855-24621.jpg?t=st=1666280929~exp=1666281529~hmac=ec7eaf0e748d483f7630dffbb621ead03b6575ea8203304617703517a3bfd10c"
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
					</div>
				</div>
			</div>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
					<div className="col-4 w-auto">
						<img
							src="https://img.freepik.com/foto-gratis/primer-plano-formulario-medico_1232-380.jpg?t=st=1666280843~exp=1666281443~hmac=c367ebd18858fd5cb0bd12d92f1fa2548d17dfed547ede28a5c710d3580dc4c5"
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
					</div>
					<div className="col-8">
						<p className="fs-1 text fw-bolder">Seguros de enfermedades críticas </p>
						<p className="fs-5 text">

							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident rem esse dignissimos nihil praesentium! Rerum eligendi nisi corrupti id, cupiditate nobis, aut, ipsam dolorem repellendus iste aspernatur rem!
						</p>
					
					</div>
					
				</div>
			</div>
			<div className="position-relative mt-5">
					<Link to="/">
						<span className="btn btn-outline-secondary position-absolute bottom-0 start-50 translate-middle-x mb-5" href="#" role="button">
							Página de inicio
						</span>
					</Link>
				</div>
			<a href="https://api.whatsapp.com/send?phone=584143050116" className="btn-wsp" target="_blank">
                <i className="fa fa-whatsapp icono"></i>
            </a>
		</div>
	);
};

