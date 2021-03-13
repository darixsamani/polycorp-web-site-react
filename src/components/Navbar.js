import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from "react-icons";


function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: '#F5F5F5'}}>
            <div style={{display: 'flex',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             color: '#F5F5F5'}} className="call__info-header">
                    <div style={{margin: '16px',
                                 fontSize: '24px',
                                 fontWeight: 'bolder'   }}>
                        <p><FaIcons.FaBuilding style={{marginLeft: '10px',
                                                       marginRight: '10px'   }} />Darix SAMANI</p>
                        <a href="tel:4793080413" style={{textDecoration:'none',
                                                         color: '#F5F5F5'   }}><FaIcons.FaPhone style={{marginLeft: '10px',
                                                       marginRight: '10px'   }} />6 91 43 94 24</a>
                    </div>
                    <Link to="#" className="menu-bar">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    
                </div> 
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle" style={{listStyle: 'none'}}>
                            <Link to="#" className="menu-bar">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
