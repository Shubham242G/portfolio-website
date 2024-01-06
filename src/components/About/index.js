import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact, faJava, faHtml5, faCss3, faNodeJs, faJsSquare} from '@fortawesome/free-brands-svg-icons'
import Loader from "react-loaders";
const About=()=>{
    const [letterClass, setLetterClass] = useState('text-animate');


    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        letterClass={letterClass}
                        idx={15}/>
                    </h1>
                    <p>I'm a Frontend Develoer with the knack for coding. I have a passion for computers and I am looking for a role in an 
                        established I.T. company to fulfill it. 
                    </p>

                    <p>
                        Learning and working with new technologies is somehting I would very much like to do thoughout my career so that my professional 
                        life never becomes static. I try to grow on the problem and solve it before the problem grows on me.
                    </p>
                    <p>
                        I think sports teaches a person more than anything and since I am hugely influenced 
                        by sports myself it had taught me how to  give a good individual performance which is best for the team. 
                    </p>
                    
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faJava} color="#F06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color="#28A409"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNodeJs} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJsSquare} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}
export default About;