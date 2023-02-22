import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi'
import eldatologonegro from '../assets/imgs/eldatomx_negro.png'
import eldatologoblanco from '../assets/imgs/eldatomx_blanco.png'

export const Layout = ({ children }) => {
	let [isActive, setIsActive] = useState(false)

	return (
		<>
			<header>
				<nav
					className="navbar is-dark"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="navbar-brand">
						<a className="navbar-item" href="https://eldatomx.com">
							<img
								alt="logo"
								src={eldatologoblanco}
								width="150"
								height="32"
							/>
						</a>

						<button
							onClick={() => {
								setIsActive(!isActive)
							}}
							className={`navbar-burger ${isActive ? 'is-active' : ''}`}
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</button>
					</div>
					<div
						id="navbarBasicExample"
						className={`navbar-menu ${isActive ? 'is-active' : ''}`}
					>
						<div className="navbar-end">
							<Link className="navbar-item" to="/">
								Inicio{' '}
							</Link>
							<div className="navbar-item has-dropdown is-hoverable">
								<Link className="navbar-link" to="/">
									Deportes
								</Link>
								<div className="navbar-dropdown is-right">
									<Link className="navbar-item" to="/lmbstats">
										Estadisticas LMB
									</Link>
									<div className="navbar-dropwdown">
										<a
											className="navbar-item"
											href="https://moneyball.eldatomx.com"
											target="_blank"
											rel="noreferrer"
										>
											Moneyball en español
										</a>
									</div>
								</div>
							</div>
							<div className="navbar-item has-dropdown is-hoverable">
								<Link className="navbar-link" to="/politica">
									Politica
								</Link>
								<div className="navbar-dropdown is-right">
									<Link className="navbar-item" to="/map">
										Mapa Interactivo INEGI
									</Link>
									<Link className="navbar-item" to="/political_map">
										Mapa Político de México
									</Link>
								</div>
							</div>
							{/*Estadisticas LFA <Link className="navbar-item" to='/lmbstats'>Estadísticas LMB</Link>*/}

							{/* CDMX standalone map <Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>*/}
							{/*Galeria de mapas demograficos rendereados con r<Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>*/}
						</div>
					</div>
				</nav>
			</header>
			<main>{children}</main>
			<div id="container-a3ebf2d077d04f3829cad3634cf92e4f"></div>
			<footer className="section footer">
				<div className="container">
					<div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
						<div className="mr-auto mb-2">
							<a className="is-inline-block" href="https://eldatomx.com">
								<img
									className="image"
									src={eldatologonegro}
									alt="logo"
									width="256px"
								/>
							</a>
						</div>
						<div>
							<ul className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
								{/*<li className="mr-4">Quienes somos</li>*/}
								<Link className="navbar-item" to="/ads">
									Anúnciate aquí
								</Link>
								{/*<li className="mr-4">Anúnciate aquí</li>*/}
							</ul>
						</div>
					</div>
				</div>
				<div className="pt-5"></div>
				<div className="container">
					<div className="is-flex-tablet is-justify-content-between is-align-items-center">
						<p>Copyright © El dato MX 2023</p>
						<div className="py-2 is-hidden-tablet"></div>
						<div className="ml-auto">
							<a
								className="mr-4 is-inline-block"
								target="_blank"
								rel="noreferrer"
								href="https://twitter.com/el_dato_mx?s=20&t=MeDu5eUpRZF5WFuREHy5uw"
							>
								<span className="icon is-large">
									<FiTwitter className="is-size-1" />
								</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
export default Layout
