import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import { Helmet } from 'react-helmet-async';
import "../assets/MovieDetails.css"
export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [genero, setGenero] = useState([]);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            console.log("Data received:", data);  // Verificar los datos recibidos
            setMovie(data);

            if (data.genres && data.genres.length > 0) {
                const genreNames = data.genres.map(genre => genre.name);
                setGenero(genreNames);
            } else {
                setGenero(["Unknown"]);  // Asignar "Unknown" si no hay géneros
            }
        });
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    const imageUrl = getMovieImg(movie.backdrop_path, 500);

    return (
        <div className="details">
            <Helmet>
                <title>{movie.title} - Detalles</title>
                <meta name="description" content={movie.overview} />
                <meta property="og:image" content={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            </Helmet>
            <h1 className="details__title">Titulo: {movie.title}</h1>
            <div className="details__container-content">
                <div className="details__container-img">
                    <img className="details__img" src={imageUrl} alt={movie.title} />
                </div>
                <p className="details__genres"><b>Géneros:</b> {genero.join(", ")}</p>
                <p className="details__description"><b>Descripción:</b> {movie.overview}</p>
            </div>
        </div>
    );
}
