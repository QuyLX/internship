import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../routes';
const NavBar = () => {
    return (
        <>
            <ul>
                {routes.map(route => (
                    <Link to={route.path} key={route.id}><li>{route.name}</li></Link>
                ))}
            </ul>
        </>
    )
}

export default NavBar
