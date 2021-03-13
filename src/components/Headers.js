import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from "react-icons";


class Headers extends React.Component{

    // const [sidebar, setSidebar] = useState(false)

    // const showSidebar = () => setSidebar(!sidebar)

    render(){
       
        return (

            <header>
                <FaIcons.FaBars />
            </header>

        )
    }
}

export default Headers;