import imagenes from "../assets/imagenes";
import "./header.css"

const Header = () => {
    return (
      <header>
        <div className="logo"> 
            <img src={imagenes.logo} />
            <h1> Gino Eguia </h1>
        </div>
        <nav>
          <ul>
            <li> <a href="/">Inicio</a> </li>
            <li> <a href="/about">Nosotros</a> </li>
            <li> <a href="/about">Recursos</a> </li> 
            <li> <a href="/about">Contáctenos</a> </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header
   