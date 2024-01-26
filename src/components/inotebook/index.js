import './index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Screenshot1 from '../../assets/images/Screenshot (1).png'
import Screenshot2 from '../../assets/images/Screenshot (2).png'
import Screenshot3 from '../../assets/images/Screenshot (3).png'
import Screenshot4 from '../../assets/images/Screenshot (4).png'
import Screenshot5 from '../../assets/images/Screenshot (5).png'
import Screenshot6 from '../../assets/images/Screenshot (6).png'
const Inotebook=()=>{
    return(
        <>
            <div className='container'>
                <div className='image-container'>
                    <img className='image' alt='image' src={Screenshot1}/>
                    <img className='image' alt='image' src={Screenshot2}/>
                    <img className='image' alt='image' src={Screenshot3}/>
                    <img className='image' alt='image' src={Screenshot4}/>
                    <img className='image' alt='image' src={Screenshot5}/>
                    <img className='image' alt='image' src={Screenshot6}/>
                </div>
            </div>
        </>
    )
}

export default Inotebook;