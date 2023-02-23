import React, { Component } from "react";
import "../../styles/index.css";

export const Footer = () => (
  <div>
    <footer className="text-center text-lg-start text-black bg-white border-top">
      <div className="container-fluid p-4 pb-0">
        <section className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Tu Planificadora Financiera
              </h6>
              <p>Ayudo a aportar soluciones financieras a personas y empresas, que desean construir y proteger su patrimonio</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Secciones
              </h6>
              <p>
                <a href="./Account" className="text-black">
                  Conóceme
                </a>
              </p>
              
              <p>
                <a className="text-black">Contáctame</a>
              </p>
              <p>
                <a className="text-black">Únete a mi equipo</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Productos
              </h6>
              <p>
                <a href="./AboutUs" className="text-black">
                  Planes de retiro
                </a>
              </p>
              <p>
                <a className="text-black">Plan de estudios universitarios</a>
              </p>
              <p>
                <a className="text-black">Planes corporativos</a>
              </p>
              <p>
                <a className="text-black">Seguro de enfermedades críticas</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold border-bottom">
                Contacto
              </h6>
              {/* <p>
                <i className="fas fa-home mr-3"></i> Av. Libertador, Torre EDIFICA, piso 7, Caracas, Venezuela 1060
              </p> */}
              <p> 
                <a href="mailto:tuplanifiadorafinanciera@gmail.com" target="_blank">
                 tuplanifiadorafinanciera@gmail.com<i className="fas fa-envelope mr-3"></i>
              </a>
              </p>
             
    
              <p >
                <a href="https://api.whatsapp.com/send?phone=584143050116" target="_blank">
              <i className="fa-brands fa-whatsapp"></i> +58 0414-3050116
              </a>
              </p>
              
              
            </div>
          </div>
        </section>

        <hr className="my-3 w-100" />

        <section className="p-3 pt-0 container h-25">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                Tu Planificadora Financiera © 2023
                <a
                  className="text-black m-1"
                  href="https://github.com/frako23/haztuoferta.com"
                >
                  
                </a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a href="https://www.instagram.com/tuplanificadorafinanciera/" target="_blank"
                className="btn btn-outline-dark btn-floating m-1 "
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/kesling-garcia-05a0a390/" target="_blank"
                className="btn btn-outline-dark btn-floating m-1 "
                role="button"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.tiktok.com/@tuplannerfinanciera"
                className="btn btn-outline-dark btn-floating m-1 "
                role="button"
              >
                <i className="fab fa-tiktok "></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1 "
                role="button"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
);