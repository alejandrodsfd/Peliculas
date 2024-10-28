import { ContextMovieCard } from "../components/ContextMovieCard";
import { Helmet } from 'react-helmet-async';
export function LandingPage() {
    return (
        <>
            <Helmet>
                <title>Películas - Lista de las mejores películas</title>
                <meta name="description" content="Descubre las mejores películas, revisa los detalles de tus películas favoritas y más." />
            </Helmet>
            <ContextMovieCard />
        </>
    )
}