import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screenshot1 from '../../assets/images/Screenshot (1).png'
const Inotebook=()=>{
    return(
        <>
            <div class="card" style={{width: '18rem'}}>
                <img src={Screenshot1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}

export default Inotebook;