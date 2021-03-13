import React from 'react';
import "./home.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
class Bar extends React.Component{


    render(){

        return (
            <span style = {{

                width: "150px",
                backgroundColor: "black",
                height: "2px",
                marginBottom: "10px"
            }}>

            </span>
        )
    }
}
class Header extends React.Component{


    render(){
        return(

            <div className = "header home">
                <hgroup>
                <h1>
                    Polyvalent Corporation
                </h1>
                <h2>
                    Centre de formation et de preparation aux concours
                </h2>         
                </hgroup>
                <Button href="/" name = "En savoir plus" />

            </div>
        )
    }

}

class Button extends React.Component{

    render(){

        return(
            <a href={this.props.href}>
                <button >
                {this.props.name}
                </button>
            </a>

        )
    }
}
class Section extends React.Component{


    render(){

        return(

            <div>
                <img src = {this.props.src} alt = "service"/>
                <h3>
                    {this.props.name}
                </h3>
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}
class Sections extends React.Component{


    render(){

        return (
            <div className = "sections">
                <h2>
                NOS SERVICES
                </h2>
                <Bar />
                <p className ="sections-des">
                    Nos disposons d'une equipe qualifiee et l'experience nessaire pour vous aider a integrer les ecoles de vos reves
                </p>
                <div className = "section service">
                    <Section src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" name = "FORMATION" description = "Faites vous forner par les etudiants des grandes ecoles et facultes du cameroun "/>
                    <Section src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" name = "ORIENTATION" description = "Une equipe d'expert disponible 24h /24 qui vous oriente apres l'obtention de votre baccalaureat"/>
                    <Section src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" name = "LIVRES" description = "Obtenez les meilleurs livres de preparation aux concours et facultes du cameroun"/>
                </div>
                <Button href="/" name = "En savoir plus" />

            </div>
            
            
        )
    }
}
class Preparation extends Section{

}
class Preparations extends React.Component{


    render(){

        return (
            <div className = "sections preparations">
                <h2>
                NOS PREPARATIONS
                </h2>
                <Bar />
                <p className ="sections-des">
                    nos disposons d'une equipe qualifiee et l'experience nessaire pour vous aider a integrer les ecoles de vos reves
                </p>
                <div className = "section preparation centre">
                    <div>
                        <Preparation src = "https://placeholder.pics/svg/300x150/EFEFFF-FF4E56/FFFFFF-FFFFFF" name = "INGENIEURIE" description ="Obtenez les outils necessaire pour integres les grandes ecoles du cameroun grace a une formations complete et une survie personnel" />
                        <Button href="/" name = "En savoir plus" />
                    </div>
                    <div>
                        <Preparation src = "https://placeholder.pics/svg/300x150/FFA5FF-EF455A/FFFFFF-FFFFFF" name = "MEDECINE" description ="Obtenez les outils necessaire pour integres les grandes ecoles du cameroun grace a une formations complete et une survie personnel"/>
                        <Button href="/" name = "En savoir plus" />
                    </div>
                    <div>
                        <Preparation src = "https://placeholder.pics/svg/300x150/FFFFFF-FEA456/FFFFFF-FFFFFF" name = "ENSEIGNEMENT" description ="Obtenez les outils necessaire pour integres les grandes ecoles du cameroun grace a une formations complete et une survie personnel"/>
                        <Button href="/" name = "En savoir plus" />
                    </div>
                    <div>
                        <Preparation src = "https://placeholder.pics/svg/300x150/FFFFFF-126FEF/FFFFFF-FFFFFF" name = "AUTRES PREPAS" description ="Obtenez les outils necessaire pour integres les grandes ecoles du cameroun grace a une formations complete et une survie personnel"/>
                        <Button href="/" name = "En savoir plus" />
                    </div>
                    
                </div>
                

            </div>
            
            
        )
    }
}
class Equipe extends React.Component{

    render(){

        return(
            <div>
                <img src = {this.props.src} alt = "service"/>
                <hgroup>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.poste}</h5>
                </hgroup>
                <p>
                    {this.props.description}
                </p>
                <p className = "e-social">
                    <a href = {this.props.url}>
                        <FaIcons.FaFacebook />
                    </a>
                    <a href = {this.props.url}>
                        <FaIcons.FaTwitter />
                    </a>
                    <a href = {this.props.url}>
                        <FaIcons.FaLinkedinIn />
                    </a>
                    <a href = {this.props.url}>
                        <FaIcons.FaInstagram />
                    </a>
                    <a href = {this.props.url}>
                        <FaIcons.FaWhatsapp />
                    </a>
                    

                </p>
            </div>

        )
    }
}
class Equipes extends React.Component{


    render(){

        return (
            <div className = "sections">
                <h2>
                NOTRE EQUIPE
                </h2>
                <Bar />
                <p className ="sections-des">
                    Nos disposons d'une equipe qualifiee et l'experience nessaire pour vous aider a integrer les ecoles de vos reves
                </p>
                <div className = "section service equipe">
                    <Equipe src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" poste = "PROMOETEUR" description = "Faites vous forner par les etudiants des grandes ecoles et facultes du cameroun " name = "TIEUGUE KANA Evariste"/>
                    <Equipe src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" poste = "VICE PROMOTEUR" description = "Une equipe d'expert disponible 24h /24 qui vous oriente apres l'obtention de votre baccalaureat" name = "DONFACK SIEWE Elton"/>
                    <Equipe src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" poste = "PRESIDENT" description = "Obtenez les meilleurs livres de preparation aux concours et facultes du cameroun" name = "POUAHA NZAMAFFO"/>
                    <Equipe src = "https://placeholder.pics/svg/200x200/2C45FF-261DFF/FFFFFF-2035FF" poste = "INFORMATICIEN" description = "Obtenez les meilleurs livres de preparation aux concours et facultes du cameroun"name = "SAMANI SIEWE DARIX"/>
                </div>
                {/* <Button href="/" name = "En savoir plus" /> */}

            </div>
            
            
        )
    }
}

class Contact extends React.Component{

    render(){

        return (
            <div className = "sections">
                <h2>
                    CONTACTEZ-NOUS
                </h2>
                <Bar />
                <div className = "contact">
                    <form method = "get" action = "">
                    <label name = "firstname">
                        First name :
                    </label>
                    <input type = "text" name = "fistname" placeholder = "SAMANI SIEWE" />
                    <label name = "lastname">
                        Last name :
                    </label>
                    <input type = "text" name = "lastname" placeholder = "Darix" />
                    <label name = "email">
                        Email :
                    </label>
                    <input type = "email" name = "fistname" placeholder = "samanidarix@gmail.com" />
                
                    <label name = "tel">
                        Tel :
                    </label>
                    <input type = "tel" name = "fistname" placeholder = "6 91 43 94 24" />

                    <label name = "message">
                        Message :
                    </label>
                    <textarea width = "300px" height = "400px" />
                    <input type = "submit" />
                    </form>
                    <img src = "https://placeholder.pics/svg/600x300/2C45FF-261DFF/FFFFFF-2035FF" alt="contact" />
                </div>

            </div>
        )
    }
}
class Home extends React.Component{



    render(){


        return (

            <div>
                <Header />
                <Sections />
                <Preparations />
                <Equipes />
                <Contact />
            </div>
            
        )
    }
}

export default Home;







// import React from 'react';
// import Hero from '../../Hero';
// import { homeObjOne,  homeObjThree} from './Data';
// import { ServicesSectionData } from './ServicesSectionData';
// import { Link } from 'react-router-dom';
// import './sectionService.css';
// import imageAbout from '../../images/image_1-truck2x-768x501.png';

// function Home() {
//     return (
//         <>
//             <Hero {...homeObjOne} />
//             <Hero {...homeObjThree} />
//             <div className="service">
//                 {ServicesSectionData.map(
//                     (service,index) => {
//                         return(
//                             <div key={index} className={service.cName}>
//                                 <img src={service.img} alt="services img" />
//                                 <h3>{service.title}</h3>
//                                 <p> {service.description} </p>
//                                 {/*<Link className="btn btn-info" to={service.path}>
//                                     {service.buttonText}
//                                 </Link>*/}
//                             </div>
//                         )
//                     }
//                 )}
//             </div>
//             <div className="container about">
//                 <div className="row">
//                 <div className="col-md-6 col-sm-12 col-xs-12">
//                     <img src={imageAbout} alt="about img" className="img-fluid"/>
//                 </div>
//                 <div className="col-md-6 col-sm-12 col-xs-12">
//                     <h3>YOUR LOCAL ROOFING CONTRACTOR</h3>
//                     <h5>Serving Arkansas for 25 years</h5>
//                     <p>When the time comes for your home to need a roof repair or replacement, your certified Foster Roofing teams will be here to make the experience a great one! Our professionals are dedicated to protecting you and your home by using the highest quality materials and workmanship to solve any roofing problem. Contact us at either (479) 751-2300 (NWA) or at (479) 308-0413 (River Valley)</p>
//                 </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home
