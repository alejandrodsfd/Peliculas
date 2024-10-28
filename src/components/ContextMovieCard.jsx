import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "./MovieCard"
import '../assets/ContentMovieCard.css'
export function ContextMovieCard() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        get("/discover/movie").then((data) => {
            console.log(data.results);
            setMovies(data.results);
        });
    }, [])
    return (
        <div className="cards">
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            )
            )}
        </div>
    )
}