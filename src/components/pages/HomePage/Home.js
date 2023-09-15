import React from 'react';
import "./home.css";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { EQUIPES, PREPARATIONS , SERVICES} from './Data';


function Bar (){

    return (

        <span style = {{

            width: "150px",
            backgroundColor: "black",
            height: "2px",
            marginBottom: "10px"
        }}>

        </span>


    );
}

function Header (){

    return (

        <div className = "header home">
                <hgroup>
                <h1>
                    Polyvalent Corporation
                </h1>
                <h2>
                Centre de formation et de préparation aux concours
                </h2>         
                </hgroup>
                <Button href="/" name = "En savoir plus" />

            </div>

    )
}


const Button = function  ({href, name}){

    return (

        <a href={href}>
                <button >
                {name}
                </button>
            </a>

    )
}


const Section = function ({src, name, description}){

    return (

        <div>
                <img src = {src} alt = "service"/>
                <h3>
                    {name}
                </h3>
                <p>
                    {description}
                </p>
            </div>

    )
}

const Sections = function (){

    return (

        <div className = "sections">
                <h2>
                NOS SERVICES
                </h2>
                <Bar />
                <p className ="sections-des">
                Nous disposons d'une équipe qualifiée et l’expérience nécessaire pour vous aider à intégrer les écoles de vos rêves
                </p>
                <div className = "section service">
                    {
                        SERVICES.map((elm, index) => {
                            return (
                                <Section src = {elm["src"]} name = {elm["name"]} description = {elm["description"]} key={index}/>

                            )
                        })
                        
                    }
                </div>
                <Button href="/" name = "En savoir plus" />

            </div>
            

    );
}

const Preparation = function ({src, name, description}){


    return (
        <div>
           <img src={src} alt="service" />
           <h3>{name}</h3><p>{description}</p>
       </div> )

}


function Preparations (){

    return (

        <div className = "sections preparations">
        <h2>
        NOS PREPARATIONS
        </h2>
        <Bar />
        <p className ="sections-des">
        Nous disposons d'une équipe qualifiée et l’expérience nécessaire pour vous aider à intégrer les écoles de vos rêves
        </p>
        <div className = "section preparation centre">
            {
                PREPARATIONS.map((elm, index) => {
                    return (

                        <div>
                        <Preparation src = {elm["src"]} description={elm["description"]} key={index}/>
                        <Button href="/" name = "En savoir plus" />
                        </div>

                    );
                })
            }
        </div>
        

    </div>

    );
}


const Equipe = function ({src, name, poste, description, url}){

    return <>

        <div>
            <img src = {src} alt = "service"/>
            <hgroup>
                <h4>{name}</h4>
                <h5>{poste}</h5>
            </hgroup>
            <p>
                {description}
            </p>
            <p className = "e-social">
                <a href = {url}>
                    <FaIcons.FaFacebook />
                </a>
                <a href = {url}>
                    <FaIcons.FaTwitter />
                </a>
                <a href = {url}>
                    <FaIcons.FaLinkedinIn />
                </a>
                <a href = {url}>
                    <FaIcons.FaInstagram />
                </a>
                <a href = {url}>
                    <FaIcons.FaWhatsapp />
                </a>
                

            </p>
        </div>
    </>
    ;


}

function Equipes (){
    return (

        <div className = "sections">
                <h2>
                NOTRE EQUIPE
                </h2>
                <Bar />
                <p className ="sections-des">
                   Nous disposons d'une équipe qualifiée et l'expérience nécessaire pour vous aider à intégrer les écoles de vos rêves
                </p>
                <div className = "section service equipe">
                    {
                        EQUIPES.map((elm, index)=> {
                            return (
                                <Equipe src = {elm["src"]} poste = {elm["poste"]} description = {elm["description"]} name = {elm["name"]} key={index}/>
                            )
                        })
                    }
                </div>
                {/* <Button href="/" name = "En savoir plus" /> */}

            </div>

    )
}


function Contact (){

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
        


    );

}


function Home(){

    return (

        <div>
                <Header />
                <Sections />
                <Preparations />
                <Equipes />
                <Contact />
        </div>

    ) ;
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
