import { Link } from 'react-router-dom'

export const Home = () => {
    return (
    <>
        <Link to='/lmbstats'>Estadísticas LMB</Link>
        <Link to='/map'>Mapa con información del INEGI</Link>
    </>
  )
}
 export default Home