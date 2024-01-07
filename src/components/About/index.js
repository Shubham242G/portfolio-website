import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import './index.scss'
import {FaReact, FaJava, FaHtml5, FaCss3, FaNodeJs} from 'react-icons/fa'
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
                            <FaReact/>
                        </div>
                        <div className="face2">
                            <FaJava/>
                        </div>
                        <div className="face3">
                            <FaHtml5/>
                        </div>
                        <div className="face4">
                            <FaCss3/>
                        </div>
                        <div className="face5">
                            <FaNodeJs/>
                        </div>
                        <div className="face6">
                            <FaCss3/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}
export default About;