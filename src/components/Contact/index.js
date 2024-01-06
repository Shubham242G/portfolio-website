import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'
import { useEffect, useState, useRef } from 'react';
import { MapContainer, Popup, TileLayer,Marker } from 'react-leaflet';
import Loader from 'react-loaders';
const Contact = () =>{

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs
            .sendForm(
                'service_4dg3agy',
                'contact_form',
                refForm.current,
                'am1VZPuktoi7yeO5J'
            ).then(
                ()=>{
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e',]}
                        idx={15}
                        letterClass={letterClass}/>
                    </h1>
                    <p>
                        I am interested in a role that can challenge me and has dynamism as its undertone.
                        However, if you have any other query or request regarding me or anything in general, feel free to fill
                        the below form and hit me up.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text'
                                    name='name'
                                    placeholder='Name'
                                    required/>
                                </li>
                                <li className='half'>
                                <input type='email'
                                    name='email'
                                    placeholder='Email'
                                    required/>
                                </li>
                                <li>
                                <input type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    required/>
                                </li>
                                <li>
                                <textarea 
                                    name='message'
                                    placeholder='Message'
                                    required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Shubham Godiyal
                    <br/>
                    India,
                    <br/>
                    Bathla-Apartments,I.P. Extension, Patparganj
                    <br/>
                    Delhi-110092
                    <span>2shubham4godiyal2@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[28.6277099, 77.3022623]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position ={[28.6277099, 77.3022623]}>
                            <Popup>I am here  </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <Loader type="pacman"/>
            </div>
        </>
    )
}
export default Contact;