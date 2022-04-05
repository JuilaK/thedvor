import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import {LINKS} from '../../constants/linksList';
import { NavLink } from 'react-router-dom';
import './navigationLinks.scss';

const NavigationLinks = ({ vertical, openModal }) => {
    return(
        <Nav vertical={vertical}>
            { LINKS.map(link => (
                <NavItem key={link.title} className="ds-nav-item"> 
                    <NavLink 
                        to={link.to}
                        exact
                        className="nav-link"                         
                        activeClassName="active"
                        onClick={openModal}>
                        {link.title}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    )   
}

export default NavigationLinks;

NavigationLinks.propTypes = {
    vertical: PropTypes.bool,
    openModal: PropTypes.func
};

NavigationLinks.defaultProps = {
    vertical: false
};