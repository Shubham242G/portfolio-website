import Loader from 'react-loaders';
import './index.scss';
import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import projectData from '../../data/projects.json'
import { useEffect } from 'react';

const Portfolio=()=>{

    const [letterClass, setLetterClass]= useState('text-animate');
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },3000);
        return ()=>{
            clearTimeout(timer);
        }
        })

    const renderProjects = (projects)=>{
        return(
            <div className='images-container'>
                
                {
                    projects.map((project, idx)=>{
                        return(
                            
                            <div className='image-box'  key={idx}>
                                <img src={project.cover}
                                    className='project-image'
                                    alt="project"/>
                                    <div className='content'>
                                        <p className='title'>{project.title}</p>
                                        <h4 className='description'>{project.description}</h4>
                                        <button className='btn'onClick={()=> window.open(project.url)}>Open Live</button>
                                    </div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
        )
    }
    return(
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        strArray={"Portfolio".split("")} 
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <div>{renderProjects(projectData.projects)}</div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}
export default Portfolio;