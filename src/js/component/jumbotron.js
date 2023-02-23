import React from "react"; //Main React.js library
import "../../styles/home.css"



export const Jumbotron = () => {
	return (<div className="rounded-3">
                        <div className="container eljumbo mb-5 pb-5">
                            <div className="texto">
                                
                                <h1 className="display-1 ">!Únete a mi equipo!</h1>
                                <p className="col-md-8 fs-4 text-white">Inicia tu carrera en el mundo de las ventas</p>
                                <button className="btn btn-outline-light" type="button">Agenda una cita</button>
                                </div>
                        </div>
                </div>)
};
/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/