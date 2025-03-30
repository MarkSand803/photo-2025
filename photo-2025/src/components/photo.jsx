
import './css/Photo.css';

function Photo(props) {
    return  (
    <section className="photo">
        <h3>{props.title}</h3>
        <p>{props.location}</p>
        <img src={process.env.PUBLIC_URL + "/" + props.image} />
    </section>
    );
}

export default Photo;