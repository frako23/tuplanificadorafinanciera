import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css"
import foto2 from "../../img/_MG_4923-Edit.jpg"
import foto from "../../img/photo_2023-01-30_11-18-57.jpg"

export const Conocenos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron iniciopagina container">
			<h1>Conóceme</h1>

			<div className="container py-5 border-top ">
				<div className="row d-flex justify-content-center ">
					<div className="col-8 mb-5">
						<p className="fs-1 text fw-bolder">¿Cuáles son mis valores? </p>
						<div>
							<h5>Honestidad</h5>

							<p>Creemos que la sinceridad y la franqueza son las bases en las cuales se construye el valor de la confianza y la
								garantía hacia lo que hacemos por cada una de las personas.</p>

							<h5>Vocación de servicio</h5>

							<p>Tenemos el servicio instaurado en nuestro ADN. Nuestra creencia de servir a otros de manera desinteresada
								nos hace crecer como seres humanos y como empresa, llevándonos a una mejoría constante.</p>

							<h5>Pasión por lo que hacemos</h5>

							<p>Amamos lo que hacemos. Nos dedicamos a vivir con propósito y eso nos hace felices en el camino al logro de
								nuestros objetivos.</p>
						</div>


					</div>
					<div className="col-4 w-auto mb-5">
						<img
							src={foto}
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
					</div>

					<div className="col-4 w-auto mt-5 mb-5">
						<img
							src={foto2}
							alt="imagen"
							width="300px"
							style={{ "border-radius": "50%" }}
						/>
					</div>
					<div className="col-8 mt-5 mb-5">

						<p className="fs-1 text fw-bolder">Mi Propósito</p>

						<p>“Ayudar a que las personas sean libres y felices financieramente,
							que vivan en abundancia y prosperidad, brindandoles paz mental
							en el presente y tranquilidad en el futuro”</p>
						<br></br>
						<p className="fs-1 text fw-bolder">Misión</p>

						<p>Ayudar a las personas a crecer y desarrollarse a nivel financiero, para lograr la abundancia y prosperidad en
							sus vidas.</p>
						<br></br>
						<p className="fs-1 text fw-bolder">Visión</p>

						<p>Ser un referente en Latinoamérica que ayuda a las personas a
							cambiar su mentalidad, facilitándoles herramientas que les ayuden a
							lograr ser abundantes y prósperos.</p>

					</div>
				</div>
			</div>


			<div className="position-relative mt-5">
				<Link to="/">
					<span className="btn btn-outline-secondary position-absolute bottom-0 start-50 translate-middle-x mb-5" href="#" role="button">
						Página de inicio
					</span>
				</Link></div>
				<a href="https://api.whatsapp.com/send?phone=584143050116" className="btn-wsp" target="_blank">
                <i className="fa fa-whatsapp icono"></i>
            </a>
		</div>
	);
};
