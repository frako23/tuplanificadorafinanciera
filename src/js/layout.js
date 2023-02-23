import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Contactanos } from "./views/contactanos";
import { ProductosV } from "./views/productosV";
import { TrabajaConNosotros } from "./views/trabajaConNosotros";
import injectContext from "./store/appContext";
import { Conocenos } from "./views/conocenos";
import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	

	return (
		<div>
			<BrowserRouter >
				<ScrollToTop>
					<Navbar1 />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
						<Route path="/productosV" element={<ProductosV />} />
						<Route path="/contactanos" element={<Contactanos />} />
						<Route path="/conocenos" element={<Conocenos />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
