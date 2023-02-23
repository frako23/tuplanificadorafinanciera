import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/formulario.css"
import foto3 from "../../img/photo_2023-01-30_12-32-21.jpg"

export const Contactanos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>

			<div className="jumbotron iniciopagina container">
				<h1 >Contáctame</h1>

				<div className="container d-flex">

					<div className="contact_form ">

						<div className="formulario">
							<h1>Formulario de contacto</h1>
							<h3>Escríbeme y en breve me pondré en contacto contigo</h3>


							<form action="https://www.actionforms.io/e/r/formulario" method="post">


								<p>
									<label for="nombre" className="colocar_nombre">Nombre
										<span className="obligatorio">*</span>
									</label>
									<input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" />
								</p>

								<p>
									<label for="email" className="colocar_email">Email
										<span className="obligatorio">*</span>
									</label>
									<input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
								</p>

								<p>
									<label for="telefone" className="colocar_telefono">Teléfono
									</label>
									<input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
								</p>

								<p>
									<label for="asunto" className="colocar_asunto">Asunto
										<span className="obligatorio">*</span>
									</label>
									<input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto" />
								</p>

								<p>
									<label for="mensaje" className="colocar_mensaje">Mensaje
										<span className="obligatorio">*</span>
									</label>
									<textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
								</p>

								<button type="submit" name="enviar_formulario" className="btn btn-outline-secondary">Enviar</button>

								<p className="aviso">
									<span className="obligatorio"> * </span>los campos son obligatorios.
								</p>

							</form>
						</div>





					</div>
					<img
						src={foto3}
						alt="imagen"
						className="imgform"

					/>
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
		</>
	);
};

