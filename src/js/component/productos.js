import React from "react";
import { Link } from "react-router-dom";
import "../../styles/segmento.css"

export const Productos = () => {
  return (
    <React.Fragment>
      <section className="section-products mb-2">
        <div className="">
          <div className="container-fluid d-flex justify-content-center">
            <h1 className="display-6 text-bold text-center">
              Encuentra herramientas para afrontar tus retos financieros
            </h1>
          </div>
          <br></br>


          <br></br>
          <br></br>
          <div className="row segmento">
            <div className="card col-md-6 col-lg-4 col-xl-2 me-2">
              <Link className="seccion-link" to="productosV/#retiro" >
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="https://img.freepik.com/fotos-premium/concepto-familia-edad-temporada-personas-feliz-pareja-mayor-abrazandose-sobre-fondo-arboles-otono_380164-101890.jpg?w=1380"
                      
                       />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-4">
                    <div className="header text-center">
                      <h5 className=""><strong>Planes de retiro</strong></h5>
                      <p>¿Haz pensado en tu retiro? Solo el 5% de las personas mayores de 65 años logran jubilarse de una manera digna, a traves de nuestros planes tu tambien podrás hacerlo.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card col-md-6 col-lg-4 col-xl-2 me-2">
              <Link
                className="seccion-link"
                to="/Oferts"
                // preventScrollReset={true}
              >
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                    <img src="https://img.freepik.com/foto-gratis/chica-universitaria-que-trabaja-computadora-portatil-despues-lecciones_496169-88.jpg?w=1060&t=st=1666278663~exp=1666279263~hmac=255a67f1218f4a896bb263d4d0a534782989715ce79adf04b4537207c9db60ae"/>
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-4">
                    <div className="header text-center">
                      <h5 ><strong>Plan de estudios universitarios</strong></h5>
                      <p>En América Latina, solo el 13% de los jóvenes logran acceder a la universidad. La razon para esto es económica, nuestros planes te permitiran garantizar la educación de tus hijos</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card col-md-6 col-lg-4 col-xl-2 me-2">
              <Link className="seccion-link" to="/intercambios">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="https://img.freepik.com/foto-gratis/retrato-empresarios-exitosos-cargo-dos-hombres-serios-trajes-que-trabajan-computadoras-mesa-toman-decisiones-desarrollan-estrategias-crecimiento-empresarial-concepto-finanzas-crecimiento-empresarial_74855-24621.jpg?t=st=1666280929~exp=1666281529~hmac=ec7eaf0e748d483f7630dffbb621ead03b6575ea8203304617703517a3bfd10c" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-4">
                    <div className="header text-center">
                      <h5 className=""><strong>Planes corporativos</strong></h5>
                      <p>¿Necesitas incentivos laborales para tus empleados? a traves de nuestros planes podras ayudarlos a planificar su retiro y proteger financieramente a sus seres queridos</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="card col-md-6 col-lg-4 col-xl-2">
              <Link className="seccion-link" to="/subastas">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="https://img.freepik.com/foto-gratis/primer-plano-formulario-medico_1232-380.jpg?t=st=1666280843~exp=1666281443~hmac=c367ebd18858fd5cb0bd12d92f1fa2548d17dfed547ede28a5c710d3580dc4c5" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-4">
                    <div className="header text-center">
                      <h5 className=""><strong>Seguro de enfermedades críticas</strong></h5>
                      <p>La pandemia nos ha enseñado que lo frágiles que podemos ser económicamente si llegamos a sufrir de una enfermedad crítica, afortunadamente tenemos la solución</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};