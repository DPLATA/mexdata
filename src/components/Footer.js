import { Link } from 'react-router-dom'
import React from "react";
import {FiTwitter} from "react-icons/fi"

export const Footer = () => {

    return (
    <>
        <footer className="section footer">
            <div className="container">
                <div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
                    <div className="mr-auto mb-2">
                        <a className="is-inline-block" href="https://eldatomx.com">
                            <img className="image is-32x32" src="https://bulma.io/images/placeholders/32x32.png" alt="logo" width="32px"/>
                        </a>
                    </div>
                    <div>
                        <ul className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
                            {/*<li className="mr-4">Quienes somos</li>*/}
                            <Link className="navbar-item" to='/ads'>Anúnciate aquí</Link>
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
                        <a className="mr-4 is-inline-block" target="_blank" rel="noreferrer" href="https://twitter.com/el_dato_mx?s=20&t=MeDu5eUpRZF5WFuREHy5uw">
                            <span className="icon is-large">
                                <FiTwitter className="is-size-1"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
 export default Footer