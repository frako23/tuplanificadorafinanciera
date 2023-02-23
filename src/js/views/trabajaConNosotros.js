import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import foto4 from "../../img/photo_2023-01-30_17-09-45.jpg"

export const TrabajaConNosotros = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron iniciopagina container">
			<h1 >Únete a mi equipo</h1>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
					<div className="col-8">
						
						<p className="fs-5 text">

							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident rem esse dignissimos nihil praesentium! Rerum eligendi nisi corrupti id, cupiditate nobis, aut, ipsam dolorem repellendus iste aspernatur rem!
						</p>
						<p className="fs-5 text">Siempre viculado a la tecnología</p>
					</div>
					<div className="col-4 w-auto">
						<img
							src={foto4}
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
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

