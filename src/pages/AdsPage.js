import React from 'react'
import phonefull from '../assets/imgs/phone-full.svg'
import { BsWhatsapp } from 'react-icons/bs'

export const AdsPage = () => {
	return (
		<>
			<section className="section">
				<div className="container">
					<div className="mb-6 pb-3 columns is-multiline">
						<div className="column is-12 is-6-desktop mx-auto has-text-centered">
							<h2 className="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
								Anúnciate con El dato MX
							</h2>
							<p className="subtitle has-text-grey mb-5">
								Ayudamos a las marcas a hacer un impacto en México.
							</p>
							<div className="column is-12 is-block-desktop is-hidden-touch">
								<img
									className="mx-auto mt-0-widescreen is-block image"
									src={phonefull}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section has-background-dark">
				<div className="container">
					<div className="is-vcentered columns is-multiline">
						<div className="column is-6 is-5-desktop mb-4">
							<span className="has-text-light">Lorem ipsum</span>
							<h3 className="has-text-light mt-2 mb-3 is-size-3 is-size-3-mobile has-text-weight-bold">
								Para más información comunícate con nosotros:
							</h3>
							<p className="has-text-light is-size-4">
								<span className="icon is-large">
									<BsWhatsapp className="is-size-4" />
								</span>
								5534826365
							</p>
						</div>
						<div className="column is-5 ml-auto">
							<div className="mx-auto box p-6 has-background-light has-text-centered">
								<h4 className="is-size-5 mb-2 has-text-weight-bold">
									Suscribete a nuestra newsletter
								</h4>
								<p className="has-text-grey-dark mb-4">¡Proximamente!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default AdsPage
