import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel } from "../component/carusel";
import { Productos } from "../component/productos";
import { Jumbotron } from "../component/jumbotron";
import banner1 from "../../img/Banner_1.png"

export const Home = () => (
	<div className="text-center mt-5">
		{/* <Carousel /> */}
		<img
            src= {banner1}
            className="d-block w-100 container-fluid pt-5"
            alt="..."
          ></img>
		<Productos />
		
		<Jumbotron/>
		<a href="https://api.whatsapp.com/send?phone=584143050116" className="btn-wsp" target="_blank">
                <i className="fa fa-whatsapp icono"></i>
            </a>
	</div>
);
