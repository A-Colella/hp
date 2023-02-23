import React from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import { NavLink as RouterLink } from "react-router-dom";
import style from "../header/header.module.css"

const Header = (props) => {
    const {logo, NavItem} = props;
    const itemList = NavItem.map ((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            activeClassName ={style.active}
                            to={item.url}
                            className="nav-link">
                    {item.text}

                </RouterLink>
            </NavItem>
        )
    });
    
    return (
        <div className={style.Navbar}>
            <Navbar expand="md" light>
                <div className="container">
                    <RouterLink to="/">
                        <img className= {style.logo} src= {logo} alt=""/>
                    </RouterLink>
                    <NavbarToggler onClick={toggle}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {itemList}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>

    );

}

export default Header;
