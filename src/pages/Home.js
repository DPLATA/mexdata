import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
    <>
        <Link className="link" to='/lmbstats'>Estadísticas LMB</Link>
        <Link className="link" to='/map'>Mapa con información del INEGI</Link>
        <a className="link" href="https://medium.com/moneyball-en-español" target="_blank">Moneyball en español</a>
        {/*deportes - triatlon - fba*/}
    </>
  )
}
 export default Home