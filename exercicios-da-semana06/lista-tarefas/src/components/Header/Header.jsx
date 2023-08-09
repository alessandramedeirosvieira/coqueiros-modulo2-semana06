import { NavLink } from "react-router-dom";
import './styles.css';

function Header() {

  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="semana-06">Lista de Tarefas</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header;