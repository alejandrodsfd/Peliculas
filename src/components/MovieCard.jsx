import '../assets/MovieCard.css'
import { Link } from 'react-router-dom';
export function MovieCard(props) {
    const urlImage = "https://image.tmdb.org/t/p/w500/" + props.poster_path;
    return (
        <div className="card">
            <Link className='card__link' to={"/movies/" + props.id}>
                <div className="card__container-image">
                    <img className="card__image" src={urlImage} alt={props.title} />
                </div>
                <h1 className="card__name">{props.title}</h1>
            </Link>
        </div>
    )
}