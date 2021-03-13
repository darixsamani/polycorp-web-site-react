import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title : 'HOME',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        cName : 'nav-text'
    },
    {
        title : 'ABOUT',
        path : '/About',
        icon : <AiIcons.AiFillInfoCircle />,
        cName : 'nav-text'
    },
    {
        title : 'SERVICES',
        path : '/Service',
        icon : <FaIcons.FaCogs />,
        cName : 'nav-text'
    },
    {
        title : 'GALLERY',
        path : '/Gallery',
        icon : <FaIcons.FaFileImage />,
        cName : 'nav-text'
    },
    {
        title : 'TESTIMONIALS',
        path : '/Testimonial',
        icon : <IoIcons.IoIosText />,
        cName : 'nav-text'
    },
    {
        title : 'CONTACT US',
        path : '/Contact',
        icon : <FaIcons.FaEnvelope />,
        cName : 'nav-text'
    },
    {
        title : 'FREE ESTIMATE',
        path : '/Free-estimate',
        icon : <FaIcons.FaHandHoldingUsd />,
        cName : 'nav-text'
    },
    {
        title : 'INSURANCE ASSISTANCE',
        path : '/Insurance-assistance',
        icon : <FaIcons.FaHandsHelping />,
        cName : 'nav-text'
    },
    {
        title : 'FINANCING OPTIONS',
        path : '/Financing-option',
        icon : <IoIcons.IoIosCash />,
        cName : 'nav-text'
    },
    {
        title : 'FAQS',
        path : '/Faqs',
        icon : <FaIcons.FaQuestion />,
        cName : 'nav-text'
    }
]