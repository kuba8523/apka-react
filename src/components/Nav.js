import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom';


const Nav = () => {

    return (
        <div className={"navbar box has-background-light"}>
            <div className="navbar-brand">
                <Link className={"navbar-item"} to={"/"}>
                    <h1 className={"title has-text-danger"}> NETFLAX |</h1>
                </Link>
            </div>
            <div className={"navbar-menu is-active"}>
                <div className="navbar-end">
                    <div className="navbar-item has-text-centered"><Link to={"/schedule"}><p className="has-text-weight-bold has-text-black">TV SCHEDULE</p></Link></div>
                    <div className="navbar-item has-text-centered has-text-weight-bold has-text-white"><Link to={"/info"}><p className="has-text-weight-bold has-text-black">INFORMATION</p></Link></div>
                </div>
            </div>
        </div>
    )
};

export default Nav;
