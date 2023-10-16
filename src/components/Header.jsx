import { Link } from "react-router-dom";
import "../sass/Header.scss";
import Navbar from "./Navbar";
import Select from 'react-select'
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import FontContext from "../contexts/FontContext";

const Header = () => {
  const {mode, changeMode} = useContext(DarkModeContext)
  const {font, changeFont} = useContext(FontContext)


  const handleMode = (e) => {
    console.log("Entramos")
    console.log(e.target.checked)

    changeMode(e.target.checked? 'dark':'light')
  }


  const handleFont = (e) => {
    changeFont(e.target.value)
  }

  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className={`search-bar__logo-container search-bar__logo-container__${mode}-mode`}>Logo</div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label"></label>
          <input type="search" className="search-bar__form-search" id="busqueda" />
          <input type="submit" value="Buscar" className="search-bar__form-submit" />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito"></Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
        <div className="search-bar__dark-mode-container">
          <label htmlFor="search-bar__checkbox-label">Modo oscuro
            <input type="checkbox" id="search-bar__checkbox-label" onChange={handleMode} checked={mode == 'light'? false:true}/>
            <span className="search-bar__checkbox"></span>
          </label>
          
        </div>
        <div className="search-bar__font-container">
          <select name="" id="" className="search-bar__font-container__select" onChange={handleFont}>
            <option value={`prata`}>Fuente</option>
            <option value={`prata`}>Prata</option>
            <option value={`eb`}>EB Garamond</option>
            <option value={`abril`}>Abril Fatface</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
