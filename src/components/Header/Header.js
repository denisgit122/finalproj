import css from './Header.module.css'
import Headroom from 'react-headroom'
import {NavLink} from "react-router-dom";

const Header = () => {
return (
    <Headroom className={css.headroom}>
      <header className={css.header}>
          <NavLink to={'/me'}>admin</NavLink>
      </header>
    </Headroom>

);
};

export {Header};