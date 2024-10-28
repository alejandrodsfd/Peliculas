import placeholder from "../img/palomitas-de-maiz.png"
export function getMovieImg(path, width) {
    // const urlImage = "https://image.tmdb.org/t/p/w500/" + props.poster_path;
    return(
        path? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
    )
}