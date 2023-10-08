import { Link } from "react-router-dom";
import "../sass/Header.scss";
import Navbar from "./Navbar";
import Select from 'react-select'
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";

const Header = () => {
  const {mode, changeMode} = useContext(DarkModeContext)

  const options = [
    { value: 'light', label: 'Claro'},
    { value: 'dark', label: 'Oscuro'}
  ]

  const handleMode = (e) => {
    console.log("Entramos")
    console.log(e.target.checked)

    changeMode(e.target.checked? 'dark':'light')
  }


  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className="search-bar__logo-container">Logo</div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            Buscar
          </label>
          <input type="search" className="search-bar__form-search" id="busqueda" />
          <input type="submit" value="Buscar" className="search-bar__form-submit" />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito">C</Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
        <div className="search-bar__dark-mode-container">
          <label htmlFor="search-bar__checkbox-label">Modo oscuro</label>
          <input type="checkbox" id="search-bar__checkbox-label" onChange={handleMode} checked={mode == 'light'? false:true}/>
        </div>
        <div className="search-bar__font-container">
          <select name="" id="">
            <option value="0">Fuente</option>
            <option value="1">Old Baskerville</option>
          </select>
          <Select options={options} onChange={handleMode} value={mode}></Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
